import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./slices/slice-cart";
import productSlice from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        products : productSlice,
        cart: cartSlice,
    },
})