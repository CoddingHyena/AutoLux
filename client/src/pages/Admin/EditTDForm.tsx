import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { fetchLKDocTDUpdate } from '../../redux/lk/lkThunkActions';
import { fetchAdminDocTDUpdate } from '../../redux/admin/adminThunkActions';

export default function EditTDForm({ formData, onSuccess, isCreatingNewCar }) {
  // Локальное состояние для каждого поля формы
  const [id, setId] = useState(formData.id || '');
  const [dateNow, setDateNow] = useState(formData.dateNow || '');
  const [dateSelected, setDatSelected] = useState(formData.dateSelected || '');
  const [user_id, setUser_id] = useState(formData.user_id || '');
  const [car_id, setCar_id] = useState(formData.car_id || '');
  const [probegKm, setProbegKm] = useState(formData.probegKm || '');
  const [manager, setManager] = useState(formData.manager || '');
  const [ourComment, setOurComment] = useState(formData.ourComment || '');
  const [status, setStatus] = useState(formData.status || false);

  // Получение данных менеджера из Redux store
  const dispatch = useAppDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id,
      dateNow,
      dateSelected,
      user_id,
      car_id,
      probegKm,
      manager,
      ourComment,
      status,
    };
    console.log('======formData docTD ADNIN', formData);
    await dispatch(fetchAdminDocTDUpdate({ formData }));
    onSuccess(); // Закрываем модальное окно и обновляем список документов
  };
  const dateSelectedFormatted = dateSelected ? dateSelected.split('T')[0] : '';

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Номер документа TD"
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
        type="date"
        value={dateSelectedFormatted}
        onChange={(e) => setDatSelected(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="ID пользователя"
        value={user_id}
        onChange={(e) => setUser_id(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Автомобиль"
        value={car_id}
        onChange={(e) => setCar_id(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
       <TextField
        label="Пробег КМ"
        value={probegKm}
        onChange={(e) => setProbegKm(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Менеджер"
        value={manager}
        onChange={(e) => setManager(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Комментарий менеджера"
        value={ourComment}
        onChange={(e) => setOurComment(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        control={<Checkbox checked={status} onChange={(e) => setStatus(e.target.checked)} />}
        label="Подтверждено"
      />
      <Button type="submit" variant="contained" color="primary">
        Сохранить
      </Button>
    </form>
  );
}
