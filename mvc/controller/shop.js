
const Product = require('../models/products');
const Cart = require('../models/cart');

exports.showProducts = (req, res, next) => {
    console.log('/ route hit');
    Product.fetchAll(products => {
        res.render('shop/product-list.ejs', {
            prods: products,
            pageTitle: 'All products',
            path: '/product',
        });
    });  
};



exports.getProduct = (req, res, next) => {
    console.log('/products details routes');
    const productId = req.params.productId;
    Product.findById(productId, prod => {
       res.render('shop/product-detail.ejs', 
       { product: prod, 
        pageTitle: 'product details', 
        path: '/product'
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
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            console.log('All Products from file', products);
            const cartProduct = [];
            for(product of products) {
                const cartProductData = cart.products.find(prod => prod.id === product.id);
                if(cartProductData) {
                    cartProduct.push({productData: product, qty: cartProductData.qty});
                }
            }
            console.log('List of products in cart', cartProduct);
            res.render('shop/cart', {
                pageTitle: 'Your cart',
                path: '/cart',
                products: cartProduct
            });
        });
    });
};

exports.postCart = (req, res, next) => {
    console.log('/cart post route hit');
    const prodId = req.body.productId;
    console.log('Requested product Id', prodId);
    Product.findById(prodId, product => {
        console.log('Product we get to add cart', product);
        Cart.addProduct(prodId, product.price);
        res.redirect('/cart');
        
    });
};

exports.postCartDelete = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.deleteProduct(prodId, product.price);
        res.redirect('/cart');
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


  



