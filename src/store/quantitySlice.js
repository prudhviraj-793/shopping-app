import { createSlice } from "@reduxjs/toolkit";

const initialQuantityState = {quantity: 2}

const quantitySlice = createSlice({
    name: 'quantity',
    initialState: initialQuantityState,
    reducers: {
        increaseQuantity(state) {
            state.quantity = 1 + state.quantity
        },
        decreaseQuantity(state) {
            if (state.quantity > 1) {
                state.quantity = state.quantity - 1
            }
        },      
    }
})

export const quanityActions = quantitySlice.actions

export default quantitySlice.reducer