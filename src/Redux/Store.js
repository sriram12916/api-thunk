 import {configureStore} from '@reduxjs/toolkit'
import { CreateSliceReducer } from './Slice/CreateSlice'
import { ReadSliceReducer } from './Slice/ReadCreateSlice'
import { DeleteSliceReducer } from './Slice/DeleteSlice'
import { UpdateSliceReducer } from './Slice/UpdateSlice'
 
 export const Store  = configureStore({
    reducer:{
       createSlice : CreateSliceReducer,
       readSlice:ReadSliceReducer,
       deleteSlice : DeleteSliceReducer,
       UpdateSlice:UpdateSliceReducer,
    }
})