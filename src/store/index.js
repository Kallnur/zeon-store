import { configureStore } from "@reduxjs/toolkit";
import busket from "./busket";
import favorite from "./favorite";
import product from "./product";

export default configureStore({
    reducer: {
        product: product,
        busket: busket,
        favorite: favorite
    }
})