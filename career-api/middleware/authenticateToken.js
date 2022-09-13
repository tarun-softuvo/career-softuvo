const jwt = require("jsonwebtoken");
const secret = process.env.secretKey;
const authenticateToken = async (req, res, next) => {
    // console.log('headers',req.headers)
    if(!req.headers.authorization){
      req.headers.authorization=''
    }
  let token = req.query.token || req.body.token ||req.headers.authorization.split(" ")[1];
  let output = await jwt.verify(token, secret, (err, decode) => {
    if (err) {
      console.log("error", err);
      res.status(200).json({ status: false, message: err.message });
    } else {
      req.email = decode.email;
      req.token=token
      next();
    }
  });
};
module.exports = authenticateToken;
