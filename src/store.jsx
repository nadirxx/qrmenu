import { configureStore } from "@reduxjs/toolkit";
import Product from './Slice'
export const store = configureStore({
    reducer:{
        pro:Product
    }
})