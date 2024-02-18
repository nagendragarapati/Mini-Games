import {configureStore} from "@reduxjs/toolkit"
import rpsSlice from "./rpsslice"
import flipSlice from "./flipSlice"
const store=configureStore({
    reducer:{
        rps:rpsSlice.reducer,
        flipgame:flipSlice.reducer
    }
})

export default store
