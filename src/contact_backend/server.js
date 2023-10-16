const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const credentials = require('./config');

const transport = {
	host: credentials.HOST,
	port: credentials.MAILPORT,
	auth: {
		user: credentials.USER,
		pass: credentials.PASS,
	},
	from: credentials.EMAIL,
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('server is ready to take messages!!!!!');
	}
});

router.post('/send', (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	const senderEmail = `${name} <${credentials.EMAIL}>`;
	const yourEmail = `<${credentials.YOURNAME}> <${credentials.EMAIL}>`;
	const content = `name: ${name} \n email: ${email} \n message: ${message} `;
	const mail = {
		from: senderEmail,
		to: credentials.EMAIL,
		subject: `New DecorUs message from ${name}`,
		text: content,
	};

	// Deliver message from DecorUs to mailbox.
	transporter.sendMail(mail, (err, data) => {
		console.log(err);
		console.log(data);
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({
				status: 'success',
			});

			// If success, send auto-reply email.
			transporter.sendMail(
				{
					from: yourEmail,
					to: email,
					subject: 'Message Received, Thank You!',
					text: `Hi ${name},\nThank you for sending me a message. I will get back to you soon.\n\nBest Regards,\n${credentials.YOURNAME}\n${credentials.YOURSITE}\n\n\nMessage Details\nName: ${name}\n Email: ${email}\n Message: ${message}`,
					html: `<p>Hi ${name},<br>Thank you for sending me a message. I will get back to you soon.<br><br>Best Regards,<br>${credentials.YOURNAME}<br>${credentials.YOURSITE}<br><br><br>Message Details<br>Name: ${name}<br> Email: ${email}<br> Message: ${message}</p>`,
				},
				function (error, info) {
					if (error) {
						console.log(error);
					} else {
						console.log('Message sent.' + info.response);
					}
				}
			);
		}
	});
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
	res.json('HUH???');
});

app.listen(4000, () => console.log('backend is running on port 4000'));
