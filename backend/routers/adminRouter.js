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
const {addProduct,editproduct,allproducts} = require('../controllers/productController');
const {mainCatagory,subcatagory,subcatagoryTwo} = require('../controllers/catagorySelect');
const {adminprofile,login} = require('../controllers/adminprofile');
const upload = require('../middlewares/upload');
const authenticated = require('../middlewares/authenticated');



// http://localhost:3001/admin/+
router.post('/addcatagory', addcatagory);
router.post('/addsubcatagory',addsubcatagory);
router.post('/addsubcatagory_two',addsubcatagory_two);
router.put('/editmaincatagory/:id',editMainCategory);
router.put('/editsubcatagory/:id',editSubCategory);
router.put('/editchildcatagory/:id',editChildCategory);
router.delete('/deletemaincatagory/:id',deleteMainCategory);
router.delete('/deletesubcategory/:id',deleteSubCategory);
router.delete('/deletechildcategory/:id',deleteChildCategory);
// Selecting categories----------------------------------
router.get('/maincatagory',mainCatagory);
router.get('/subcatagory/:catagoryId',subcatagory);
router.get('/subcatagorytwo/:subcatagoryId',subcatagoryTwo);
//------------------------------------------------------------------

//---------Displaying all categories in Setting panel---------------
router.get('/displaycatagories',displaycatagory);
//------------------------------------------------------------------
//----------Displaying all products in adminpanel-------------------
router.get('/allproducts',allproducts);
//---------Add products---------------------------------------------
router.post('/addproduct',upload.single('ProductImg'),addProduct);
//----------Edit products-------------------------------------------
router.put('/editproduct/:id',upload.single('ProductImg'),editproduct);
router.post('/adminset', upload.single('Image'),adminprofile);
router.post('/login',login);


module.exports = router;