export default function (req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        // port: 465,
        // host: "smtp.gmail.com",
        // auth: {
        //     user: 'demo email',
        //     pass: process.env.password,
        // },
        // secure: true,
        service: 'gmail',
        secure: false,
        auth: {
            user: 'athavan19794@gmail.com',
            pass: 'Athavan61*'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailData = {
        from: 'athavan19794@gmail.com',
        to: 'athavan@arkinfotec.com',
        subject: `Message From... ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })

    console.log("mail", req.body)
    res.send('success')
}