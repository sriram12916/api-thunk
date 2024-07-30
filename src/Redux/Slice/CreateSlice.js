import { createSlice } from "@reduxjs/toolkit"
import { CreateThunkAction } from "../Thunk/CreateThunk"


const CreateSlice = createSlice({
    name:"userCreate",
    initialState:{
        loading:false,
        error:null,
        data:[]
    },
    extraReducers(builder){
        builder.addCase(CreateThunkAction.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(CreateThunkAction.fulfilled,(state,action)=>{
            state.data = action.payload;
        
        })
        builder.addCase(CreateThunkAction.rejected,(state,action)=>{
            state.data = action.error;
        
        })
    }
})


export const CreateSliceReducer = CreateSlice.reducer