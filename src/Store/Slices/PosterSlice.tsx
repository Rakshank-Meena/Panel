import { createSlice } from "@reduxjs/toolkit";

const PosterSlice = createSlice({
    name: 'Poster',
    initialState:[],
    reducers:{
        addPosterClient(state:any[],action){
            state.push(action.payload)
        },
        removePosterClient(state:any[],action){
            state.splice((state.indexOf(action.payload)))
        }
    }
})

export const {addPosterClient,removePosterClient}=PosterSlice.actions
const PosterSliceReducer=PosterSlice.reducer
export default PosterSliceReducer