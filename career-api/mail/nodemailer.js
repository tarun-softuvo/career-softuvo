const nodemailer = require("nodemailer");
const { google } = require("googleapis");

async function sendMail(email,mailTemplate) {
const CLIENT_ID =
"173635790968-hip5js69c1cgdo8b16nkn1t3uj878li3.apps.googleusercontent.com"
 const CLIENT_SECRET = "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"
const REFRESH_TOKEN =
    "1//04CTpcDNfkmM6CgYIARAAGAQSNwF-L9Ir2cA4OZMk019UoOpsUkaQgGGgzOS-qxutmhMBG4ifWxfIk8M66l5KKy8wCK8h8nt__4c"
 const REDIRECT_URL = "https://developers.google.com/oauthplayground"

    const OAuthClient = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URL
    );
    OAuthClient.setCredentials({ refresh_token: REFRESH_TOKEN });
  

  try {
    const accessToken = await OAuthClient.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "tarun.test12@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
  transport.verify(function (error, success) {
    if (error) {
      // console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
let url ='http://localhost:3000/admin/reset-password'
  const mail = {
    from: 'tarun.test12@gmail.com',
    to: email,
    subject: "Password Reset",
    html:mailTemplate
  };
  
    const output = await transport.sendMail(mail);
    return {status:true ,message:"Successfully Submitted"}
  } catch (err) {
    console.log('error',err)
    return {status:false ,message:err.message}
  }
}
module.exports = sendMail;