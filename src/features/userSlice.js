import { createSlice } from '@reduxjs/toolkit'

export const userSlice=createSlice({

    name:'user',
    initialState:{
        user:null,

    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        LogOut:(state) =>{
            state.user=null;
        }    
    },
});
export const{login,LogOut}=userSlice.actions;



export const selectUser=(state)=>state.user.user;
export default userSlice.reducer;