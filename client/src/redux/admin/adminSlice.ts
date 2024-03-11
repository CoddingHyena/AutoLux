import { createSlice } from '@reduxjs/toolkit';
import { UserCarsType, UserDocsTDType, UserFBSType, UserSType } from '../../../types';
import {
  fetchAdminCars,
  fetchAdminCarsDel,
  fetchAdminCarsUpdate,
  fetchAdminDocFB,
  fetchAdminDocFBDel,
  fetchAdminDocFBUpdate,
  fetchAdminDocTD,
  fetchAdminDocTDUpdate,
  fetchAdminDocTO,
  fetchAdminDocTODel,
  fetchAdminDocTOUpdate,
  fetchAdminTDDel,
  fetchAdminUserDel,
  fetchAdminUserUpdate,
  fetchAdminUsers,
} from './adminThunkActions';

export type SliceState = {
  users?: UserSType;
  docsTD?: UserDocsTDType;
  docsTO?: UserDocsTDType;
  docsFB?: UserFBSType;
  cars?: UserCarsType;
};

const initialState: SliceState = {
  users: [],
  docsTD: [],
  docsTO: [],
  docsFB: [],
  cars: [],
};

const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdminUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
    });

    builder.addCase(fetchAdminUserUpdate.fulfilled, (state, { payload }) => {
      const index = state.users?.findIndex((el) => el.id === payload.id);
      if (index !== -1 && state.users) {
        state.users[index] = payload;
      }
    });

    builder.addCase(fetchAdminUserDel.fulfilled, (state, { payload }) => {
      state.users = state.users?.filter((el) => el.id !== payload);
    });

    builder.addCase(fetchAdminDocTD.fulfilled, (state, { payload }) => {
      state.docsTD = payload;
    });

    builder.addCase(fetchAdminDocTDUpdate.fulfilled, (state, action) => {
      const index = state.docsTD?.findIndex((doc) => doc.id === action.payload.id);
      if (index !== -1 && state.docsTD) {
        state.docsTD[index] = action.payload; // Обновляем документ на новый из payload
      }
    });

    builder.addCase(fetchAdminTDDel.fulfilled, (state, { payload }) => {
      state.docsTD = state.docsTD?.filter((el) => el.id !== payload);
    });

    builder.addCase(fetchAdminDocTO.fulfilled, (state, { payload }) => {
      state.docsTO = payload;
    });

    builder.addCase(fetchAdminDocTOUpdate.fulfilled, (state, action) => {
      const index = state.docsTO?.findIndex((doc) => doc.id === action.payload.id);
      if (index !== -1 && state.docsTO) {
        state.docsTO[index] = action.payload; // Обновляем документ на новый из payload
      }
    });

    builder.addCase(fetchAdminDocTODel.fulfilled, (state, { payload }) => {
      state.docsTO = state.docsTO?.filter((el) => el.id !== payload);
    });

    builder.addCase(fetchAdminDocFB.fulfilled, (state, { payload }) => {
      state.docsFB = payload;
    });

    builder.addCase(fetchAdminDocFBUpdate.fulfilled, (state, action) => {
      const index = state.docsFB?.findIndex((doc) => doc.id === action.payload.id);
      if (index !== -1 && state.docsFB) {
        state.docsFB[index] = action.payload; // Обновляем документ на новый из payload
      }
    });

    builder.addCase(fetchAdminDocFBDel.fulfilled, (state, { payload }) => {
      state.docsFB = state.docsFB?.filter((el) => el.id !== payload);
    });

    builder.addCase(fetchAdminCars.fulfilled, (state, { payload }) => {
      state.cars = payload;
    });

    builder.addCase(fetchAdminCarsUpdate.fulfilled, (state, action) => {
      const index = state.cars?.findIndex((doc) => doc.id === action.payload.id);
      if (index !== -1 && state.cars) {
        state.cars[index] = action.payload; // Обновляем документ на новый из payload
      }
    });

    builder.addCase(fetchAdminCarsDel.fulfilled, (state, { payload }) => {
      state.cars = state.cars?.filter((el) => el.id !== payload);
    });
  },
});

export default adminSlice.reducer;
