const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	console.log('Get endpoint is invoked');
	res.json({
		message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
	});
});

app.post('/', (req, res) => {
	console.log('Post endpoint is invoked', req.body);
	res.json(req.body);
});

const port = 3000;
app.listen(port, () => {
	console.log(`Listening: http://localhost:${port}`);
});

module.exports = app;
