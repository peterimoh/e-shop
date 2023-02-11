// gets all categories
import {productAction} from "./product.slice";
import axios from "../../../utils/axios";

export const GET_CATEGORIES = () => async(dispatch) => {
    dispatch(productAction.startLoading())
    try{
        const {data} = await axios.get('/products/categories')
        dispatch(productAction.getCategories(data))
    } catch (e) {
        dispatch(productAction.hasError(e.response.data.message))
    }
}

export const GET_PRODUCTS = () => async(dispatch) => {
    dispatch(productAction.startLoading())
    try{
        const {data} = await axios.get('/products')
        dispatch(productAction.getProducts(data))
    } catch (e) {
        dispatch(productAction.hasError(e.response.data.message))
    }
}
