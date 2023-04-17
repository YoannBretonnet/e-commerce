import { createSlice } from '@reduxjs/toolkit'

const wishSlice = createSlice({
    name:"wishes",
    initialState:{
        products: [],
        quantity: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
          },
      },
    });

export const { addProduct } = wishSlice.actions;
export default wishSlice.reducer;