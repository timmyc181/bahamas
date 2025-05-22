#!/usr/bin/env node

import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { resolve } from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Mailer } from './contact.js'

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static('dist'))
app.use(express.json())

const mailer = new Mailer()

app.post('/api/send-contact-email',(req, res, next) => {
	let data = req.body
	mailer.contactEmail(data.name, data.email, data.phoneNumber, data.message)
		.then(r => res.send(r))
		.catch(e => next(e))
})

app.post('/api/send-dock-request-email', (req, res, next) => {
	let data = req.body
	mailer.dockRequestEmail(data.name, data.email, data.phoneNumber, data.message)
		.then(r => res.send(r))
		.catch(e => next(e))
})

app.get('/*', (req, res) => {
	res.sendFile(resolve(__dirname, '../dist/index.html'))
})

const port = process.env.PORT || 8000
app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`)
})