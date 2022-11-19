var http = require("http");
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anderson.nunes.souza',
    pass: 'dyzokjqukgbsdkef'
  }
});

var mailOptions = {
  from: 'anderson.nunes.souza@gmail.com',
  to: 'anderson.nunes.souza@hotmail.com, hacawe15185@fgvod.com',
  cc: 'anderson.nunes.souza@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});