import React, { useState } from 'react';
import { colors, complectations, models } from './mocs';

const ComplectationSelection = ({ model, onSelect }) => {
  const [selectedComplectation, setSelectedComplectation] = useState(null);

  const handleSelectComplectation = (complectation) => {
    setSelectedComplectation(complectation); // Запоминаем выбранную комплектацию
  };

  const handleNextClick = () => {
    if (selectedComplectation) {
      onSelect(selectedComplectation); // Переходим к следующему шагу
    }
  };

  return (
    <div className="complectation-selection">
      <h2>Выберите комплектацию для {model.modelName}</h2>
      <img
        src={`feramontSlide/${model.photo}`}
        alt={`Фото ${model.modelName}`}
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="complectation-list">
        {complectations.map((complectation) => (
          <div
            key={complectation.id}
            className={`complectation-item ${
              selectedComplectation === complectation ? 'selected' : ''
            }`}
            onClick={() => handleSelectComplectation(complectation)}
          >
            <h3>{complectation.complectationName}</h3>
            <ul>
              {complectation.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p>Цена: {complectation.price.toLocaleString('ru-RU')} ₽</p>
            <button
              className={`select-button ${selectedComplectation === complectation ? 'active' : ''}`}
            >
              Выбрать
            </button>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={handleNextClick} disabled={!selectedComplectation}>
        Выбрать цвет →
      </button>
    </div>
  );
};

export default ComplectationSelection;
