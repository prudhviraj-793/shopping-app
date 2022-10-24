import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCartItems: false };

const cartButtonSlice = createSlice({
  name: "cartButton",
  initialState: initialCartState,
  reducers: {
    showCartItems(state) {
      state.showCartItems = !state.showCartItems;
    },
  },
});

export const cartButtonActions = cartButtonSlice.actions;

export default cartButtonSlice.reducer;
