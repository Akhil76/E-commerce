const express = require('express');
const router = express.Router();
const {allproducts,productBymainCatagory,productBysubCatagory,productbyChildCat,single_product} = require('../controllers/productController');
const displaycatagory = require('../controllers/displaycatagory');
const {customerRegistration,
    customerlogin,
    addToCart,
    cartItemDisplay,
    delcartItem} = require('../controllers/customer');
const SearchProduct = require('../controllers/SearchProduct');
const {displayslider} = require('../controllers/ImgSlider');




router.get('/product/:productId',productbyChildCat);
router.get('/navcatagories',displaycatagory);
router.get('/allproducts', allproducts);
router.get('/singleproduct/:id',single_product);
router.get('/maincatagory/:catId',productBymainCatagory);
router.get('/subcatagory/:subcatId',productBysubCatagory);
router.post('/addcustomer',customerRegistration);
router.post('/customerlogin',customerlogin);
router.put('/addtocart/:id',addToCart);
router.put('/delcartitem/:customerid',delcartItem);
router.get('/cartitem/:customerid',cartItemDisplay);
router.get('/search/:productName',SearchProduct);
router.get('/imgslider',displayslider);

module.exports = router;