const multer = require('multer');
const path   = require('path');

// const UPLOAD_FOLDER = '../frontend/public/uploads';

// const upload = multer({
//     dest : UPLOAD_FOLDER
// })


var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'../frontend/public/uploads')
    },
    filename: function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})


var upload = multer({
    storage: storage,
    filefilter: function(req,file,callback){
        if(file.mimetype == "image/jpg" || file.mimetype=="image/jpeg"){
            callback(null,true)
        }else{
            console.log('only jpg & jpeg file supported')
        }
    },
    limits:{
        fileSize: 1024*1024*2
    }
})


module.exports = upload;