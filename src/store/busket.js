import { createSlice } from "@reduxjs/toolkit";

const busket = createSlice({
    name: "busket",
    initialState: {
        busket: []
    },
    reducers: {
        addToBusket(state, action) {
            state.busket.push(action.payload)
        }
    }
})

export const {addToBusket} = busket.actions

export default busket.reducer