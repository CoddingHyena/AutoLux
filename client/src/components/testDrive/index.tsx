import React, { useState } from 'react';
import { Grid, Card, TextField, Button, Stack, Typography, Container } from '@mui/material';

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

const TestDriveForm = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    userComment: '',
    dateSelected: '',
  });

  const handleCarSelect = (carId) => {
    setSelectedCar(carId);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Selected car:', selectedCar);
    console.log('Form data:', formData);
  };

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
      <Grid container spacing={6} justifyContent="center">
        <Grid item container spacing={2} xs={2} md={6} lg={2} maxWidth="1200px">
          {cars.map((car) => (
            <Grid item xs={6} key={car.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  borderColor: selectedCar === car.id ? 'primary.main' : 'grey.300',
                  borderWidth: selectedCar === car.id ? 2 : 1,
                  ':hover': {
                    borderColor: 'primary.main',
                  },
                }}
                elevation={selectedCar === car.id ? 8 : 1}
                onClick={() => handleCarSelect(car.id)}
              >
                <img src={car.image} alt={car.name} style={{ width: '100%' }} />
                <Typography textAlign="center">{car.name}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} md={6} lg={3} maxWidth="600px">
          <Card raised sx={{ p: 2 }}>
            <Stack spacing={2}>
              <Typography variant="h6" gutterBottom>
                Заполните форму для записи на тест-драйв
              </Typography>

              <TextField
                label="Ваше имя"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
              />
              <TextField
                label="Телефон"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <TextField
                label="Комментарий"
                name="userComment"
                value={formData.userComment}
                onChange={handleInputChange}
                multiline
                rows={4}
              />
              <TextField
                label="Желаемая дата"
                type="date"
                name="dateSelected"
                value={formData.dateSelected}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button onClick={handleSubmit} variant="contained" disableElevation>
                Записаться
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestDriveForm;
