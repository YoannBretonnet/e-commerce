import {configureStore} from '@reduxjs/toolkit';
import cartReducer from  "./cartRedux";
import userReducer from "./userRedux";
import registerReducer from "./registerRedux";
import productsReducer from "./productsRedux";
import wishesReducer from "./wishesRedux";

export default configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
        register: registerReducer,
        products: productsReducer,
        wishes: wishesReducer,
    }
})