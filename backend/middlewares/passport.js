const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const AdminprofileModel = require('../models/adminModel');


const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

module.exports = passport =>{
    passport.use(new JwtStrategy(opts,(payload,done)=>{
        AdminprofileModel.findOne({Username:payload.Username})
        .then(admin=>{
            if(!admin){
                return done(null,false)
            }else{
                return done(null,admin)
            }
        })
        .catch(error=>{
            console.log(error);
            done(error);
        })
    }))
}