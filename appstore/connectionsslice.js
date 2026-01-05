import { createSlice } from "@reduxjs/toolkit";

const Connectionslice = createSlice({
    name: 'connection',
    initialState: null, 
    reducers: {
        addConnection: (state, action) => {
            return action.payload },
        removeConnection: (state, action) => {
            return null
        }   
        }  
})


export const {addConnection,removeConnection}=Connectionslice.actions;

export default Connectionslice.reducer;