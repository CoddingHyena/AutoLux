import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { fetchAdminDocFBUpdate } from '../../redux/admin/adminThunkActions';

export default function EditFeedbackForm({ formData, currentUserId, onSuccess }) {
  // Локальное состояние для каждого поля формы
  const [id, setId] = useState(formData.id || '');
  const [userName, setUserName] = useState(formData.userName || '');
  const [userId, setUserId] = useState(formData.user_id || '');
  const [dateNow, setDateNow] = useState(formData.dateNow || '');
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '');
  const [managerId, setManagerId] = useState(formData.manager || '');
  const [ourComment, setOurComment] = useState(formData.ourComment || '');
  const [userComment, setUserComment] = useState(formData.userComment || '');
  const [status, setStatus] = useState(Boolean(formData.status));

  const dispatch = useAppDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id,
      userName,
      user_id: userId,
      dateNow,
      phoneNumber,
      managerId,
      ourComment,
      userComment,
      status,
    };
    console.log('======formData docFB admin', formData);

    await dispatch(fetchAdminDocFBUpdate({ formData }));

    onSuccess(); // Закрываем модальное окно и обновляем список документов
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Номер заявки на ТО"
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
        label="ID пользователя"
        value={userId}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Дата создания"
        value={dateNow}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Телефон"
        value={phoneNumber}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <TextField
        label="Менеджер"
        value={managerId}
        onChange={(e) => setManagerId(e.target.value)}
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
      <TextField
        label="Комментарий пользователя"
        value={userComment}
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{ readOnly: true }}
        className="readOnly"
      />
      <FormControlLabel
        control={<Checkbox checked={status} onChange={(e) => setStatus(e.target.checked)} />}
        label="Обработано"
      />

      <Button type="submit" variant="contained" color="primary">
        Сохранить
      </Button>
    </form>
  );
}
