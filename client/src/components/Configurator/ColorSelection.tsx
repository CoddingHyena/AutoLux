import React from 'react';

const ColorSelection = ({ model, onSelect }) => {
  // Предположим, что цвета загружены с сервера и переданы в компонент как пропс,
  // для примера создадим фиктивный список цветов прямо здесь.
  const colors = [
    { id: 1, model_id: 2, colorName: 'Alaitoc Blue.png', price: 10000 },
    { id: 2, model_id: 2, colorName: 'Brass Scorpion.png', price: 17000 },
    { id: 3, model_id: 2, colorName: 'Lothern Blue.png', price: 25500 },
    { id: 4, model_id: 2, colorName: 'Corvus Black.png', price: 29000 },
    { id: 5, model_id: 2, colorName: 'Grey Knights Steel.png', price: 19000 },
    { id: 6, model_id: 2, colorName: 'Warpfiend Grey.png', price: 13000 },
    { id: 7, model_id: 2, colorName: 'White Scar.png', price: 16500 },
    { id: 8, model_id: 2, colorName: 'Wild Rider Red.png', price: 30000 },
  ];

  // Отфильтруем цвета для выбранной модели
  const availableColors = colors.filter((c) => c.model_id === model.id);

  return (
    <div className="color-selection">
      <h2>Выберите цвет для {model.modelName}</h2>
      <div className="color-list">
        {availableColors.map((color) => (
          <div key={color.id} className="color-item" onClick={() => onSelect(color)}>
            <div
              className="color-sample"
              style={{ backgroundColor: color.colorName, width: '50px', height: '50px' }}
            ></div>
            <h3>{color.colorName}</h3>
            <p>Дополнительная стоимость: {color.price.toLocaleString('ru-RU')} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
