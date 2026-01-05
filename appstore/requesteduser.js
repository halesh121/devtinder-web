import { createSlice } from "@reduxjs/toolkit";

const Requestedslice=createSlice({
    name:'requesteduser',
    initialState:null,  
    reducers:{
        addrequestuser:(state,action)=>{
            return action.payload
        },
        removerequestuser:(state,action)=>{
            const arrayar=state.filter((user)=>user._id!==action.payload);
            return arrayar;
        }
    }});

    export const {addrequestuser,removerequestuser}=Requestedslice.actions;

export default Requestedslice.reducer;