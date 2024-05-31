import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk("productSlice/getProducts",async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    
    return data
})

export const productSlice =  createSlice({
    initialState:[],
    name:"productSlice",
    reducers :{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})

export const {}= productSlice.actions;
export default productSlice.reducer;