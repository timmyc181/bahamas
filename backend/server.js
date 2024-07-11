import express from 'express'
import { resolve } from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static('dist'))
app.get('/', (req, res) => {
	res.sendFile(resolve(__dirname, '../dist/index.html'))
})
app.listen(8000, () => {
})