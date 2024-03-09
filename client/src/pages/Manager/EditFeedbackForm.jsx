import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

export default function EditFeedbackForm({ formData, currentUserId }) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      ...formData,
      manager: formData.manager || currentUserId, // Если manager пуст, используем currentUserId
      status: Boolean(formData.status), // Преобразуем статус в булевое значение
    },
  });

  const manager = useAppSelector((store) => store.userSlice.user);
  console.log('manager', manager);
  const managerName = manager.name;
  const managerId = manager.id;

  const onSubmit = (data) => {
    // Функция для отправки формы
    console.log(data);
    // Здесь будет код для отправки данных на сервер
  };

  React.useEffect(() => {
    setValue('manager', formData.manager || currentUserId);
  }, [formData, currentUserId, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Номер заявки обратной связи"
        {...register('id')}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        className="readOnly"
      />
      <TextField
        label="Имя пользователя"
        {...register('userName')}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        className="readOnly"
      />
      <TextField
        label="ID пользователя"
        {...register('user_id')}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        className="readOnly"
      />
      <TextField
        label="Дата создания"
        {...register('dateNow')}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        className="readOnly"
      />
      <TextField
        label="Телефон"
        {...register('phoneNumber')}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        className="readOnly"
      />
      {formData.manager && (
        <Box component={Paper} p={2} my={2}>
          <Typography variant="h6" gutterBottom>
            Менеджер (ответственный)
          </Typography>
          <Typography variant="body1">
            {managerName} (ID: {managerId})
          </Typography>
        </Box>
      )}
      <input
        type="hidden"
        name="manager" // Имя поля, под которым значение будет отправлено на сервер
        value={managerId} // Значение, которое вы хотите отправить
      />
      <TextField
        label="Комментарий менеджера"
        {...register('ourComment')}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Комментарий пользователя"
        {...register('userComment')}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        className="readOnly"
      />
      <FormControlLabel control={<Checkbox {...register('status')} />} label="Обработано" />
      <Button type="submit" variant="contained" color="primary">
        Сохранить
      </Button>
    </form>
  );
}
