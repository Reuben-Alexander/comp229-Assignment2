import express from 'express';
const router = express.Router();
import products from '../controllers/product.controller.js'; 

router.get('/products', products.getAllProducts);
router.get('/products/:id', products.getProductById);
router.post('/products', products.addNewProduct);
router.put('/products/:id', products.updateProductById);
router.delete('/products/:id', products.removeProductById);
router.delete('/products', products.removeAllProducts);


export default router;
