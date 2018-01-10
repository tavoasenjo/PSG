const express = require('express');
const path = require('path');
const app = express();

// this serves all the files placed in public
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 1111;
app.listen(PORT); // app.listen(1111);
