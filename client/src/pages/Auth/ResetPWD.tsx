import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import './AuthForm.css';
import CheckIcon from '@mui/icons-material/Check';
import {  useAppSelector } from '../../redux/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearMsg, setMsg } from '../../redux/User/userSlice';
import { resetPassword } from '../../redux/User/userThunkAction';


export default function ResetPWD(): JSX.Element {
  
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const msg = useAppSelector((store) => store.userSlice.msg);

    useEffect(() => {
      if (msg.includes('успешно')) {
        setTimeout(() => {
          navigate('/');
          dispatch(clearMsg());
        }, 2000);
      } else if (msg?.length > 0){
        setTimeout(() => {
          dispatch(clearMsg());
        }, 2000);
      }
    }, [msg, dispatch, navigate]);

    

  const handleChangePWD = (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      dispatch(setMsg('Пароли не совпадают'));
      return;
    }
    dispatch(resetPassword({ token, newPassword: password }));

    console.log(password, confirmPassword); 
  }

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
        <Alert icon={<CheckIcon fontSize="inherit" />} severity={msg.includes("Ваш") ? "success" : "error"}>
          {msg}
        </Alert>
      )}

      <h3 className="authText">Создание нового пароля</h3>
      <form onSubmit={handleChangePWD}>
      <TextField
        helperText=" "
        value={password}
        onChange={(event) => void setPassword(event.target.value)}
        type="password"
        name="password"
        label="Введите новый пароль"
        sx={{
          width: '500px',
          maxWidth: '100%',
        }}
      />
      
      <TextField
        helperText=" "
        value={confirmPassword}
        onChange={(event) => void setConfirmPassword(event.target.value)}
        type="password"
        name="password2"
        label="Подтвердите пароль"
        sx={{
          width: '500px',
          maxWidth: '100%',
        }}
      />
      <Button type="submit" variant="contained" color="success">
        Сохранить
      </Button>
      </form>
    </Box>
  );
}
