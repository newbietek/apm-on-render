const express = require('express');
const winston = require('winston');
const { combine, timestamp, json, errors } = winston.format;
const logger = winston.createLogger({
	level: 'http',
	format: combine(
		errors({ stack: true }),
		timestamp({
			format: 'YYYY-MM-DD hh:mm:ss.SSS',
		}),
		json()
	),
	transports: [new winston.transports.Console()],
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	logger.warn('Get endpoint is invoked');
	res.json({
		message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
	});
});

app.post('/', (req, res) => {
	try {
		logger.info('Post endpoint is invoked');
		throw new Error(JSON.stringify(req.body));
		res.json(req.body);
	} catch (ex) {
		logger.error(ex);
		res.status(500).send('Internal server error');
	}
});

const port = 3000;
app.listen(port, () => {
	console.log(`Listening: http://localhost:${port}`);
});

module.exports = app;
