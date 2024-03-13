import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import ColorSelection from './ColorSelection';
import ComplectationSelection from './ComplectationSelection';
import ModelSelection from './ModelSelection';
import { useAppSelector } from '../../redux/hooks';
import axios from 'axios';

const CarConfigurator = () => {
  const user = useAppSelector((state) => state.userSlice.user);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedComplectation, setSelectedComplectation] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [userName, setUserName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);

  // Обновление userName и phoneNumber после загрузки данных пользователя
  useEffect(() => {
    setUserName(user?.userName || '');
    setPhoneNumber(user?.phoneNumber || '');
    console.log(userName, 'userName');
    console.log(phoneNumber, 'phoneNumber');
  }, [user]);

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setCurrentStep(2);
  };

  const handleComplectationSelect = (complectation) => {
    setSelectedComplectation(complectation);
    setCurrentStep(3);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setCurrentStep(4);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userComment = `Модель: ${selectedModel.modelName}, Комплектация: ${selectedComplectation.complectationName}, Цвет: ${selectedColor.colorName}`;
    const formData = {
      user_id: user?.id,
      userName,
      phoneNumber,
      userComment,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}/feedBack/user`, // Replace with your API endpoint
        formData,
        { withCredentials: true }
      );

      if (response.status === 201) {
        console.log('Form submitted successfully');
        // Here you can handle the state update for a successful submission
        setCurrentStep(5);
      }
    } catch (error) {
      console.error('There was an error submitting the form', error);
      // Here you might want to update the state to notify the user about the error
    }
  };

  switch (currentStep) {
    case 1:
      return <ModelSelection onSelect={handleModelSelect} />;
    case 2:
      return <ComplectationSelection model={selectedModel} onSelect={handleComplectationSelect} />;
    case 3:
      return <ColorSelection model={selectedModel} onSelect={handleColorSelect} />;
    case 4:
      // Расчет итоговой цены
      const totalPrice = selectedModel.price + selectedComplectation.price + selectedColor.price;

      return (
        <Container component="main" maxWidth="md">
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12}>
              <Card raised sx={{ mt: 4, p: 3 }}>
                <CardContent>
                  {currentStep === 5 ? (
                    <Typography variant="h5">Ваша заявка отправлена. Спасибо!</Typography>
                  ) : (
                    <>
                      <Typography variant="h6" gutterBottom>
                        Выбранная модель: {selectedModel?.modelName}
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        Выбранная комплектация: {selectedComplectation?.complectationName}
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        Выбранный цвет: {selectedColor?.colorName}
                      </Typography>
                      <Box sx={{ my: 2, textAlign: 'center' }}>
                        <img
                          src={`feramontSlide/${selectedColor?.photo}`}
                          alt={`Цвет ${selectedColor?.colorName}`}
                          style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
                        />
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        Итоговая цена:
                        {selectedModel && selectedComplectation && selectedColor
                          ? (
                              selectedModel.price +
                              selectedComplectation.price +
                              selectedColor.price
                            ).toLocaleString('ru-RU')
                          : '—'}{' '}
                        ₽
                      </Typography>
                      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="userName"
                          label="Ваше имя"
                          name="userName"
                          autoComplete="name"
                          autoFocus
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="phoneNumber"
                          label="Ваш телефон"
                          name="phoneNumber"
                          autoComplete="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Отправить заявку
                        </Button>
                      </Box>
                    </>
                  )}
                </CardContent>
                <CardActions>{/* Кнопки переключения шагов, если необходимо */}</CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      );
    case 5:
      return (
        <Container component="main" maxWidth="md">
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12}>
              <Card raised sx={{ mt: 4, p: 3 }}>
                <CardContent>
                  <Typography variant="h5">Ваша заявка отправлена. Спасибо!</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      );
  }
};

export default CarConfigurator;
