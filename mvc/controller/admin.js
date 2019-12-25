
const Product = require('../models/products');

exports.addProducts = (req, res, next) => {
    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false
    });
};

exports.postProducts = (req, res, next) => {
    console.log('Add products to database')
    const {title, imageUrl, price, description} = req.body;
    const product = new Product(null, title, imageUrl, price, description);
    console.log('new product', product);
    product.save();
    res.redirect('/');
};

exports.editProduct = (req, res, next) => {
    console.log('/edit-product route hit');
    const editMode = req.query.edit;
    const prodId = req.params.productId;
    if(!editMode) return res.redirect('/');
    // search the desired product in DB
    Product.findById(prodId, product => {
        if(!product) return res.redirect('/');
        res.render('admin/edit-product.ejs', {
            product: product,
            pageTitle: 'Edit Product',
            path: '',
            editing: editMode
        });
    });
};

exports.postEditProduct = (req, res, next) => {
    console.log('product we want to update', req.body)
    const id = req.body.productId;
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const updatedProduct = new Product(id, title, imageUrl, price, description);
    updatedProduct.save();
    res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/product-list.ejs', {
            prods: products,
            pageTitle: 'admin products',
            path: '/admin/products',
        });
    });
};

exports.deleteProduct = (req, res, next) => {
    console.log('product delete route');
    const id = req.body.productId;
    Product.deleteProduct(id);
    res.redirect('/admin/products');
};