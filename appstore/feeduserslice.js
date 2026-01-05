import { createSlice } from "@reduxjs/toolkit";

const Feedslice=createSlice({
    name:'feed',
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload
        },
        removeFeed:(state,action)=>{
            const removefeeduser=state.filter((user)=>user._id !== action.payload);
            return removefeeduser;
        }
    }


})

export const {addFeed,removeFeed}=Feedslice.actions

export default Feedslice.reducer