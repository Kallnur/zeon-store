import { createSlice } from "@reduxjs/toolkit";

const orders = createSlice({
    name: 'orders',
    initialState: {
        orders: []
    },
    reducers: {
        fillOrders(state, action){
            state.orders = action.payload
        }
    }
})

export const {fillOrders} = orders.actions
export default orders.reducer 