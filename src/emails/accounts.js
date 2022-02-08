const nodemailer = require('nodemailer');

const sendWelcomeEmail = (email, name) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rishu04072001@gmail.com',
            pass: '**************'
        }
    });

    var mailOptions = {
        from: 'rishu04072001@gmail.com',
        to: email,
        subject: 'Thanks for joining in!',
        html: `<h1>Welcome ${name} </h1><p>verify : ${"http://localhost:3000/"}</p>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendWelcomeEmail
}