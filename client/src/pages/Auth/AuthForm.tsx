import { ChangeEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';

import { useNavigate } from 'react-router';
import './AuthForm.css';
import CheckIcon from '@mui/icons-material/Check';

import { InputsAuthType } from '../../../types';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAuth } from '../../redux/User/userThunkAction';
import { clearMsg, setMsg } from '../../redux/User/userSlice';

export default function AuthForm(): JSX.Element {
  const initialState = { email: '', password: '' };
  const [statusAuth, setStatusAuth] = useState(true);
  const [inputs, setInputs] = useState<InputsAuthType>(initialState);
  const [statPersonData, setStaPersonData] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const msg = useAppSelector((store) => store.userSlice.msg);

  const changeStatus = async (): Promise<void> => {
    const newStatus = !statPersonData;
    setStaPersonData(newStatus);
  };

  const handlerChangeInputs = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const inputsWithStatPersonData = {
    ...inputs,
    persDataAgrBool: statPersonData,
  };

  const handlerAuth = async (): Promise<void> => {
    console.log('inputs AUTH', inputs);
    if (
      inputs.name?.trim().length === 0 ||
      inputs.email.trim().length === 0 ||
      inputs.password.trim().length === 0
    ) {
      dispatch(setMsg('Вы не ввели данные?!'));
    } else {
      let authWord = statusAuth ? 'log' : 'reg';
      void dispatch(fetchAuth({ authWord: authWord, inputs: inputsWithStatPersonData }));
    }
    setTimeout(() => {
      dispatch(clearMsg());
    }, 1500);
  };
  console.log('inputsREGFORM', inputsWithStatPersonData);

  const user = useAppSelector((store) => store.userSlice.user);
  console.log(user, 'userRegForm');
  useEffect(() => {
    if (user.id > 0) {
      setTimeout(() => {
        dispatch(clearMsg());
        navigate('/');
      }, 1500);
    }
  }, [user.id, navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > :not(style)': { m: 1 },
      }}
      className="authContainer"
    >
      {msg && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity={msg.includes("Привет") ? "success" : "error"}>
          {msg}
        </Alert>
      )}

      <h3 className="authText">Регистрация и Вход</h3>
      {!statusAuth && (
        <TextField
          helperText="Please enter your username"
          onChange={(event) => void handlerChangeInputs(event)}
          label="Name"
          type="text"
          name="name"
          sx={{
            width: '500px',
            maxWidth: '100%',
          }}
        />
      )}
      <TextField
        helperText="Введите Email"
        onChange={(event) => void handlerChangeInputs(event)}
        label="Email"
        type="text"
        name="email"
        sx={{
          width: '500px',
          maxWidth: '100%',
        }}
      />
      <TextField
        helperText="Введите пароль"
        onChange={(event) => void handlerChangeInputs(event)}
        type="password"
        name="password"
        label="Пароль"
        sx={{
          width: '500px',
          maxWidth: '100%',
        }}
      />

      {!statusAuth && (
        <>
          <div>Согласие на рассылку</div>
          <input
            type="checkbox"
            name="persDataAgr"
            checked={statPersonData}
            onChange={changeStatus}
          />
        </>
      )}
        <a href='/reset-password-email'>Забыли пароль?</a>
      <Button variant="contained" color="success" onClick={() => void handlerAuth()}>
        {statusAuth ? 'Войти' : 'Зарегистрироваться'}
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setStatusAuth((prev) => !prev);
        }}
      >
        {statusAuth ? 'Впервые на сайте? Зарегистрироваться' : 'Уже зарегистрированы? Залогиниться'}
      </Button>
    </Box>
  );
}
