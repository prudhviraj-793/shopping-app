import { createSlice } from "@reduxjs/toolkit";

const initialCartItemsState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: initialCartItemsState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
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
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true;
      existingItem.quantity--;
      if (existingItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        state.totalQuantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const addToCartActions = addToCartSlice.actions;

export default addToCartSlice.reducer;
