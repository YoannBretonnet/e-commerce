import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    subtotal: 0,
  },
  reducers: {
    // Function to add product onto the cart, increasing the quantity of items and the subtotal
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.subtotal += action.payload.price * action.payload.quantity;
    },
     // Function to remove a product from the cart, using its id, decreasing the quantity of items and the subtotal
    removeProduct: (state, action) => {
      const id = action.payload;
      const index = state.products.findIndex((product) => product._id === id);
      if (index !== -1) {
        const productToRemove = state.products[index];
        state.products.splice(index, 1);
        state.quantity -= productToRemove.quantity;
        state.subtotal -= productToRemove.price * productToRemove.quantity;
      }
    },
    // Function to update the subtotal
    updateCartSubtotal: (state) => {
      state.subtotal = state.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    },
    // Function to change the quantity of each item in the car and impact the subtotal
    changeProductQuantity: (state, action) => {
      const id = action.payload.id;
      const index = state.products.findIndex((product) => product._id === id);
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
