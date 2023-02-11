import {combineReducers} from "redux";
import {productReducer} from "./slice/products/product.slice";

export default combineReducers({
    product: productReducer
})
