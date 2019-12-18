const path = require('path');

const express = require('express');
const shopController = require('../controller/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/product', shopController.showProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.checkout);

module.exports = router;
