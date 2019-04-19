const express = require('express');
const routes = express.Router();
const productController = require('./controllers/ProductController')

routes.get('/products', productController.index);
routes.get('/products/:id', productController.show);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.destroy);
routes.post('/products', productController.store);

module.exports = routes;