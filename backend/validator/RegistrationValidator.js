const validator = require('validator');
// const { default: isEmail } = require('validator/lib/isEmail');
// const customer = require('../models/customer');

const validate = customer =>{
    let error = {}

    if(!customer.FirstName){
        error.FirstName = 'Please,enter your first Name.'
    }

    if(!customer.LastName){
        error.LastName = 'Please,enter your last Name.'
    }

    if(!customer.UserName){
        error.UserName = 'Please,enter your User Name.'
    }

    if(!customer.Phone){
        error.Phone = 'Please,enter your Phone number.'
    }

    if(!customer.Email){
        error.Email = 'Please,enter your email.'
    }else if(!validator.isEmail(customer.Email)){
        error.Email = 'Please,enter a valid email.'
    }

    if(!customer.Address){
        error.Address = 'Please,enter your address.'
    }

    if(!customer.Password){
        error.Password = 'Please,enter a password.'
    }else if(customer.Password < 6){
        error.Password = 'Password must be six character or logner.'
    }

    if(!customer.ComfirmPassword){
        error.ComfirmPassword = 'Please,enter a comfirmation Password.'
    }else if(customer.Password!==customer.ComfirmPassword){
        error.ComfirmPassword = 'Password doesn\'t match.'
    }

    return{
        error,
        isValid:Object.keys(error).length==0
    }

}

module.exports = validate;