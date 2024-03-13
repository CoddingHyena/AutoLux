import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import {fetchLKDocTDUpdate} from '../../redux/lk/lkThunkActions';

export default function EditTDForm({ formData, onSuccess, isCreatingNewCar }) {
  // Локальное состояние для каждого поля формы
  const [id, setId] = useState(formData.id || '');
  const [dateNow, setDateNow] = useState(formData.dateNow || '');
  const [dateSelected, setDatSelected] = useState(formData.dateSelected || '');
  const [car_id, setCar_id] = useState(formData.car_id || '');
  const [userScore, setUserScore] = useState(formData.userScore || '');
  const [userComment, setUserComment] = useState(formData.userComment || '');

  // Получение данных менеджера из Redux store
  const dispatch = useAppDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id,
      dateNow,
      dateSelected,
      car_id,
      userScore,
      userComment,
    };
    console.log('======formData docTO LK USER', formData);
    await dispatch(fetchLKDocTDUpdate({ formData }));
    onSuccess(); // Закрываем модальное окно и обновляем список документов
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Номер документа TO"
        value={id}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Дата создания документа"
        value={dateNow}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
          <TextField
        label="Дата оказания услуги"
        value={dateSelected}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Автомобиль"
        value={car_id}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Оценка"
        value={userScore}
        onChange={(e) => setUserScore(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Ваш коментарий"
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Сохранить
      </Button>
    </form>
  );
}
