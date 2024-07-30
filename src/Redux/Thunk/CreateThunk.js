import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../../Environment/Environment'

export const CreateThunkAction = createAsyncThunk(
    "create/user",
    async({name,password,gender})=>{
        const response = await axios({
            method:"post",
            url:API_URL,
            data:{name,password,gender}

        })
        return response.data
    }
)

export const ReadThunkAction = createAsyncThunk(
    'Read/user',
    async()=>{
        const response = await axios({
            method:"get",
            url:API_URL,

        })
        return response.data
    }
)
export const DeleteThunkAction = createAsyncThunk(
    'Delete/user',
    async(id)=>{
        const response = await axios({
            method:"delete",
            url:API_URL + "/"+id,

        })
        return response.data
    }
)
export const UpdateThunkAction = createAsyncThunk(
    'Update/user',
    async({id:id,name,password,gender})=>{
        const response = await axios({
            method:"put",
            url:API_URL + "/"+id,
data:{name,password,gender}
        })
        return response.data
    }
)