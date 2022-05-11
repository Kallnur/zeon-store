import { configureStore } from "@reduxjs/toolkit";
import basket from "./reducers/basket";
import breadcrumb from "./reducers/breadcrumb";
import favorite from "./reducers/favorite";
import orders from "./reducers/orders";
import product from "./reducers/product";
import searchSort from "./reducers/searchSort";

export default configureStore({
    reducer: {
        product: product,
        basket: basket,
        favorite: favorite,
        searchSort: searchSort,
        breadcrumb: breadcrumb,
        orders: orders
    }
})