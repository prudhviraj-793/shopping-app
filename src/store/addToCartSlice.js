import { createSlice } from "@reduxjs/toolkit";

const initialCartItemsState = {
  items: [],
  totalQuantity: 0,
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: initialCartItemsState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
  },
});

export const addToCartActions = addToCartSlice.actions;

export default addToCartSlice.reducer;
