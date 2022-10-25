import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    showNotification: null,
    status: "",
    title: "Sending...",
    message: "Sending cart data!",
  },
  reducers: {
    showNotification(state, action) {
        state.showNotification = action.payload.showNotification
        state.status = action.payload.status
        state.message = action.payload.message
        state.title = action.payload.title
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
