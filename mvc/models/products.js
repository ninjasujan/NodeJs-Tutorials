const fs = require('fs');
const path = require('path');
const Cart = require('./cart');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log('no product data in file ');
      cb([]);
    } else {
      console.log('some products in file');
      cb(JSON.parse(fileContent));
    }
  });
};



module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title,
    this.imageUrl = imageUrl,
    this.price = price,
    this.description = description
  }

  save() {
    getProductsFromFile(products => {
		if(this.id) {
			console.log('Id we want to edit', this.id);
			const existingProductIndex = products.findIndex(prod => prod.id === this.id);
			console.log('existing product index is', existingProductIndex);
			const updatedProduct = [...products];
			updatedProduct[existingProductIndex] = this;
			fs.writeFile(p, JSON.stringify(updatedProduct), err => {
				console.log(err);
			});
		} 
		else {
			console.log('product not exist in file', this.id);
			this.id = Math.random().toString();
			getProductsFromFile(products => {
				products.push(this);
				fs.writeFile(p, JSON.stringify(products), err => {
					console.log(err);
				});
			});
		}
    });
};

  static fetchAll(cb) {
    console.log('trying to get the data from file');
    getProductsFromFile(cb);
  };

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  };

  static deleteProduct(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      const newProducts = [];
      products.forEach(prod => {
        if(prod.id !== id) newProducts.push(prod);
      });
      fs.writeFile(p, JSON.stringify(newProducts), (err) => {
        if(!err) {
          console.log('Product deleted Sucessfully in admin List');
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  };

};

