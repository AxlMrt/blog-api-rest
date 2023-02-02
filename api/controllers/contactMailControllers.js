const nodemailer = require('nodemailer');
require('dotenv').config();

const contactPost = async (req, res) => {
  const { name, email, message } = req.body;

  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: 'Contact from blog-axl.onrender',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`
  }

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
}

module.exports = {
  contactPost
}
