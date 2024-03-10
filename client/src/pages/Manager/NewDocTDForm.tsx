import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { fetchManagerCreateDocTD, fetchManagerDocTDUpdate } from '../../redux/manager/managerThunkActions';

export default function NewDocTDForm({ currentUserId, onSuccess }) {
  // Локальное состояние для каждого поля формы
  const [userId, setUserId] = useState('');
  const [carId, setCarId] = useState('');
  const [managerId, setManagerId] = useState(currentUserId);
  const [ourComment, setOurComment] = useState('');


  // Получение данных менеджера из Redux store
  const manager = useAppSelector((store) => store.userSlice.user);
  const dispatch = useAppDispatch();

  // Обновление локального состояния при изменении данных менеджера
  useEffect(() => {
    if (manager?.id || currentUserId) {
      setManagerId(manager?.id || currentUserId);
    }
  }, [manager, currentUserId]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      userId,
      carId,
      managerId,
      ourComment,
      };
    console.log('======NEWformData TD', formData);

    await dispatch(fetchManagerCreateDocTD({formData}));

    onSuccess(); // Закрываем модальное окно и обновляем список документов
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="ID пользователя"
        value={userId}
        onChange = {(e) => setUserId(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        />
      <TextField
        label="ID машины"
        value={carId}
        onChange = {(e) => setCarId(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
        <TextField
        label="Наш комментарий"
        value={ourComment}
        onChange = {(e) => setOurComment(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      {managerId && (
        <Box component={Paper} p={2} my={2}>
          <Typography variant="h6" gutterBottom>
            Менеджер (ответственный)
          </Typography>
          <Typography variant="body1">
            {manager?.name} (ID: {managerId})
          </Typography>
        </Box>
      )}

     
        <Button type="submit" variant="contained" color="primary">
        Сохранить
      </Button>
    </form>
  );
}