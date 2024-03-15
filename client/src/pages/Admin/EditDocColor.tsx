import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { fetchAdminColorUpdate, fetchAdminComplectUpdate } from '../../redux/admin/adminThunkActions';

export default function EditDocColor({ formData, onSuccess }) {
  // Локальное состояние для каждого поля формы
  const [id, setId] = useState(formData.id || '');
  const [model_id, setModel_id]= useState(formData.model_id || '');
  const [colorName, setColorName] = useState(formData.colorName || '');
  const [price, setPrice] = useState(formData.price || '');
  const [photo, setPhoto] = useState(formData.photo || '');

  // Получение данных менеджера из Redux store
  const dispatch = useAppDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id,
      model_id,
      colorName,
      price,
      photo,
    };
    console.log('======formData  admin Color', formData);
    await dispatch(fetchAdminColorUpdate({ formData }));
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
        label="Модель"
        value={model_id}
        onChange={(e) => setModel_id(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Наименование"
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
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
