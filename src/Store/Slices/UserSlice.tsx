import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:[],
    reducers:{
        addUser(state:string[],action){
            state.push(action.payload)
        },
        removeUser(state:any[],action){
            state.splice((state.indexOf(action.payload)))
        }
    }
})

export const {addUser}=userSlice.actions
const userSliceReducer=userSlice.reducer
export default userSliceReducer