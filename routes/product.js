const {Router} = require('express');
const router = Router();
const product = require('../controllers/product.controller')

router.get('/', product.getAllProduct);

router.get('/:id', product.getProduct);

router.post('/', product.createProduct);

router.put('/update/:id', product.updateProduct);

router.delete('/delete/:id', product.deleteProduct);


module.exports =  router;