import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { UserDocTDType } from "../../../types"

export const fetchDocTD = createAsyncThunk('docTD/all', async () => {
    const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/lk/DocTestDrive`, { withCredentials: true })
    return response.data;
})

export const fetchDocTO = createAsyncThunk('docTO/all', async () => {
    const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/lk/DocTO`)
    return response.data;
})

export const fetchCars = createAsyncThunk('car/all', async () => {
    const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/lk/car`)
    return response.data;
})

// export const fetchUpdateDocTD = createAsyncThunk('docTD/put', async ({, id}: typeUpdate) => {
   
//     const response = await axios.put<inputsType, AxiosResponse<TodoType>>(
//         `${import.meta.env.VITE_URL}/todos/${id}`, {title})
//         return response.data;  
// })