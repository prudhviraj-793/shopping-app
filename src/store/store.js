import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartButtonSlice'
import addToCartReducer from './addToCartSlice'
import notificationReducer from "./notificationSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        addToCart: addToCartReducer,
        notification: notificationReducer
    }
})

export default store