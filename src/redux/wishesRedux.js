import { createSlice } from '@reduxjs/toolkit'

const wishSlice = createSlice({
    name:"wishes",
    initialState:{
        products: [],
        quantity: 0,
    },
    reducers: {
        // Function to add product onto the wish-list, increasing the quantity of items
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
          },
      },
    });

export const { addProduct } = wishSlice.actions;
export default wishSlice.reducer;