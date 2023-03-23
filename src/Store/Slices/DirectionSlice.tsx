import { createSlice } from "@reduxjs/toolkit";

const DirectionSlice = createSlice({
    name: 'Direction',
    initialState:[],
    reducers:{
        addDirectionClient(state:any[],action){
            state.push(action.payload)
        },
        removeDirectionClient(state:any[],action){
            state.splice((state.indexOf(action.payload)))
        }
    }
})

export const {addDirectionClient,removeDirectionClient}=DirectionSlice.actions
const DirectionSliceReducer=DirectionSlice.reducer
export default DirectionSliceReducer