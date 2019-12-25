
// cart model

const rootDir = require('../util/path');
const fs = require('fs');
const path = require('path');
const p = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // fetch the previous product
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice : 0};
            console.log(typeof cart.products);
            if(!err) {
                cart = JSON.parse(fileContent);
            } 
            // analyse the product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            console.log('existing product in a cart is', existingProduct);
            // adding new products
            let updatedProducts;
            if(existingProduct) {
                // if product already exist then increase quantity
                console.log('product already existed');
                updatedProducts = {...existingProduct};
                updatedProducts.qty += 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProducts;
            } else {
                // if product is new the add product to cart
                updatedProducts = {id: id, qty: 1, price: productPrice};
                cart.products = [...cart.products, updatedProducts];
            }
            cart.totalPrice += +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => console.log('error in file writing', err));
        });
    }

    static deleteProduct(id, price) {
        console.log('Requested product ID to delete in cart', id);
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                return;
            }
            const updatedCart = {...JSON.parse(fileContent)};
            const product = updatedCart.products.find(prod => id === prod.id);
            if(!product) return;
            const qty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
            updatedCart.totalPrice -= price * qty;
            fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
                if(err)
                    console.log(err);
            });
        });
    };

    static getCart(cb) {
        fs.readFile(p, (err, fileContent) => {
            const cart = JSON.parse(fileContent);
            if(err) {
                cb(null);
            } else {
                cb(cart);
            }
        });
    }
};