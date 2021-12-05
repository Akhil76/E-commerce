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
import customer_authReducer from "./customer_auth";
import cartItemReducer from "./cart";
import searchReducer from "./searchReducer";
import SliderSetting from "./SliderSetting";





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
    customer_auth:customer_authReducer,
    cart: cartItemReducer,
    SearchedProducts:searchReducer,
    SliderSetting:SliderSetting
});


export default rootReducer;