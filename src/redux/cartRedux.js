import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    subtotal: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.subtotal += action.payload.price * action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        const productToRemove = state.products[index];
        state.products.splice(index, 1);
        state.quantity -= productToRemove.quantity;
        state.subtotal -= productToRemove.price * productToRemove.quantity;
        state.total -= productToRemove.price * productToRemove.quantity;
      }
    },
    updateCartSubtotal: (state) => {
      state.subtotal = state.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    },
    updateCartTotal: (state) => {
      state.total = state.subtotal;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateCartSubtotal,
  updateCartTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
