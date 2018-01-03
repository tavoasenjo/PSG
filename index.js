const express = require('express');

const app = express();

app.get('/test', (req, res) => {
	res.send('This is PSG 🤹🏽‍♂️');
});
const PORT = process.env.PORT || 1111;
app.listen(PORT); // app.listen(1111);
