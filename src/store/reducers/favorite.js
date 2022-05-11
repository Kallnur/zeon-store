import { createSlice } from "@reduxjs/toolkit";

const favorite = createSlice({
    name: "favorite",
    initialState: {
        favorite: []
    },
    reducers: {
        addToFavorite(state, action) {
            state.favorite.push({...action.payload, favorite: true})
        },
        removeToFavorite(state, action){
            state.favorite = state.favorite.filter(obj => {
                if(obj.id === action.payload.id) obj.favorite = false
                return obj.id !== action.payload.id
            })
        },
        fillFavorite(state, action) {
            if(action.payload) state.favorite = action.payload.map(obj => obj.product);
        }
    }
})

export const {addToFavorite, removeToFavorite, fillFavorite} = favorite.actions

export default favorite.reducer