import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

const recalcTotals = (state) => {
  let qty = 0;
  let amount = 0;

  state.items.forEach((item) => {
    qty += item.quantity;
    amount += item.quantity * item.price;
  });

  state.totalQuantity = qty;
  state.totalAmount = amount;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1
        });
      }

      recalcTotals(state);
    },
    increment: (state, action) => {
      const id = action.payload;
      const item = state.items.find((entry) => entry.id === id);

      if (item) {
        item.quantity += 1;
      }

      recalcTotals(state);
    },
    decrement: (state, action) => {
      const id = action.payload;
      const item = state.items.find((entry) => entry.id === id);

      if (!item) {
        return;
      }

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((entry) => entry.id !== id);
      }

      recalcTotals(state);
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((entry) => entry.id !== id);
      recalcTotals(state);
    }
  }
});

export const { addItem, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
