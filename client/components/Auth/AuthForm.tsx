import { ChangeEvent, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button } from "@mui/material";

import { useNavigate } from "react-router";
import './AuthForm.css'
import CheckIcon from '@mui/icons-material/Check';

import { InputsAuthType } from "../../types";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAuth } from "../../redux/User/userThunkAction";
import { clearMsg, setMsg } from "../../redux/User/userSlice";



export default function AuthForm(): JSX.Element {

  const initialState = {email: '', password: ''}
  const [statusAuth, setStatusAuth] = useState(true);
  const [inputs, setInputs] = useState<InputsAuthType>(initialState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const msg = useAppSelector((store) => store.userSlice.msg);


  const handlerChangeInputs = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((prev) => ({...prev, [event.target.name]: event.target.value}));
  }
//  function timeOut(err: string): void  {
//     setError(err) 
    
//   }

  const handlerAuth = async (): Promise<void> => {
    console.log('inputs AUTH',inputs);
      if (inputs.name?.trim().length === 0 || inputs.email.trim().length === 0  || inputs.password.trim().length === 0 ) {
        dispatch(setMsg('Вы не ввели данные?!'));
      } else {
        let authWord = statusAuth ? 'log' : 'reg';
        void dispatch(fetchAuth({authWord: authWord, inputs: inputs}, ))
      }
      setTimeout(() => {
        dispatch(clearMsg())
      }, 1500)
  } 
  const user = useAppSelector((store) => store.userSlice.user)
  console.log(user, 'userRegForm')
  useEffect(() => {
    if (user.id > 0) {
      setTimeout(() => {
        navigate('/');
      },1500)
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
    className='authContainer'>
  
      {msg && 
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
            {msg}
          </Alert>
     }

    <h3 className="authText">Auth Form</h3>
     {!statusAuth && 
    <TextField
      helperText="Please enter your username"
      onChange={(event) => void handlerChangeInputs(event)}
      label="Name"
      type='text'
      name='name'
      sx={{
        width: '500px',
        maxWidth: '100%',
      }}
    />
      }
    <TextField
      helperText="Your email must be unique"
      onChange={(event) => void handlerChangeInputs(event)}
      label="Email"
      type='text'
      name='email'
      sx={{
        width: '500px',
        maxWidth: '100%',
      }}
    />
    <TextField
      helperText="Please enter your password"
      onChange={(event) => void handlerChangeInputs(event)}
      type='password'
      name='password'
      label="Password"
      sx={{
        width: '500px',
        maxWidth: '100%',
      }}
    />
     <Button variant="contained" color="success" onClick={() => void handlerAuth()}>
     {statusAuth ? 'Login' : 'Register'}
     </Button>
     <Button
        variant="contained"
        onClick={() => {
          setStatusAuth((prev) => !prev);
        }}>
        {statusAuth ? 'Впервые на сайте? Зарегистрироваться' : 'Уже зарегистрированы? Залогиниться'}
        </Button>
  </Box>
  )
}

