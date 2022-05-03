import { createSlice } from "@reduxjs/toolkit";

const breadcrumb = createSlice({
    name: 'breadcrumb',
    initialState: {
        breadcrumb: [{txt: 'Главная ', href: '/'}]
    },
    reducers: {
        addCrumb(state, action) {
            const temp = state.breadcrumb.filter(obj => obj.href === action.payload.href)
            console.log(state.breadcrumb, temp);
            if(!temp.length) state.breadcrumb.push(action.payload)
            else{
                state.breadcrumb.pop();
                state.breadcrumb.push(action.payload);
            }
        },
        removeCrumb(state, action){
            state.breadcrumb.pop()
        },
        toogleCrumb(state, action){
            state.breadcrumb = action.payload
        }
    }
})

export const {addCrumb, removeCrumb, toogleCrumb} = breadcrumb.actions;
export default breadcrumb.reducer;