import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { UserCarType, UserDocTDType, UserFBType, UserType } from '../../../types';

export const fetchAdminUsers = createAsyncThunk('user/all', async () => {
  const response = await axios.get<UserType>(`${import.meta.env.VITE_URL}/admin/user`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchAdminUserUpdate = createAsyncThunk('/user/update', async ({ formData }) => {
  const response = await axios.put<UserType, AxiosResponse<UserType>>(
    `${import.meta.env.VITE_URL}/admin/user`,
    { formData },
    {
      withCredentials: true,
    }
  );
  return response.data;
});

export const fetchAdminUserDel = createAsyncThunk('/user/del', async (id: number) => {
  const response = await axios.delete(`${import.meta.env.VITE_URL}/admin/user/${id}`, {
    withCredentials: true,
  });
  if (response.data === 200) {
    return id;
  }
});

export const fetchAdminDocTD = createAsyncThunk('docTD/all', async () => {
  const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/admin/docTD`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchAdminDocTDUpdate = createAsyncThunk('docTD/update', async ({ formData }) => {
  const response = await axios.put<UserDocTDType, AxiosResponse<UserDocTDType>>(
    `${import.meta.env.VITE_URL}/admin/docTD`,
    { formData },
    {
      withCredentials: true,
    }
  );
  return response.data;
});

export const fetchAdminTDDel = createAsyncThunk('/docTD/del', async (id: number) => {
  const response = await axios.delete(`${import.meta.env.VITE_URL}/admin/docTD/${id}`, {
    withCredentials: true,
  });
  if (response.data === 200) {
    return id;
  }
});

export const fetchAdminDocTO = createAsyncThunk('docTO/all', async () => {
  const response = await axios.get<UserDocTDType>(`${import.meta.env.VITE_URL}/admin/docTO`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchAdminDocTOUpdate = createAsyncThunk('docTO/update', async ({ formData }) => {
  const response = await axios.put<UserDocTDType, AxiosResponse<UserDocTDType>>(
    `${import.meta.env.VITE_URL}/admin/docTO`,
    { formData },
    {
      withCredentials: true,
    }
  );
  return response.data;
});

export const fetchAdminDocTODel = createAsyncThunk('/docTO/del', async (id: number) => {
  const response = await axios.delete(`${import.meta.env.VITE_URL}/admin/docTO/${id}`, {
    withCredentials: true,
  });
  if (response.data === 200) {
    return id;
  }
});

export const fetchAdminDocFB = createAsyncThunk('docFB/all', async () => {
  const response = await axios.get<UserFBType>(`${import.meta.env.VITE_URL}/admin/docFB`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchAdminDocFBUpdate = createAsyncThunk('docFB/update', async ({ formData }) => {
  const response = await axios.put<UserFBType, AxiosResponse<UserFBType>>(
    `${import.meta.env.VITE_URL}/admin/docFB`,
    { formData },
    {
      withCredentials: true,
    }
  );
  return response.data;
});

export const fetchAdminDocFBDel = createAsyncThunk('/docFB/del', async (id: number) => {
  const response = await axios.delete(`${import.meta.env.VITE_URL}/admin/docFB/${id}`, {
    withCredentials: true,
  });
  if (response.data === 200) {
    return id;
  }
});

export const fetchAdminCars = createAsyncThunk('car/all', async () => {
  const response = await axios.get<UserCarType>(`${import.meta.env.VITE_URL}/admin/car`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchAdminCarsUpdate = createAsyncThunk('car/update', async ({ formData }) => {
  const response = await axios.put<UserCarType, AxiosResponse<UserCarType>>(
    `${import.meta.env.VITE_URL}/admin/car`,
    { formData },
    {
      withCredentials: true,
    }
  );
  return response.data;
});

export const fetchAdminCarsDel = createAsyncThunk('car/del', async (id: number) => {
  const response = await axios.delete(`${import.meta.env.VITE_URL}/admin/car/${id}`, {
    withCredentials: true,
  });
  if (response.data === 200) {
    return id;
  }
});
