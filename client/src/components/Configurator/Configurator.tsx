import React, { useState } from 'react';
import ColorSelection from './ColorSelection';
import ComplectationSelection from './ComplectationSelection';
import ModelSelection from './ModelSelection';

const CarConfigurator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedComplectation, setSelectedComplectation] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const userComment = `Модель: ${selectedModel.modelName}, Комплектация: ${selectedComplectation.complectationName}, Цвет: ${selectedColor.colorName}`;
    const formData = {
      userName,
      PhoneNumber: phoneNumber,
      userComment,
    };
    // Здесь добавьте логику для отправки данных на сервер.
    console.log(formData);
    setCurrentStep(5);
  };

  // Компоненты для каждого шага можно создать отдельно.
  switch (currentStep) {
    case 1:
      return <ModelSelection onSelect={handleModelSelect} />;
    case 2:
      return <ComplectationSelection model={selectedModel} onSelect={handleComplectationSelect} />;
    case 3:
      return <ColorSelection model={selectedModel} onSelect={handleColorSelect} />;
    case 4:
      return (
        <form onSubmit={handleSubmit}>
          <p>Выбранная модель: {selectedModel.modelName}</p>
          <p>Выбранная комплектация: {selectedComplectation.complectationName}</p>
          <p>Выбранный цвет: {selectedColor.colorName}</p>
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
