import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, content, attachments = [] }) => {

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: `FINTECH IT SOLUTIONS <${process.env.MAIL_USER}>`,
    to,
    subject,
    html: content,
    attachments
  };

  await transporter.sendMail(mailOptions);

};