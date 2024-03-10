import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import {fetchAddCars} from '../../redux/lk/lkThunkActions';

export default function CreateCarForm({ formData, onSuccess, isCreatingNewCar }) {
  // Локальное состояние для каждого поля формы
  const [mark, setMark] = useState('');
  const [model, setModel] = useState( '');
  const [color, setColor] = useState( '');
  const [prodYear, setProdYear] = useState( '');
  const [gosNum, setGosNum] = useState('');
  const [gear, setGear] = useState( '');
  const [engine, setEngine] = useState( '');
  const [vin, setVin] = useState('');

  // Получение данных менеджера из Redux store
  const dispatch = useAppDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
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
    await dispatch(fetchAddCars({ formData }));
    onSuccess(); // Закрываем модальное окно и обновляем список документов
  };

  return (
    <form onSubmit={onSubmit}>
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
