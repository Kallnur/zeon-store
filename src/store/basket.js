import { createSlice } from "@reduxjs/toolkit";

const basket = createSlice({
    name: "basket",
    initialState: {
        basket: [],
        order: []
    },
    reducers: {
        addToBusket(state, action) {
            const temp = action.payload.colors.filter(color => color.available === false)
            state.basket.push({...action.payload, basket: 1, color: temp[0], 
                basketCode: action.payload.id * Date.now()})
        },
        removeToBasket(state, action) {
            // console.log();
            state.basket = state.basket.filter(obj => {
                if(obj.color.rgb === action.payload.color.rgb &&
                    obj.id === action.payload.id) obj.basket = false
                return obj.basketCode !== action.payload.basketCode
            })
        },
        incBasketAmount(state, action) {
            state.basket = state.basket.map(obj => {
                if(obj.color.rgb === action.payload.color.rgb &&
                    obj.id === action.payload.id) obj.basket = obj.basket + 1
                return obj
            })
        },
        decBasketAmount(state, action) {
            state.basket = state.basket.map(obj => {
                if(obj.color.rgb === action.payload.color.rgb &&
                    obj.id === action.payload.id) obj.basket = obj.basket - 1
                return obj
            })
        },
        addOrder(state, action) {
            state.order = action.payload
        }
    }
})

export const {addToBusket, removeToBasket, incBasketAmount, decBasketAmount} = basket.actions

export default basket.reducer