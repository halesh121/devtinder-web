import { configureStore } from "@reduxjs/toolkit";
import UseReducer from "./userslice.js";
import FeedReducer from "./feeduserslice.js"
import ConnectionReducer from "./connectionsslice.js"
import Requestedslice from "./requesteduser.js";

const Store=configureStore({
    reducer:{
        user:UseReducer,
        feed:FeedReducer,
        connections:ConnectionReducer,
        requetseduser:Requestedslice
    },

})

export default Store;