import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name  : 'user',
    initialState:{
        value : {
            name : undefined , token : undefined , 
            image : undefined , isLogin : false
        }
    },
    reducers:{
        changeUserInfo : (state,action)=>{
            state.value = action.payload
        }
    }
})

export const {changeUserInfo} = slice.actions;
export default slice.reducer;