import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GetServ from "../../components/API/GetServ";
import { addKeyInObj } from "../../utils/allFunc";

export const getProducts = createAsyncThunk(
    'product/getProduct',
    async function(id) {
        const response = await GetServ.getProduct();
        const data = await response.data;
        addKeyInObj(data, false)
        if(!id) {
            return data
        }else{
            return data.filter(obj => {
                return obj.id === Number(id)
            })
        }
    }
)

const product = createSlice({
    name: 'product',
    initialState: {
        products: [],
        product: [],
        status: null,
        error: null
    },
    reducers: {
        productUpdateColor(state, action){
            state.product[0].colors = action.payload
        }
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.status = 'Loading'
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = 'resolved'
            if(action.payload.length === 1) state.product = action.payload
            else state.products = action.payload
        },
        [getProducts.rejected]: () => {

        }
    }
})

export const {productUpdateColor} = product.actions

export default product.reducer