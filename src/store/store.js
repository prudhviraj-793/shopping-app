import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartButtonSlice'
import addToCartReducer from './addToCartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        addToCart: addToCartReducer
    }
})

export default store