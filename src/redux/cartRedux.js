import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    subtotal: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.subtotal += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        const productToRemove = state.products[index];
        state.products.splice(index, 1);
        state.quantity -= productToRemove.quantity;
        state.subtotal -= productToRemove.price * productToRemove.quantity;
      }
    },
    updateCartSubtotal: (state) => {
      state.subtotal = state.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    },
    changeProductQuantity: (state, action) => {
      const id = action.payload.id;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        const productToChange = state.products[index];
        if (action.payload.choice === "dec") {
          productToChange.quantity > 1 && (productToChange.quantity -= 1);
          productToChange.quantity > 1 && (state.subtotal -= productToChange.price * productToChange.quantity);
        } else {
          productToChange.quantity += 1;
          state.subtotal -= productToChange.price * productToChange.quantity;
        }
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateCartSubtotal,
  changeProductQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
