import { configureStore } from "@reduxjs/toolkit";
import basket from "./basket";
import breadcrumb from "./breadcrumb";
import favorite from "./favorite";
import product from "./product";
import searchSort from "./searchSort";

export default configureStore({
    reducer: {
        product: product,
        basket: basket,
        favorite: favorite,
        searchSort: searchSort,
        breadcrumb: breadcrumb
    }
})