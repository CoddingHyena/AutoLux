import { createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosResponse } from "axios"
import { UserCarType, UserDocTDType, UserType, inputsUserPutType, UpdateUserType, UserDocTDType } from "../../../types"

export const fetchLkUsers = createAsyncThunk('user/all', async () => {
    const response = await axios.get<UserType>(`${import.meta.env.VITE_URL}/lk/user`, { withCredentials: true })
    return response.data;
})

export const fetchUpdatUser = createAsyncThunk('user/put', async ({inputsName, inputsPhone}: UpdateUserType) => {
   
    const response = await axios.put<inputsUserPutType, AxiosResponse<UserType>>(
        `${import.meta.env.VITE_URL}/lk/user`, {inputsName, inputsPhone }, { withCredentials: true } )
        return response.data;  
})

export const fetchDocTD = createAsyncThunk('docTD/all', async () => {
    const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/lk/DocTestDrive`, { withCredentials: true })
    return response.data;
})

export const fetchDocTO = createAsyncThunk('docTO/all', async () => {
    const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/lk/DocTO`, { withCredentials: true })
    return response.data;
})

export const fetchLKDocTOUpdate = createAsyncThunk('docTO/put', async ({formData}) => {
   
    const response = await axios.put<UserDocTDType, AxiosResponse<UserDocTDType>>(
        `${import.meta.env.VITE_URL}/lk/docTO`, {formData},
         {
          withCredentials: true,
        })
        return response.data;  
  })

export const fetchCars = createAsyncThunk('car/all', async () => {
    const response = await axios.get<UserCarType>(`${import.meta.env.VITE_URL}/lk/car`, { withCredentials: true })
    return response.data;
})

// export const fetchUpdateDocTD = createAsyncThunk('docTD/put', async ({, id}: typeUpdate) => {
   
//     const response = await axios.put<inputsType, AxiosResponse<TodoType>>(
//         `${import.meta.env.VITE_URL}/todos/${id}`, {})
//         return response.data;  
// })