const Product = require('../models/Product');
const {
    multipleMongooseToObject,
    singleMongooseToObject,
} = require('../../ulti/mongoose');
class SiteController {
    // [GET] /
    home(req, res, next) {
        Product.find({})
            .then((data) =>
                res.render('home', { data: multipleMongooseToObject(data) }),
            )
            .catch(next);

        // .catch(err => res.status(400).json({err:'SERVER ERROR!!!'}))
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
