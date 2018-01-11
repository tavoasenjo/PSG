const express = require('express');
const path = require('path');
const app = express();

// Call the data
const products = require('./server/products');

//this serves static files from the React App
app.use(express.static(path.join(__dirname, 'client/build')));

// Create route to return data from products
app.get('/api/products', (req, res, next) => {
	res.send(products);
});

const PORT = process.env.PORT || 1111;
app.listen(PORT); // app.listen(1111);
