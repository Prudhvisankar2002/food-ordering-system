import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: []
  },

  reducers: {

    // ✅ Add item
    addItem: (state, action) => {

      const existing = state.items.find(
        item => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    // ✅ Increase quantity
    increaseQty: (state, action) => {

      const item = state.items.find(
        i => i.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // ✅ Decrease quantity
    // if quantity = 1 → remove item
    decreaseQty: (state, action) => {

      const item = state.items.find(
        i => i.id === action.payload
      );

      if (item) {

        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {

          // 🔥 REMOVE ITEM
          state.items = state.items.filter(
            i => i.id !== action.payload
          );
        }
      }
    },

    // ✅ Remove item directly
    removeItem: (state, action) => {

      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    // ✅ Clear all cart
    clearCart: (state) => {
      state.items = [];
    }

  }
});

export const {
  addItem,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;