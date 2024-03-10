import { createAsyncThunk } from '@reduxjs/toolkit';
import { ModalCreateDocType, ModalFBType, UserCarType, UserDocTDType, UserFBType } from '../../../types';
import axios, { AxiosResponse } from 'axios';

export const fetchManagerDocFB = createAsyncThunk('docFB/all', async () => {
  const response = await axios.get<UserFBType>(`${import.meta.env.VITE_URL}/manager/docFB`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchManagerDocFBUpdate = createAsyncThunk('docFB/put', async ({formData}) => {
   
  const response = await axios.put<ModalFBType, AxiosResponse<UserFBType>>(
      `${import.meta.env.VITE_URL}/manager/docFB`, {formData}, {
        withCredentials: true,
      })
      return response.data;  
})


export const fetchManagerDocTD = createAsyncThunk('docTD/all', async () => {
  const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/manager/docTD`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchManagerDocTDUpdate = createAsyncThunk('docTD/put', async ({formData}) => {
   
  const response = await axios.put<ModalFBType, AxiosResponse<UserFBType>>(
      `${import.meta.env.VITE_URL}/manager/docTD`, {formData}, {
        withCredentials: true,
      })
      return response.data;  
})

export const fetchManagerCreateDocTD = createAsyncThunk('docTD/post', async ({formData}) => {
   
  const response = await axios.post<ModalCreateDocType, AxiosResponse<UserDocTDType>>(
      `${import.meta.env.VITE_URL}/manager/docTD`, {formData}, {
        withCredentials: true,
      })
      return response.data;  
})

export const fetchManagerDocTO = createAsyncThunk('docTO/all', async () => {
  const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/manager/docTO`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchManagerDocTOUpdate = createAsyncThunk('docTO/put', async ({formData}) => {
   
  const response = await axios.put<ModalFBType, AxiosResponse<UserFBType>>(
      `${import.meta.env.VITE_URL}/manager/docTO`, {formData}, {
        withCredentials: true,
      })
      return response.data;  
})

export const fetchManagerCreateDocTO = createAsyncThunk('docTO/post', async ({formData}) => {
   
  const response = await axios.post<ModalCreateDocType, AxiosResponse<UserDocTDType>>(
      `${import.meta.env.VITE_URL}/manager/docTO`, {formData}, {
        withCredentials: true,
      })
      return response.data;  
})

export const fetchManagerCars = createAsyncThunk('car/all', async () => {
  const response = await axios.get<UserCarType>(`${import.meta.env.VITE_URL}/manager/car`, {
    withCredentials: true,
  });
  return response.data;
});
