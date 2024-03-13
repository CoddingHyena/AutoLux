import React from 'react';

const ModelSelection = ({ onSelect }) => {
  // Предположим, что модели были загружены с сервера и переданы в компонент как пропс,
  // для примера создадим фиктивный список моделей прямо здесь.
  const models = [
    { id: 1, modelName: 'Folo', price: 1600000, photo: 'FOLOCONF.jpg' },
    { id: 2, modelName: 'Feramont', price: 3600000, photo: 'FERAMONTCONF.png' },
    { id: 3, modelName: 'Figuan', price: 2600000, photo: 'FIGUANCONF.jpg' },
  ];

  return (
    <div className="model-selection">
      <h2>Выберите модель Volkswagen</h2>
      <div className="model-list">
        {models.map((model) => (
          <div key={model.id} className="model-item" onClick={() => onSelect(model)}>
            <img
              src={`car-icons/${model.photo}`}
              alt={model.modelName}
              style={{ width: '100px', height: 'auto' }}
            />
            <h3>{model.modelName}</h3>
            <p>Цена от: {model.price.toLocaleString('ru-RU')} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelSelection;
