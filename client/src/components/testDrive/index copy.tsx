import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import CardHeader from '../cardHeader';
import { ChangeEvent, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useAppSelector } from '../../redux/hooks';

// Добавляем функцию для получения текущей даты в формате yyyy-MM-dd
const getCurrentDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

// Обновите тип InputsFBType для включения dateSelected
interface InputsFBType {
  userName: string;
  phoneNumber: string;
  userComment: string;
  dateSelected: string; // Добавьте новое поле для даты
}

export default function TestDrive() {
  const [inputs, setInputs] = useState<InputsFBType>({
    userName: '',
    phoneNumber: '',
    userComment: '',
    dateSelected: getCurrentDate(), // Инициализация текущей датой
  });

  const user = useAppSelector((store) => store.userSlice.user);

  let word = '';
  if (user.id > 0) {
    word = 'user';
  } else {
    word = 'guest';
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const addHandler = async (): Promise<void> => {
    if (inputs.userName && inputs.phoneNumber && inputs.userComment && inputs.dateSelected) {
      const result = await axios.post<InputsFBType, AxiosResponse<InputsFBType>>(
        `${import.meta.env.VITE_URL}/feedBack/${word}`,
        inputs,
        { withCredentials: true }
      );

      if (result.status === 201) {
        setInputs({ userName: '', phoneNumber: '', userComment: '', dateSelected: '' });
      }
    }
  };

  return (
    <Card>
      <CardHeader
        title="Записаться на тест-драйв"
        size="small"
        sx={{
          mb: 2,
        }}
      />
      <Stack spacing={2} direction="column">
        <TextField
          onChange={changeHandler}
          value={inputs.userName}
          id="outlined-basic"
          placeholder="Ваше имя"
          variant="outlined"
          name="userName"
        />
        <TextField
          onChange={changeHandler}
          value={inputs.phoneNumber}
          id="phone-input"
          placeholder="Ваш телефон"
          variant="outlined"
          type="tel"
          name="phoneNumber"
        />
        <TextField
          onChange={changeHandler}
          value={inputs.userComment}
          placeholder="Ваши пожелания"
          multiline
          minRows={4}
          name="userComment"
        />
        <TextField
          type="date"
          onChange={changeHandler}
          value={inputs.dateSelected}
          name="dateSelected"
          InputLabelProps={{
            shrink: true,
          }}
          label="Желаемая дата"
        />
        {/* Остальные поля */}
        <Button onClick={addHandler} variant="contained" disableElevation>
          Записаться
        </Button>
      </Stack>
    </Card>
  );
}
