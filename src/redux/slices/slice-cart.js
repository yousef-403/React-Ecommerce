import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload);
            localStorage.setItem("cart" , JSON.stringify(state))
        },
        
    }
})

export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer;