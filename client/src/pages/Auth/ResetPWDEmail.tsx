import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, Grid } from '@mui/material';
import './AuthForm.css';
import CheckIcon from '@mui/icons-material/Check';
import {  useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { clearMsg } from '../../redux/User/userSlice';
import { fetchResetPWDemail } from '../../redux/User/userThunkAction';




export default function ResetPWDemail(): JSX.Element {
  
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const msg = useAppSelector((store) => store.userSlice.msg);

  const handleChangePWDemail = async (event) => {
    event.preventDefault();
    dispatch(fetchResetPWDemail(email));
    setTimeout(() => {
      dispatch(clearMsg());
      setEmail('');
    }, 5000);

    console.log(email); 
  }

  return (
    <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
  <Grid item xs={12} sm={8} md={6} lg={4}>
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
        <Alert icon={<CheckIcon fontSize="inherit" />} severity={msg.includes("Ссылка") ? "success" : "error"}>
          {msg}
        </Alert>
      )}

      <h3 className="authText">Введите ваш email </h3>
      <form onSubmit={handleChangePWDemail}>
      <TextField
        helperText=" "
        value={email}
        onChange={(event) => void setEmail(event.target.value)}
        type="email"
        name="email"
        label="email"
        sx={{
          width: '500px',
          maxWidth: '100%',
        }}
      />
      <Button type="submit" variant="contained" color="success">
        Отправить
      </Button>
      </form>
    </Box>
    </Grid>
</Grid>
  );
}
