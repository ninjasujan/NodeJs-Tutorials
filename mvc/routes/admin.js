const path = require('path');

const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin');

// /admin/add-product => GET
router.get('/add-product', adminController.addProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postProducts);

router.get('/products', adminController.getProducts);

module.exports = router;

