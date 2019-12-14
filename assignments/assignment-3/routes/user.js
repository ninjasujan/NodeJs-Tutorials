
const express = require('express');
const router = new express.Router();
const path = require('path');

const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
    console.log('middleware for handling /user');
    res.sendFile(path.join(rootDir, 'views', 'user.html'));
});

router.get('/list', (req, res, next) => {
    console.log('middleware for handling /list');
    res.sendFile(path.join(rootDir, 'views', 'list.html'));
});


module.exports = router;