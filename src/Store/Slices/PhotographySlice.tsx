import { createSlice, current } from "@reduxjs/toolkit";

const PhotographySlice = createSlice({
    name: 'photography',
    initialState:[],
    reducers:{
        addClient(state:any[],action){
            state.push(action.payload)
            
        },
        removeClientLink(state:any[],action){
            const newObj=current(state).find((item:any)=>item.clientName===action.payload.name)
            const index=current(state).indexOf(newObj)
            state.forEach(element => {
                if(state.indexOf(element)===index){
                    return element.url.splice(element.url.indexOf(action.payload.url))
                }
                else{
                    return;
                }
                
            });

        },
        addClientLink(state:any[],action){
            const newObj=current(state).find((item:any)=>item.clientName===action.payload.name)
            const index=current(state).indexOf(newObj)
            state[index].url.unshift(action.payload.link)
        },
        removeClient(state:any[],action){
            state.splice((state.indexOf(action.payload)))
        }
    }
})

export const {addClient,removeClientLink,removeClient,addClientLink}=PhotographySlice.actions
const PhotographySliceReducer=PhotographySlice.reducer
export default PhotographySliceReducer