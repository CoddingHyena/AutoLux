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
export const fetchLKDocTDUpdate = createAsyncThunk('docTD/put', async ({formData}) => {
   
    const response = await axios.put<UserDocTDType, AxiosResponse<UserDocTDType>>(
        `${import.meta.env.VITE_URL}/lk/docTD`, {formData},
         {
          withCredentials: true,
        })
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

export const fetchCarsUpdate = createAsyncThunk('car/put', async ({formData}) => {
   
    const response = await axios.put<UserCarType, AxiosResponse<UserCarType>>(
        `${import.meta.env.VITE_URL}/lk/car`, {formData},
         {
          withCredentials: true,
        })
        return response.data;  
  })

  export const fetchCarsDel = createAsyncThunk('car/del', async (id: number) => {
    const response = await axios.delete(
        `${import.meta.env.VITE_URL}/lk/car/${id}`,
         {
          withCredentials: true,
        })
        if(response.data === 200){
            return id;  
        }
  })

  export const fetchAddCars = createAsyncThunk('car/add', async ({formData}) => {

    const response = await axios.post<UserCarType, AxiosResponse<UserCarType>>(
        `${import.meta.env.VITE_URL}/lk/car`, {formData},
        {
         withCredentials: true,
       })
       return response.data; 
  })