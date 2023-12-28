var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(name, fromEmail, message) {
  var transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    secure: true,
    port: 465,

    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_APP_PASS,
    },
  });

  var mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.ZOHO_EMAIL,
    subject: fromEmail,
    text: name + " ----- " + message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      return true;
    }
  });
}
