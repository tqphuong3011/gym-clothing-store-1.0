const Product = require('../models/Product');
const {
    multipleMongooseToObject,
    singleMongooseToObject,
} = require('../../ulti/mongoose');
class ProductsController {
    // GET /products
    showAll(req, res, next) {
        Product.find({})
            .then((products) =>
                res.render('products', {
                    products: multipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    // GET /products/:slug
    showDetailProduct(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((product) =>
                res.render('productDetail', {
                    product: singleMongooseToObject(product),
                }),
            )
            .catch(next);
    }
}

module.exports = new ProductsController();
