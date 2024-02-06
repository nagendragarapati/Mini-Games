import {configureStore} from "@reduxjs/toolkit"
import rpsSlice from "./rpsslice"
const store=configureStore({
    reducer:{
        rps:rpsSlice.reducer,
    }
})

export default store
