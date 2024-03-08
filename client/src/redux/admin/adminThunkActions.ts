import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { UserCarType, UserDocTDType, UserFBType, UserType } from "../../../types"

export const fetchAdminUsers = createAsyncThunk('user/all', async () => {
    const response = await axios.get<UserType>(`${import.meta.env.VITE_URL}/admin/user`, { withCredentials: true })
    return response.data;
})

export const fetchAdminDocTD = createAsyncThunk('docTD/all', async () => {
    const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/admin/docTD`, { withCredentials: true })
    return response.data;
})

export const fetchAdminDocTO = createAsyncThunk('docTO/all', async () => {
    const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/admin/docTO`, { withCredentials: true })
    return response.data;
})

export const fetchAdminDocFB = createAsyncThunk('docFB/all', async () => {
    const response = await axios.get<UserFBType>(`${import.meta.env.VITE_URL}/admin/docFB`, { withCredentials: true })
    return response.data;
})

export const fetchAdminCars = createAsyncThunk('car/all', async () => {
    const response = await axios.get<UserCarType>(`${import.meta.env.VITE_URL}/admin/car`, { withCredentials: true })
    return response.data;
})
