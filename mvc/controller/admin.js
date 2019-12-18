
const Product = require('../models/products');

exports.addProducts = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product'
    });
};

exports.postProducts = (req, res, next) => {
    console.log('Add products to database')
    const {title, imageUrl, price, description} = req.body;
    const product = new Product(title, imageUrl, price, description);
    console.log('new product', product);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/product-list.ejs', {
            prods: products,
            pageTitle: 'admin products',
            path: '/admin/products',
        });
    });
}