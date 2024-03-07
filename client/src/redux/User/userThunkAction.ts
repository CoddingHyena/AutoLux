import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthType, User } from '../../../types';

const zaglushka: User = {
  id: 0,
  name: '',
  email: '',
  role: 'none',
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
