import React, { useEffect, useState } from 'react';
import { colors, complectations, models } from './mocs';

const ColorSelection = ({ model, onSelect }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  // Устанавливаем цвет по умолчанию при загрузке компонента
  useEffect(() => {
    // Находим цвет Warpfiend Grey в списке
    const defaultColor = colors.find((c) => c.colorName === 'Warpfiend Grey');
    // Устанавливаем его как выбранный цвет, но не вызываем onSelect
    setSelectedColor(defaultColor);
  }, [colors]);

  const handleColorClick = (color) => {
    setSelectedColor(color); // Только обновляем выбранный цвет
  };

  const handleNextClick = () => {
    if (selectedColor) {
      onSelect(selectedColor); // Вызываем onSelect только при клике на кнопку
    }
  };

  const availableColors = colors.filter((c) => c.model_id === model.id);

  return (
    <div className="color-selection">
      <h2>Выберите цвет для {model.modelName}</h2>

      <div className="color-list">
        {availableColors.map((color) => (
          <div
            key={color.id}
            className={`color-item ${selectedColor === color ? 'selected' : ''}`}
            onClick={() => handleColorClick(color)}
          >
            <img
              src={`feramontSlide/${color.photo}`}
              alt={color.colorName}
              style={{ maxWidth: '200px' }}
            />
            <h3>{color.colorName}</h3>
            <p>Цена: {color.price.toLocaleString('ru-RU')} ₽</p>
          </div>
        ))}
      </div>
      <button onClick={handleNextClick} disabled={!selectedColor}>
        Расчитать цену
      </button>
    </div>
  );
};

export default ColorSelection;
