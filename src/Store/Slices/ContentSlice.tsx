import { createSlice } from "@reduxjs/toolkit";

const ContentSlice = createSlice({
    name: 'Content',
    initialState:[],
    reducers:{
        addContentClient(state:any[],action){
            state.push(action.payload)
        },
        removeContentClient(state:any[],action){
            console.log(action.payload)
            state.splice((state.indexOf(action.payload)))
        }
    }
})

export const {addContentClient,removeContentClient}=ContentSlice.actions
const ContentSliceReducer=ContentSlice.reducer
export default ContentSliceReducer