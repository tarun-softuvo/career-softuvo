const ejs = require("ejs");

const getTemplateMail = async (data, templateName) => {
  return new Promise(async (resolve, reject) => {
    await ejs.renderFile(
      `views/email_templates/${templateName}`,
      { data },
      async (err, mailData) => {
        if (err) {
          console.log("error", err);
          reject(err);
        } else {
        //   console.log("mailData", mailData);
          resolve(mailData);
        }
      }
    );
  });
};
module.exports = getTemplateMail;
