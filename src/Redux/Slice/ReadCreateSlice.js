import { createSlice } from "@reduxjs/toolkit"
import { ReadThunkAction } from "../Thunk/CreateThunk"


const ReadSlice = createSlice({
    name :"ReadUser",
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    extraReducers(builder){
        builder.addCase(ReadThunkAction.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(ReadThunkAction.fulfilled,(state,action)=>{
            state.data =action.payload ;
        })
        builder.addCase(ReadThunkAction.rejected,(state,action)=>{
            state.error = action.error;
        })
    }
})



export const ReadSliceReducer = ReadSlice.reducer