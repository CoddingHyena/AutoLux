import React from 'react';
import { colors, complectations, models } from './mocs';

const ModelSelection = ({ onSelect }) => {
  return (
    <div className="model-selection">
      <h2>Выберите модель Volkswagen</h2>
      <div className="model-list">
        {models.map((model) => (
          <div key={model.id} className="model-item" onClick={() => onSelect(model)}>
            <img
              src={`feramontSlide/${model.photo}`}
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
