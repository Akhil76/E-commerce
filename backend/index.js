
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const prublicRouter = require('./routers/publicRouter');
const adminRouter = require('./routers/adminRouter');


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({limit: '50mb', extended:true}));
app.use(express.urlencoded({limit: '50mb', extended:true}));
app.use(passport.initialize())
require('./middlewares/passport')(passport)



app.use('/', prublicRouter);
app.use('/admin', adminRouter);



PORT = process.env.PORT;
Db_url = process.env.DB;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
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

});


