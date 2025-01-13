const express = require('express');
const router = express.Router();

const productsController = require('../app/controllers/ProductsController');

router.get('/manage', productsController.manageProducts);
router.get('/manage/create', productsController.createProduct);
router.post('/manage/store', productsController.storeProduct);
router.get('/manage/:id', productsController.editProduct);
router.put('/manage/:id', productsController.saveProduct);
router.delete('/manage/:id', productsController.deleteProduct);
router.get('/:slug', productsController.detailProduct);
router.get('/', productsController.listProducts);

module.exports = router;
