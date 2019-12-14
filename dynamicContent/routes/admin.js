
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();
console.log(rootDir);

const products = [];

router.get('/add-product', (req, res, next) => {
    console.log('In the middleware 2');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res) => {
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;