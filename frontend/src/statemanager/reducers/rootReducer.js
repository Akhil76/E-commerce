import { combineReducers } from "redux";
import catagoryReducer from "./catagoryReducer";
import catagorySetting from "./catagorySetting";
import productsReducer from "./product";
import editAndDelProduct from "./editAndDelProduct";
import productFilterReducer from "./productFilter";
import catagorySelectReducer from "./catagorySelect";
import subcatagorySelectReducer from "./subcatagorySelect";
import subcattwoSelectReducer from "./subcattwoSelect"
import authReducer from "./auth";
import cartItemReducer from "./cart";





const rootReducer = combineReducers({
    catagory : catagoryReducer,
    catagorySetting:catagorySetting,
    products : productsReducer,
    editAndDelProduct:editAndDelProduct,
    filteredproducts : productFilterReducer,
    catagorySelect : catagorySelectReducer,
    subcatagorySelect : subcatagorySelectReducer,
    subcattwoSelect : subcattwoSelectReducer,
    auth: authReducer,
    cart: cartItemReducer,
    
});


export default rootReducer;