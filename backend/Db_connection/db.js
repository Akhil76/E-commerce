const mongoose = require('mongoose');

Db_url = "mongodb+srv://akhil:akhil1234@cluster0.dvlfe.mongodb.net/blogsite?retryWrites=true&w=majority";

mongoose.connect(Db_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false
})
.then(()=>{
    console.log('Database is connected..');
})
.catch(()=>{
    console.log('Database is not connected!'); 
})
