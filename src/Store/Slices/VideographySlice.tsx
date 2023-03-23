import { createSlice } from "@reduxjs/toolkit";

const VideographySlice = createSlice({
    name: 'videography',
    initialState:[],
    reducers:{
        addVideoClient(state:any[],action){
            state.push(action.payload)
        },
        removeVideoClient(state:any[],action){
            state.splice((state.indexOf(action.payload)))
        }
    }
})

export const {addVideoClient,removeVideoClient}=VideographySlice.actions
const VideographySliceReducer=VideographySlice.reducer
export default VideographySliceReducer