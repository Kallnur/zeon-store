import { createSlice } from "@reduxjs/toolkit";

const basket = createSlice({
    name: "basket",
    initialState: {
        basket: []
    },
    reducers: {
        addToBusket(state, action) {
            state.basket.push({...action.payload, basket: true})
        },
        removeToBasket(state, action) {
            state.basket = state.basket.filter(obj => {
                if(obj.id === action.payload.id) obj.basket = false
                return obj.id !== action.payload.id
            })
        }
    }
})

export const {addToBusket, removeToBasket} = basket.actions

export default basket.reducer