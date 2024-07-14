import nodemailer from 'nodemailer'
import { CONTACT_EMAILS } from './constants.js'


export class Mailer {
	constructor() {
		this.transporter = nodemailer.createTransport({
				service: 'gmail',
				host: 'smtp.gmail.com',
				// port: 465,
				auth: {
					type: 'OAuth2',
					user: process.env.MAIL_USERNAME,
					pass: process.env.MAIL_PASSWORD,
					clientId: process.env.OAUTH_CLIENTID,
					clientSecret: process.env.OAUTH_CLIENT_SECRET,
					refreshToken: process.env.OAUTH_REFRESH_TOKEN
				}
			}
		);
	}
	
	contactEmail(name, email, phoneNumber, message) {
		let body = 'Contact request from ' + name
		body += '\nEmail address: ' + email
		body += '\nPhone number: ' + phoneNumber
		body += '\nMessage: ' + message
		
		return this.#sendEmail(
			CONTACT_EMAILS,
			'StorrStays contact request from ' + name,
			body
		)
	}
	
	#sendEmail(emails, subject, message) {
		let mailOptions = {
			from: process.env.MAIL_USERNAME,
			to: emails,
			subject: subject,
			text: message
		}
		
		return new Promise((resolve, reject) => {
			this.transporter.sendMail(mailOptions)
				.then(r => resolve(r))
				.catch(e => reject(e))
		})
		
	}
	
	
}

