import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { fetchAdminModelUpdate } from '../../redux/admin/adminThunkActions';

export default function EditDocModel({ formData, onSuccess }) {
  // Локальное состояние для каждого поля формы
  const [id, setId] = useState(formData.id || '');
  const [modelName, setModelName] = useState(formData.modelName || '');
  const [price, setPrice] = useState(formData.price || '');
  const [photo, setPhoto] = useState(formData.photo || '');

  // Получение данных менеджера из Redux store
  const dispatch = useAppDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id,
      modelName,
      price,
      photo,
    };
    console.log('======formData  admin Model', formData);
    await dispatch(fetchAdminModelUpdate({ formData }));
    onSuccess(); // Закрываем модальное окно и обновляем список документов
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="ID"
        value={id}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Наименование"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Фото"
        value={photo}
        // onChange={(e) => setPhoto(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <Button type="submit" variant="contained" color="primary">
        Сохранить
      </Button>
    </form>
  );
}
