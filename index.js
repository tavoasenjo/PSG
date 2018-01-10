const express = require('express');
const path = require('path');
const app = express();

// Call the data
const products = require('./server/products');

// this serves all the files placed in public
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', function(req, res, next) {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

// Create route to return data from products
app.get('/api/products', (req, res, next) => {
	res.send(products);
});

const PORT = process.env.PORT || 1111;
app.listen(PORT); // app.listen(1111);
