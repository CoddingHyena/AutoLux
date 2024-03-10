import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import CardHeader from '../cardHeader';
import { InputsFBType } from '../../../types';
import { ChangeEvent, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useAppSelector } from '../../redux/hooks';


export default function TestDrive() {
  const [inputs, setInputs] = useState<InputsFBType>({userName: '', phoneNumber: '', userComment: ''});

  const user = useAppSelector((store) => store.userSlice.user);
 
  let word = '';
  if(user.id > 0){
    word = 'user'
  } else {
    word = 'guest'
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({...prev, [event.target.name]: event.target.value}));    
};

const addHandler = async (): Promise<void> => {
  if(inputs.userName && inputs.phoneNumber && inputs.userComment){

    const result = await axios.post<InputsFBType, AxiosResponse<InputsFBType>>(
        `${import.meta.env.VITE_URL}/feedBack/${word}`,
        inputs, {withCredentials: true}
    );
    
    if(result.status === 201){
        setInputs({userName: '', phoneNumber: '', userComment: ''})
    }   
  }
};

  return (
    <Card>
      <CardHeader
        title="Записаться на тест-драйв\техническое обслуживание"
        size="small"
        sx={{
          mb: 2,
        }}
      />
      <Stack spacing={2} direction="column">
        <TextField onChange={changeHandler}  value={inputs.userName} id="outlined-basic" placeholder="Ваше имя" variant="outlined" name='userName'/>
        <TextField onChange={changeHandler}  value={inputs.phoneNumber} id="phone-input" placeholder="Ваш телефон" variant="outlined" type="tel" name='phoneNumber' />
        <TextField onChange={changeHandler}  value={inputs.userComment} placeholder="Ваши пожелания" multiline minRows={4}  name='userComment'/>
        <Button  onClick={addHandler} variant="contained" disableElevation>
          Записаться
        </Button>
      </Stack>
    </Card>
  );
}
