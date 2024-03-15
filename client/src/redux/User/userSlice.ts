import { create } from '@mui/material/styles/createTransitions';
import { User } from '../../../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAuth, fetchCheckUser, fetchLogout, fetchResetPWDemail, resetPassword } from './userThunkAction';
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
    phone: '',
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
      // if (action.error.message?.slice(-3) === '405') {
      //   state.msg = 'email.includes(@) ! ';
      // }
      if (action.error.message?.slice(-3) === '406') {
        state.msg = 'Введите действительную почту!';
      }
    });

    builder.addCase(fetchLogout.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(fetchCheckUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });

    builder.addCase(fetchResetPWDemail.fulfilled, (state) => {
      state.msg = 'Ссылка для сброса пароля (активна 15мин) отправлена на вашу почту.';
    }).addCase(fetchResetPWDemail.rejected, (state) => {
      state.msg = 'Такой почты не зарегистрировано.';
    });

    // Обработка подтверждения нового пароля
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.msg = 'Ваш пароль успешно обновлен. Авторизуйтесь.';
    }).addCase(resetPassword.rejected, (state) => {
      state.msg ='Ошибка при сбросе пароля.';
    });

  },
});
export default userSlice.reducer;
export const { clearMsg, setMsg } = userSlice.actions;
