import { createSlice } from "@reduxjs/toolkit";

const CinematographySlice = createSlice({
    name: 'Cinematography',
    initialState:[],
    reducers:{
        addCinemaClient(state:any[],action){
            state.push(action.payload)
        },
        removeCinemaClient(state:any[],action){
            state.splice((state.indexOf(action.payload)))
        }
    }
})

export const {addCinemaClient ,removeCinemaClient}=CinematographySlice.actions
const CinematographySliceReducer=CinematographySlice.reducer
export default CinematographySliceReducer