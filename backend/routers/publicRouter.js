const express = require('express');
const router = express.Router();
const {allproducts,productBymainCatagory,productBysubCatagory,productbyChildCat,single_product} = require('../controllers/productController');
const displaycatagory = require('../controllers/displaycatagory');
const {customer,addToCart,cartItem} = require('../controllers/customer');





router.get('/product/:productId',productbyChildCat);
router.get('/navcatagories',displaycatagory);
router.get('/allproducts', allproducts);
router.get('/singleproduct/:id',single_product);
router.get('/maincatagory/:catId',productBymainCatagory);
router.get('/subcatagory/:subcatId',productBysubCatagory);
router.post('/addcustomer',customer);
router.get('/addtocart',addToCart);
router.get('/cartitem/:customerid',cartItem);


module.exports = router;