
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();
console.log(rootDir);

router.get('/add-product', (req, res, next) => {
    console.log('In the middleware 2');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;