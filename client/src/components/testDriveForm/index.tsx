import React, { useState } from 'react';
import { Grid, Card, TextField, Button, Stack, Typography, Container } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAppSelector } from '../../redux/hooks';

const cars = [
  {
    id: 1,
    name: 'Feramont 2.0',
    image: '/car-icons/Feramont20.jpg',
  },
  {
    id: 2,
    name: 'Figuan 2.0',
    image: '/car-icons/Figuan20.jpg',
  },
  {
    id: 3,
    name: 'Folo Elite',
    image: '/car-icons/FoloElite.jpg',
  },
  {
    id: 4,
    name: 'Folo Respect',
    image: '/car-icons/FoloRespect.jpg',
  },
];

const validationSchema = Yup.object({
  userName: Yup.string().required('Заполните имя'),
  phoneNumber: Yup.string().required('Укажите телефон'),
  userComment: Yup.string(),
  dateSelected: Yup.date().required('Выберите дату'),
});

const TestDriveForm = () => {
  const user = useAppSelector((store) => store.userSlice.user);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState({});
  const [carError, setCarError] = useState('');

  const isUserAuthenticated = user.id > 0;

  const handleCarSelect = (carId) => {
    setSelectedCar(carId);
    if (carError) setCarError(''); // Сброс ошибки, если она уже была установлена
  };

  const addHandler = async (data) => {
    try {
      const result = await axios.post(`${import.meta.env.VITE_URL}/testdrive/docTD`, data, {
        withCredentials: true,
      });
      if (result.status === 200) {
        setIsSubmitted(true);
        setSubmissionData({
          ...data,
          id: result.data.id,
        });
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  const findCarNameById = (carId) => {
    const car = cars.find((car) => car.id === carId);
    return car ? car.name : 'Неизвестный автомобиль';
  };

  if (isSubmitted) {
    return (
      <Container sx={{ my: 2 }}>
        <Typography variant="h5" gutterBottom>
          Спасибо, вы успешно записались на тест-драйв!
        </Typography>
        <Typography variant="body1">Номер заявки: {submissionData.id}</Typography>
        <Typography variant="body1">Дата: {submissionData.dateSelected}</Typography>
        <Typography variant="body1">Телефон: {submissionData.phoneNumber}</Typography>
        <Typography variant="body1">Автомобиль: {findCarNameById(selectedCar)}</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ my: 2 }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        textAlign="center"
        sx={{ fontSize: '2.5rem', marginBottom: '2rem' }}
      >
        Запишитесь на тест-драйв
      </Typography>
      <Grid container spacing={6} justifyContent="center" className="carsTestDriveWrapper">
        <Grid item container spacing={3} md={6}>
          {cars.map((car) => (
            <Grid item xs={6} key={car.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  transform: selectedCar === car.id ? 'scale(1.05) rotateY(10deg)' : 'none',
                  transition: 'transform 0.5s ease-in-out',
                  borderColor: selectedCar === car.id ? 'primary.main' : 'grey.300',
                  borderWidth: selectedCar === car.id ? 2 : 1,
                  ':hover': {
                    transform: 'scale(1.05) rotateY(10deg)',
                    borderColor: 'primary.main',
                  },
                }}
                elevation={selectedCar === car.id ? 8 : 1}
                onClick={() => handleCarSelect(car.id)}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  style={{ width: '100%', transition: 'transform 0.5s ease-in-out' }}
                />
                <Typography textAlign="center">{car.name}</Typography>
              </Card>
            </Grid>
          ))}
          {carError && (
            <Grid item xs={12}>
              <Typography textAlign="center" color="error">
                {carError}
              </Typography>
            </Grid>
          )}
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Formik
            initialValues={{
              userName: user.name || '',
              phoneNumber: user.phone || '',
              userComment: '',
              dateSelected: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              if (!selectedCar) {
                setCarError('Необходимо выбрать автомобиль');
                setSubmitting(false);
                return;
              }
              const submissionData = {
                ...values,
                carId: selectedCar,
                ...(isUserAuthenticated && { userId: user.id }),
              };

              // Вызов функции addHandler для отправки данных формы
              addHandler(submissionData);
            }}
          >
            {({ errors, touched, handleChange, handleBlur, isSubmitting }) => (
              <Form>
                <Stack spacing={2}>
                  <Typography variant="h6" gutterBottom>
                    Заполните форму для записи на тест-драйв
                  </Typography>

                  <Field
                    as={TextField}
                    label="Ваше имя"
                    name="userName"
                    helperText={touched.userName ? errors.userName : ''}
                    error={touched.userName && Boolean(errors.userName)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    as={TextField}
                    label="Телефон"
                    name="phoneNumber"
                    helperText={touched.phoneNumber ? errors.phoneNumber : ''}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    as={TextField}
                    label="Комментарий"
                    name="userComment"
                    multiline
                    rows={4}
                    helperText={touched.userComment ? errors.userComment : ''}
                    error={touched.userComment && Boolean(errors.userComment)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    as={TextField}
                    label="Желаемая дата"
                    type="date"
                    name="dateSelected"
                    helperText={touched.dateSelected ? errors.dateSelected : ''}
                    error={touched.dateSelected && Boolean(errors.dateSelected)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <Button type="submit" variant="contained" disableElevation>
                    Записаться
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestDriveForm;
