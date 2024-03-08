import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserCarType, UserDocTDType, UserFBType } from "../../../types";
import axios from "axios";



export const fetchManagerDocFB = createAsyncThunk('docFB/all', async () => {
    const response = await axios.get<UserFBType>(`${import.meta.env.VITE_URL}/manager/docFB`, { withCredentials: true })
    return response.data;
})
export const fetchManagerDocTD = createAsyncThunk('docTD/all', async () => {
    const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/manager/docTD`, { withCredentials: true })
    return response.data;
})

export const fetchManagerDocTO = createAsyncThunk('docTO/all', async () => {
    const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/manager/docTO`, { withCredentials: true })
    return response.data;
})


export const fetchManagerCars = createAsyncThunk('car/all', async () => {
    const response = await axios.get<UserCarType>(`${import.meta.env.VITE_URL}/manager/car`, { withCredentials: true })
    return response.data;
})