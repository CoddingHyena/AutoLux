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
        <form onSubmit={handleSubmit}>
          <p>Выбранная модель: {selectedModel.modelName}</p>
          <p>Выбранная комплектация: {selectedComplectation.complectationName}</p>
          <p>Выбранный цвет: {selectedColor.colorName}</p>

          {/* Отображение фото выбранного цвета */}
          <div className="color-image-container">
            <img
              src={`feramontSlide/${selectedColor.photo}`}
              alt={`Цвет ${selectedColor.colorName}`}
              style={{ width: '150px', height: 'auto' }}
            />
          </div>

          <p>Итоговая цена: {totalPrice.toLocaleString('ru-RU')} ₽</p>

          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Ваше имя"
            required
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Ваш телефон"
            required
          />
          <button type="submit">Отправить заявку</button>
        </form>
      );
    case 5:
      return <p>Ваша заявка отправлена. Спасибо!</p>;
    default:
      return <p>Неизвестный шаг</p>;
  }
};

export default CarConfigurator;
