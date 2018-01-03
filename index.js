const express = require('express');
const frontend = require('./client/src/App');

const app = express();

app.get('/', (req, res) => {
	res.send(frontend);
});
const PORT = process.env.PORT || 1111;
app.listen(PORT);

// app.listen(1111);
