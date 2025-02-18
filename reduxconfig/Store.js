import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';


const store = configureStore({
    reducer :{
        uinfo : userReducer
    }
});

export default store;