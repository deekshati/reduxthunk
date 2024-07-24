import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
//Thunk middleware is by default in configure store u dnt have  to configure this manually
const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice
    }
})

export default store;