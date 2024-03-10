import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import {fetchCarsUpdate} from '../../redux/lk/lkThunkActions';

export default function EditTOForm({ formData, onSuccess }) {
  // Локальное состояние для каждого поля формы
  const [id, setId] = useState(formData.id || '');
  const [mark, setMark] = useState(formData.mark || '');
  const [model, setModel] = useState(formData.model || '');
  const [color, setColor] = useState(formData.color || '');
  const [prodYear, setProdYear] = useState(formData.prodYear || '');
  const [gosNum, setGosNum] = useState(formData.gosNum || '');
  const [gear, setGear] = useState(formData.gear || '');
  const [engine, setEngine] = useState(formData.engine || '');
  const [vin, setVin] = useState(formData.vin || '');

  // Получение данных менеджера из Redux store
  const dispatch = useAppDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id,
      mark,
      model,
      color,
      prodYear,
      gosNum,
      gear,
      engine,
      vin
    };
    console.log('======formData cars LK USER', formData);
    await dispatch(fetchCarsUpdate({ formData }));
    onSuccess(); // Закрываем модальное окно и обновляем список документов
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Номер документа авто"
        value={id}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Марка"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Модель"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Цвет"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Год выпуска"
        value={prodYear}
        onChange={(e) => setProdYear(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Гос. номер"
        value={gosNum}
        onChange={(e) => setGosNum(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="КПП"
        value={gear}
        onChange={(e) => setGear(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Двигатель"
        value={engine}
        onChange={(e) => setEngine(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
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
