const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./userModel");
const sendMail = require("../mail/nodemailer");
const getTemplateMail = require("../helpers/mailTemplate");
const userServices = require("./userServices");
const apiUrl = process.env.apiUrl;
const secret = process.env.secretKey;
module.exports = {
  signup: async (req, res) => {
    let email = req.body.email.toLowerCase();
    let password = req.body.password;
    let hashPassword = await bcrypt.hash(password, 10);
    new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: email,
      password: hashPassword,
    }).save((err, docs) => {
      if (err) {
        console.log("Error in signup", err.message);
        res.send({ message: err.message });
      } else {
        res.status(201).json({ docs, message: "Account Created" });
      }
    });
  },
  /**
   * userController.login()
   */
  login: async (req, res) => {
    console.log(req.body);
    User.findOne({
      email: req.body.email.toLowerCase(),
    }).then((user) => {
      console.log(user);
      if (user) {
        console.log(user);
        bcrypt
          .compare(req.body.password, user.password)
          .then(async (result) => {
            if (result == true) {
              let { token, expiresIn } = await userServices.genrateToken(
                user.email,
                "2h"
              );
              console.log("token in userController", token);
              if (user) {
                res.status(200).json({
                  success: true,
                  expiresIn: expiresIn,
                  result: user,
                  token: token,
                });
              }
            } else {
              res.status(200).json({
                message: "Incorrect Password",
              });
            }
          });
      } else {
        res.status(200).json({
          message: "Email not exist",
        });
      }
    });
  },
  /**
   * userController.forgotPassword()
   */ forgotPassword: async (req, res) => {
    User.findOne({ email: req.body.email }, async (err, docs) => {
      if (err) {
        console.log("error", err);
        res.send({ message: err.message });
      }
      if (docs) {
        console.log("req in forgot password", apiUrl);
        let { token, expiresIn } = await userServices.genrateToken(
          req.body.email,
          "5m"
        );
        let url = `${apiUrl}reset-password?token=${token}`
        await User.findOneAndUpdate(
          { email: req.body.email },
          { forgotPasswordLink: token }
        );
        let mailTemplate = await getTemplateMail(url, "passwordReset.ejs");
        let response = await sendMail(req.body.email,mailTemplate);
        if (response.status) {
          res.status(201).json({ message: "Link Sent" });
        } else {
          res.status(200).json({ message: "Some Server Error" });
        }
      } else {
        res.status(200).json({ message: "Email not registered" });
      }
    });
  },
  resetPassword: async (req, res) => {
    let token = req.token;
    let email = req.email;
    let password = req.body.password;
    let newPassword = await bcrypt.hash(password, 10);
    User.findOneAndUpdate(
      { email: email, forgotPasswordLink: token },
      { password: newPassword, forgotPasswordLink: "" },
      (err, docs) => {
        if (err) {
          res.status(200).json({ status: false, message: err.message });
        } else if (docs) {
          res.status(201).json({ status: true, message: "Password Updated" });
        } else {
          res.status(200).json({ status: false, message: "Invalid Request" });
        }
      }
    );
  },
  verifyToken: async (req, res) => {
    res.status(201).json({ status: true, message: "Token verified" });
  },
  changePassword: async (req, res) => {
    console.log("req.body", req.body, req.email);
    let email = req.email;
    let password = req.body.currentpassword;
    let userData = await User.findOne({ email: email });
    let passwordValidation = await bcrypt.compare(
      password,
      userData["password"]
    );
    console.log("password Validation", passwordValidation);
    if (passwordValidation) {
      let newPassword = req.body.newpassword;
      console.log('newPassword',newPassword)
      let encryptedNewPassword = await bcrypt.hash(newPassword, 10);
      User.findOneAndUpdate(
        { email: email },
        { password: encryptedNewPassword },
        (err, docs) => {
          if (err) {
            res.status(200).json({ status: false, message: err.message });
          }
          console.log("docs ", docs);
          if (docs) {
            res.status(201).json({ status: true, message: "Password Updated" });
          }
        }
      );
    } else {
      res
        .status(200)
        .json({ status: false, message: "invalid current password" });
    }
  },
};
