const express = require('express');
const router = express.Router();
const {addcatagory,
    addsubcatagory,
    addsubcatagory_two,
    editMainCategory,
    editSubCategory,
    editChildCategory,
    deleteMainCategory,
    deleteSubCategory,
    deleteChildCategory
} = require('../controllers/catagorycontroller');
const displaycatagory = require('../controllers/displaycatagory');
const {addProduct,editproduct,delproduct,allproducts} = require('../controllers/productController');
const {mainCatagory,subcatagory,subcatagoryTwo} = require('../controllers/catagorySelect');
const {adminprofile,login} = require('../controllers/adminprofile');
const {addingslider,displayslider,editslider,delslider} = require('../controllers/ImgSlider');
const {allcustomer} = require('../controllers/customer');
const upload = require('../middlewares/upload');
const authenticated = require('../middlewares/authenticated');
const imageReader = require('../controllers/imageReader');



// http://localhost:3001/admin/+
//-----------Adding Category------------------------------------------------
router.post('/addcatagory',authenticated,addcatagory);
router.post('/addsubcatagory',authenticated,addsubcatagory);
router.post('/addsubcatagory_two',authenticated,addsubcatagory_two);
//--------------------------------------------------------------------------
router.put('/editmaincatagory/:id',authenticated,editMainCategory);
router.put('/editsubcatagory/:id',authenticated,editSubCategory);
router.put('/editchildcatagory/:id',authenticated,editChildCategory);
router.delete('/deletemaincatagory/:id',authenticated,deleteMainCategory);
router.delete('/deletesubcategory/:id',authenticated,deleteSubCategory);
router.delete('/deletechildcategory/:id',authenticated,deleteChildCategory);
// Selecting categories----------------------------------
router.get('/maincatagory',authenticated,mainCatagory);
router.get('/subcatagory/:catagoryId',authenticated,subcatagory);
router.get('/subcatagorytwo/:subcatagoryId',authenticated,subcatagoryTwo);
//-----Cutomer in admin panel ---------------------------------
router.get('/customers',authenticated,allcustomer);
//---------Displaying all categories in Setting panel---------------
router.get('/displaycatagories',authenticated,displaycatagory);
//------------------------------------------------------------------
//----------Displaying all products in adminpanel-------------------
router.get('/allproducts',authenticated,authenticated,allproducts);
//---------Add products---------------------------------------------
router.post('/addproduct',authenticated,upload.single('ProductImg'),addProduct);
//----------Edit products-------------------------------------------
router.put('/editproduct/:id',authenticated,upload.single('ProductImg'),editproduct);
//----------Delete products-----------------------------------------
router.delete('/delproduct/:id',authenticated,delproduct);
//------------------------------------------------------------------
router.post('/adminset',authenticated,upload.single('ProductImg'),adminprofile);
//---------slider--------------------------------------------
router.post('/addsliderimg',authenticated,upload.single('Image'),addingslider);
router.get('/imgslider',authenticated,displayslider);
router.put('/editslider/:id',authenticated,upload.single('Image'),editslider);
router.delete('/delslider/:id',authenticated,delslider);
//------------------------------------------------------------------
router.post('/login',login);
//-----------imageReader----------------------------------------
router.get('/image/:name',imageReader);

module.exports = router;