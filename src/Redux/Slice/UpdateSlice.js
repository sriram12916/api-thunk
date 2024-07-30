import { createSlice } from "@reduxjs/toolkit"
import { UpdateThunkAction } from "../Thunk/CreateThunk"

const UpdateSlice = createSlice({
    name:"UpdateUser",
    initialState:{
        loading:false,
        error:null,
        data:[],
    },
    extraReducers(builder){
        builder.addCase(UpdateThunkAction.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(UpdateThunkAction.fulfilled,(state,action)=>{
            state.data = action.payload;
        })
        builder.addCase(UpdateThunkAction.rejected,(state,action)=>{
            state.error = action.error;
        })
    }
})

export const UpdateSliceReducer = UpdateSlice.reducer