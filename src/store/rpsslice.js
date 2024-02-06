import { createSlice } from "@reduxjs/toolkit";

const rpsSlice=createSlice({
    name:"rps",
    initialState:{
        score:0,
        userChoice:''
    },
    reducers:{
        setUserChoice(state,action){
            state.userChoice=action.payload
        }          

    
    }
})

export const rpsActions=rpsSlice.actions

export default rpsSlice