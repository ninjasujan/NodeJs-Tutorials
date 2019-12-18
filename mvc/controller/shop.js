
const Product = require('../models/products');

exports.showProducts = (req, res, next) => {
    console.log('/ route hit');
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All products',
            path: '/product',
        });
    });  
};

exports.getIndex = (req, res, next) => {
    console.log('/route hit in index file');
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    });    
};


exports.getCart = (req, res, next) => {
    console.log('/cart route');
    res.render('shop/cart', {
        pageTitle: 'Your cart',
        path: '/cart'
    });
};

exports.getOrders = (req, res, next) => {
    console.log('/orders routes');
    res.render('shop/orders.ejs', {
        pageTitle: 'Your cart',
        path: '/orders'
    });
};

exports.checkout = (req, res, next) => {
    res.render('shop/checkout.ejs', {
        pageTitle: 'checkout page',
        path: '/checkout'
    });
};


  



