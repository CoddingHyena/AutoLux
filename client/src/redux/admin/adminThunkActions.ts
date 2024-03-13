import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { AutoOptionColorType, AutoOptionComplectType, AutoOptionModelType, UserCarType, UserDocTDType, UserFBType, UserType } from '../../../types';

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

export const fetchAdminModel = createAsyncThunk('configurator/model/all', async () => {
  const response = await axios.get<AutoOptionModelType>(`${import.meta.env.VITE_URL}/configurator/model`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchAdminModelUpdate = createAsyncThunk('configurator/model/update', async ({ formData }) => {
  const response = await axios.put<AutoOptionModelType, AxiosResponse<AutoOptionModelType>>(
    `${import.meta.env.VITE_URL}/configurator/model`,
    { formData },
    {
      withCredentials: true,
    }
  );
  return response.data;
});

export const fetchAdminModelDel = createAsyncThunk('configurator/model/del', async (id: number) => {
  const response = await axios.delete(`${import.meta.env.VITE_URL}/configurator/model/${id}`, {
    withCredentials: true,
  });
  if (response.data === 200) {
    return id;
  }
});

export const fetchAdminComplect = createAsyncThunk('configurator/complect/all', async () => {
  const response = await axios.get<AutoOptionComplectType>(`${import.meta.env.VITE_URL}/configurator/complect`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchAdminComplectUpdate = createAsyncThunk('configurator/complect/update', async ({ formData }) => {
  const response = await axios.put<AutoOptionComplectType, AxiosResponse<AutoOptionComplectType>>(
    `${import.meta.env.VITE_URL}/configurator/complect`,
    { formData },
    {
      withCredentials: true,
    }
  );
  return response.data;
});

export const fetchAdminComplectDel = createAsyncThunk('configurator/complect/del', async (id: number) => {
  const response = await axios.delete(`${import.meta.env.VITE_URL}/configurator/complect/${id}`, {
    withCredentials: true,
  });
  if (response.data === 200) {
    return id;
  }
});

export const fetchAdminColor = createAsyncThunk('configurator/color/all', async () => {
  const response = await axios.get<AutoOptionColorType>(`${import.meta.env.VITE_URL}/configurator/color`, {
    withCredentials: true,
  });
  return response.data;
});

export const fetchAdminColorUpdate = createAsyncThunk('configurator/color/update', async ({ formData }) => {
  const response = await axios.put<AutoOptionColorType, AxiosResponse<AutoOptionColorType>>(
    `${import.meta.env.VITE_URL}/configurator/color`,
    { formData },
    {
      withCredentials: true,
    }
  );
  return response.data;
});

export const fetchAdminColorDel = createAsyncThunk('configurator/color/del', async (id: number) => {
  const response = await axios.delete(`${import.meta.env.VITE_URL}/configurator/color/${id}`, {
    withCredentials: true,
  });
  if (response.data === 200) {
    return id;
  }
});