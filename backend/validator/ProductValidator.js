

const validate = product =>{
    let error = {};
    if(!product.ProductName){
        error.ProductName = 'Product Name field is empty!'
    }
    if(!product.Description){
        error.Description = 'Description field is empty!'
    }
    if(!product.Quantity){
        error.Quantity = 'Quantity field is empty!'
    }
    if(!product.Price){
        error.Price = 'Price field is empty!'
    }
    if(!product.Catagory){
        error.Catagory = 'You must select a category!'
    }


    return{
        error,
        isValid:Object.keys(error).length==0
    }
    
};


module.exports = validate;