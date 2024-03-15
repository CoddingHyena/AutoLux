import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthType, User, emailType, passwordType } from '../../../types';
import { emit } from 'process';

const zaglushka: User = {
  id: 0,
  name: '',
  email: '',
  role: 'none',
  phone: '',
};

export const fetchAuth = createAsyncThunk('/users/auth', async ({ authWord, inputs }: AuthType) => {
  const response = await axios.post<User>(`${import.meta.env.VITE_URL}/users/${authWord}`, inputs, {
    withCredentials: true,
  });
  console.log(response.data, 'fetchAut');
  return response.data;
});

export const fetchLogout = createAsyncThunk('users/logout', async () => {
  const response = await axios.get(`${import.meta.env.VITE_URL}/users/logout`, {
    withCredentials: true,
  });
  return zaglushka;
});

export const fetchCheckUser = createAsyncThunk('/users/check', async () => {
  const response = await axios.get(`${import.meta.env.VITE_URL}/users/checkSession`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchResetPWDemail = createAsyncThunk('/user/requestResetPassword', async (email: string) => {
  
    const response = await axios.post<emailType>(`${import.meta.env.VITE_URL}/users/requestResetPassword`, { email });
    return response.data;

})

export const resetPassword = createAsyncThunk( 'users/resetPassword', async ({ token, newPassword }: passwordType) => {
      const response = await axios.post(`${import.meta.env.VITE_URL}/users/resetPassword`, { token, newPassword });
      return response.data;
  }
);