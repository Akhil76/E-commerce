const asynchandler = require('express-async-handler');
const CatagoryModel = require('../models/CatagoryModel');
const SubcatagoryModel = require('../models/SubcatagoryModel');
const Subcatagory_twoModel = require('../models/SubCat_two_Model');


const addcatagory = asynchandler(async(req,res)=>{
   
   try{
    const CatagoryName = req.body.CatagoryName;
    const addcatagory = new CatagoryModel({
        CatagoryName:CatagoryName
    })
       await addcatagory.save();
       res.json({
           message:"One main category is added."
       });
   }catch{
    res.status(200).json({
        message: "Server error occurred!"
    });
   }

});

const addsubcatagory = asynchandler(async(req,res)=>{

    try{
        const {SubcatagoryName,catagoryId} = req.body;
   
        const addsubcatagory = new SubcatagoryModel({
            SubcatagoryName:SubcatagoryName,
            Catagory: catagoryId,
        })
        const addsubcat = await addsubcatagory.save();
        await CatagoryModel.updateOne({
            _id: catagoryId
        },
        {
        $push:{
                Subcatagory: addsubcat._id
            }
        });
        res.send("Data inserted in subcatagory.");
    }catch{
        res.status(200).json({
            message: "Server error occurred!"
        });
    }
 
 });

const addsubcatagory_two = asynchandler(async(req,res)=>{

    try{
        const Oid = req.body.subcatagoryId;
        const childcatagoryName = req.body.childcatagoryName;

        const addsubcatagory_two = new Subcatagory_twoModel({
            Subcatagory_twoName : childcatagoryName,
            Subcatagory_two : Oid,
        })

        const addsub_cat_two = await addsubcatagory_two.save();
        await SubcatagoryModel.updateOne({
            _id:Oid
        },{
            $push:{
                Subcatagory_two:addsub_cat_two._id
            }
        });
        res.send("Data is successfully inserted in child Category..");
    }catch{
        res.status(200).json({
            message: "Server error occurred!"
        });
    }
});

const editMainCategory = asynchandler(async(req,res)=>{
    try{
        const id = req.params.id;
        const CatagoryName = req.body.CatagoryName;
        const editedCatagory = await CatagoryModel.findByIdAndUpdate(
            {_id:id},
            {CatagoryName:CatagoryName},
            {new:true}
        );
        res.json(editedCatagory);
    }catch{
        res.status(200).json({
            message: "Server error occurred and updating failed!"
        });
    }
});

const editSubCategory = asynchandler(async(req,res)=>{
    try{
        const id = req.params.id;
        const SubcatagoryName = req.body.SubcatagoryName;
        const editedSubCatagory = await SubcatagoryModel.findByIdAndUpdate(
            {_id:id},
            {SubcatagoryName:SubcatagoryName},
            {new:true}
        );
        res.json(editedSubCatagory);
    }catch{
        res.status(200).json({
            message: "Server error occurred and updating failed!"
        });
    }
});

const editChildCategory = asynchandler(async(req,res)=>{
    try{
        const id = req.params.id;
        const Subcatagory_twoName = req.body.Subcatagory_twoName;
        const editedChildCatagory = await Subcatagory_twoModel.findByIdAndUpdate(
            {_id:id},
            {Subcatagory_twoName:Subcatagory_twoName},
            {new:true}
        );
        res.json(editedChildCatagory);
    }catch{
        res.status(200).json({
            message: "Server error occurred and updating failed!"
        });
    }
});

const deleteMainCategory = asynchandler(async(req,res)=>{
    try{
        const id = req.params.id;
        const MainCat = await CatagoryModel.findByIdAndRemove(id).exec();
        //const Subcatagory = mainCat.Subcatagory;
        //const SubCat = await SubcatagoryModel.find({Catagory:id})
       
        //const DeletedSubCat = await SubcatagoryModel.findByIdAndRemove({_id:SubCat._id}).exec();
        const subcatId = MainCat.Subcatagory.map(id=>id.ObjectId);
        console.log(subcatId);
        //await Subcatagory_twoModel.deleteMany({_id:deletedSubCat.Subcatagory_two}).exec();
       
        res.send('Category is successfully deleted.');
    }catch{
        res.status(200).json({
            message: "Server error occurred and deleting failed!"
        });
    }
});


const deleteSubCategory = asynchandler(async(req,res)=>{
    try{
        const id = req.params.id;
        const SubCat = await SubcatagoryModel.findByIdAndRemove(id).exec();
        res.send('Sub category is successfully deleted.');
        
    }catch{
        res.status(200).json({
            message: "Server error occurred and deleting failed!"
        })
    }
});


const deleteChildCategory = asynchandler(async(req,res)=>{
    try{
        const id = req.params.id;
        Subcatagory_twoModel.findByIdAndRemove(id).exec();
        res.send('Child category is successfully deleted.');
    }catch{
        res.status(200).json({
            message:"Server error occurred and deleting failed!"
        })
    }
})

module.exports = {
    addcatagory,
    addsubcatagory,
    addsubcatagory_two,
    editMainCategory,
    editSubCategory,
    editChildCategory,
    deleteMainCategory,
    deleteSubCategory,
    deleteChildCategory
};
                 
