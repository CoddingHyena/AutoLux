import { create } from '@mui/material/styles/createTransitions';
import { User } from '../../../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAuth, fetchCheckUser, fetchLogout } from './userThunkAction';
import { AcUnitTwoTone } from '@mui/icons-material';

export type SliceUserType = {
  user: User;
  msg?: string;
};

const initialState: SliceUserType = {
  user: {
    id: 0,
    name: '',
    email: '',
    role: 'none',
  },
  msg: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    clearMsg(state) {
      state.msg = '';
    },
    setMsg(state, action) {
      state.msg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state, { payload }) => {
      console.log(payload.id, 'payloadRegFetchOK');
      if (payload.id > 0) {
        state.user = payload;
        state.msg = `Привет ${payload.name}`;
      }
    });
    builder.addCase(fetchAuth.rejected, (state, action) => {
      console.log(action, 'paylouad===slice');
      if (action.error.message?.slice(-3) === '401') {
        state.msg = 'Такого пользователя не существует!';
      }
      if (action.error.message?.slice(-3) === '402') {
        state.msg = 'Пароль не верный!';
      }
      if (action.error.message?.slice(-3) === '403') {
        state.msg = 'Такой пользователь существует!';
      }
      if (action.error.message?.slice(-3) === '405') {
        state.msg = 'email.includes(@) ! ';
      }
    });

    builder.addCase(fetchLogout.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(fetchCheckUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});
export default userSlice.reducer;
export const { clearMsg, setMsg } = userSlice.actions;
