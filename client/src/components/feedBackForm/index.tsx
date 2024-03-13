import React, { useState } from 'react';
import { Card, Stack, TextField, Button, Typography, Container, Grid } from '@mui/material';
import { MailOutline as MailOutlineIcon } from '@mui/icons-material';
import CardHeader from '../cardHeader';
import { useAppSelector } from '../../redux/hooks';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
  userName: Yup.string().required('Имя обязательно'),
  phoneNumber: Yup.string().required('Телефон обязателен'),
  userComment: Yup.string().required('Введите текст сообщения'),
});

export default function FeedBackForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const user = useAppSelector((store) => store.userSlice.user);

  if (isSubmitted) {
    return (
      <Typography variant="h5" gutterBottom>
        Ваше сообщение отправлено.
      </Typography>
    );
  }

  return (
    <Container sx={{ my: 2 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {/* Колонка для иконки */}
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <MailOutlineIcon sx={{ fontSize: 200 }} />
        </Grid>

        {/* Колонка для формы */}
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Card sx={{ width: '100%' }}>
            <CardHeader title="Написать нам" size="small" sx={{ mb: 2 }} />
            <Formik
              initialValues={{
                userName: user.name || '',
                phoneNumber: user.phone || '',
                userComment: '',
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const response = await axios.post(
                    `${import.meta.env.VITE_URL}/feedBack/user`,
                    values,
                    { withCredentials: true }
                  );
                  if (response.status === 201) {
                    setIsSubmitted(true);
                    resetForm();
                  }
                } catch (error) {
                  console.error(error);
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <Stack spacing={2} sx={{ p: 3 }}>
                    <TextField
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={user.name || ''}
                      name="userName"
                      placeholder="Ваше имя"
                      variant="outlined"
                      helperText={touched.userName && errors.userName}
                      error={touched.userName && Boolean(errors.userName)}
                    />
                    <TextField
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={user.phone || ''}
                      name="phoneNumber"
                      placeholder="Телефон"
                      variant="outlined"
                      type="tel"
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    />
                    <TextField
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="userComment"
                      placeholder="Сообщение или вопрос"
                      multiline
                      minRows={4}
                      helperText={touched.userComment && errors.userComment}
                      error={touched.userComment && Boolean(errors.userComment)}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      disableElevation
                      disabled={isSubmitting}
                    >
                      Отправить сообщение
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
