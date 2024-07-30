import { createSlice } from "@reduxjs/toolkit"
import { DeleteThunkAction } from "../Thunk/CreateThunk"

const DeleteSlice = createSlice({
    name:"deleteUser",
    initialState:{
data:[],
loading:false,
error:null
    },
    extraReducers(builder){
        builder.addCase(DeleteThunkAction.pending,(state)=>{
            state.loading  = true;

        })
        builder.addCase(DeleteThunkAction.fulfilled,(state,action)=>{
            state.data  = action.payload.id;

        })
        builder.addCase(DeleteThunkAction.rejected,(state,action)=>{
            state.error  = action.error;

        })
    }


})




export const DeleteSliceReducer = DeleteSlice.reducer