import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { fetchManagerDocTDUpdate } from '../../redux/manager/managerThunkActions';

export default function EditFeedbackForm({ formData, currentUserId, onSuccess }) {
  // Локальное состояние для каждого поля формы
  const [id, setId] = useState(formData.id || '');
  const [userName, setUserName] = useState(formData.userName || '');
  const [userId, setUserId] = useState(formData.user_id || '');
  const [dateNow, setDateNow] = useState(formData.dateNow || '');
  const [dateSelected, setDatSelected] = useState(formData.dateSelected || '');
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '');
  const [managerId, setManagerId] = useState(formData.manager || currentUserId);
  const [ourComment, setOurComment] = useState(formData.ourComment || '');
  const [userComment, setUserComment] = useState(formData.userComment || '');
  const [status, setStatus] = useState(Boolean(formData.status));

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
      id,
      userName,
      user_id: userId,
      dateNow,
      dateSelected,
      phoneNumber,
      manager: managerId,
      ourComment,
      userComment,
      status,
    };
    console.log('======formData TD', formData);

    await dispatch(fetchManagerDocTDUpdate({formData}));
    onSuccess(); // Закрываем модальное окно и обновляем список документов
  };

  
  const dateSelectedFormatted = dateSelected ? dateSelected.split('T')[0] : '';


  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Номер заявки обратной связи"
        value={id}
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
