import { createSlice } from '@reduxjs/toolkit'

export const appSlice=createSlice({

    name:'app',
    initialState:{
       channelId:null,
       channelName: null,

    },
    reducers:{
        setChannelInfo:(state,action)=>{
            state.channelId=action.payload.channelId;
            state.channelName=action.payload.channelName;
            
        },
       
    },
});
export const{setChannelInfo}=appSlice.actions;



export const selectChanneliD=(state)=>state.app.channelId  /* It goes inside "Onion" layer then in app layer and get s the channelId */
export const selectChannelName=(state)=>state.app.channelName;
export default appSlice.reducer;