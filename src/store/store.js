import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartButtonSlice'
import quantityReducer from './quantitySlice'
import addToCartReducer from './addToCartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        quantity: quantityReducer,
        addToCart: addToCartReducer
    }
})

export default store