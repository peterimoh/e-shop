import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error:  null,
    category: [],
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // START LOADING
        startLoading(state) {
            state.loading = true
        },

        // HAS ERROR
        hasError(state, action) {
            state.loading = false
            state.error = action.payload
        },

        // GET CATEGORIES
        getCategories(state, action) {
            state.loading = false
            state.category = action.payload
        },

        // GET PRODUCTS
        getProducts(state, action) {
            state.loading = false
            state.products = action.payload
        }
    }
})

const {actions: productAction, reducer: productReducer} = productSlice
export {productAction, productReducer}
