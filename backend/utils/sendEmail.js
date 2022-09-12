const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

    const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions)
};

module.exports = sendEmail;













// const nodemailer = require('nodemailer')

// const sendMail = async (to,subject,content) => {
//     //let testAccount = await nodemailer.createTestAccount()

//             const transporter = nodemailer.createTransport({
//                 service: "gmail",
//                 host: 'smtp.gmail.com',
//                 port: 465,
//                 auth: {
//                     user: '@gmail.com',
//                     pass: process.env.PASS,
//                 }
//             })
//             let info = await transporter.sendMail({
//                 from: '@gmail.com',
//                 to,
//                 subject,                
//                 html:`<div> ${content} </div>`
//             })
//             return info
// }

// module.exports = sendMail