const express = require('express')
const app = express();
require('dotenv').config()

var nodemailer = require('nodemailer');
const { emailTemplate } = require('./utils');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.sftpEmail,
    pass: process.env.sftpPassword
  }
});

// enable middleware to parse body of Content-type: application/json
app.use(express.json())

app.post('/contact', (req, res) => {
    var mailOptions = {
        from: process.env.sftpEmail,
        to: process.env.adminEmail,
        subject: 'New Contact',
        html: emailTemplate(req.body)
    };
      
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            console.log('mailOptions--->', mailOptions);
            res.statusCode = 500;
            return res.send('Something went wrong...');
        } else {
            console.log('Email sent: ' + info.response);
            res.statusCode = 200;
            return res.send('OK');
        }
    });
});

app.listen(8080, () => console.log('Server started'));