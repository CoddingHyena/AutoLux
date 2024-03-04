import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthType, User } from "../../types";

const zaglushka: User = {
    id: 0,
    name: '',
    email: '',
} 

export const fetchAuth = createAsyncThunk('/user/auth', async ({authWord, inputs}: AuthType) => {
const response = await axios.post<User>(`${import.meta.env.VITE_URL}/${authWord}`, inputs, { withCredentials: true })
console.log(response.data, 'fetchAut')
return response.data;
})

export const fetchLogout = createAsyncThunk('.user/logout', async () => {
    const response = await axios.get(`${import.meta.env.VITE_URL}/logout`, { withCredentials: true })
    return zaglushka;
})

export const fetchCheckUser = createAsyncThunk('/user/check', async () => {
    const response = await axios.get(`${import.meta.env.VITE_URL}/checkSession`, {withCredentials: true})
    return response.data;
})