import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { fetchAdminUserUpdate } from '../../redux/admin/adminThunkActions';

export default function EditUserForm({ formData, currentUserId, onSuccess }) {
  // Локальное состояние для каждого поля формы
  const [id, setId] = useState(formData.id || '');
  const [userName, setUserName] = useState(formData.name || '');
  const [email, setEmail] = useState(formData.email || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [role_id, setRole_id] = useState(formData.role_id || '');
  const [propType, setPropType] = useState(formData.propType);

  // Получение данных менеджера из Redux store
  const dispatch = useAppDispatch();

  const onSubmit = async (event) => {
    console.log('onSubmit', event);

    event.preventDefault();
    const formData = {
      id,
      userName,
      email,
      phone,
      role_id,
      propType,
    };
    console.log('======formData USER UPDATE', formData);

    await dispatch(fetchAdminUserUpdate({ formData }));

    onSuccess(); // Закрываем модальное окно и обновляем список документов
    console.log('После onSuccess()');
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="id пользователя"
        value={id}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Имя пользователя"
        value={userName}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Email"
        value={email}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />

      <TextField
        label="Телефон"
        value={phone}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Роль"
        value={role_id}
        onChange={(e) => setRole_id(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        label="Является ли Юрлицом"
        value={propType}
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
