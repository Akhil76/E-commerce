const asynchandler = require('express-async-handler');
const fs = require('fs');


const imageReader = asynchandler(async(req,res)=>{
    try{
        const filename = req.params.name;
    
        fs.readFile(`./uploadedFiles/${filename}`, function(err, data) {
            if(err){
                res.send("File not found!");
            }else{
                res.writeHead(200, {'Content-Type': 'image/jpeg'});
                res.end(data);
            }; 
          });

    }catch(err){
        res.status(500).json({
            error:"Server side error occurred!"
        })
    }
    
});


module.exports = imageReader;