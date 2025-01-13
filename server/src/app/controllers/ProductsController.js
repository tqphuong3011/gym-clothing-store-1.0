const Product = require('../models/Product');
const {
    multipleMongooseToObject,
    singleMongooseToObject,
} = require('../../ulti/mongoose');
class ProductsController {
    // [GET] /products
    listProducts(req, res, next) {
        Product.find({})
            .then((products) =>
                res.render('products/listProducts', {
                    products: multipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    // [GET] /products/:slug
    detailProduct(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((product) =>
                res.render('products/detailProduct', {
                    product: singleMongooseToObject(product),
                }),
            )
            .catch(next);
    }

    // [GET] /products/manage/create
    createProduct(req, res, next) {
        res.render('products/createProduct');
    }

    // [POST] /products/manage/store
    storeProduct(req, res, next) {
        const formData = req.body;
        formData.images = [
            `https://powergymstore.com/cdn/shop/files/${req.body.images}.jpg`,
        ];
        const newProduct = new Product(formData);
        newProduct
            .save()
            .then(() => res.redirect(`/products/${newProduct.slug}`))
            .catch(next);
    }

    // [GET] /products/manage
    manageProducts(req, res, next) {
        Product.find({})
            .then((products) =>
                res.render('products/manageProducts', {
                    products: multipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    // [GET] /products/manage/:id
    editProduct(req, res, next) {
        Product.findById(req.params.id)
            .then((product) =>
                res.render('products/editProduct', {
                    product: singleMongooseToObject(product),
                }),
            )
            .catch(next);
    }

    // [PUT] /products/manage/:id
    saveProduct(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/products/manage'))
            .catch(next);
    }

    // [DELETE] /products/manage/:id
    deleteProduct(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect(req.get('Referrer') || '/'))
            .catch(next);
    }
}

module.exports = new ProductsController();
