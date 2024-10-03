import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./productsSlice"

export const store=configureStore({
    reducer:{
        products:productreducer
    }
   
})