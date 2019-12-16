
const express = require('express');
const path = require('path');

const adminData = require('./admin');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('In the middleware 1');
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'shop list', 
        path: '/', 
        hasProduct: products.length > 0,
        activeShop: true,
        productCss: true,
        layout: false
    });
});

module.exports = router;