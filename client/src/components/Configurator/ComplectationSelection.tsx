import React from 'react';

const ComplectationSelection = ({ model, onSelect }) => {
  // Предположим, что комплектации загружены с сервера и переданы в компонент как пропс,
  // для примера создадим фиктивный список комплектаций прямо здесь.
  const complectations = [
    { id: 1, model_id: 2, complectationName: 'Respect', price: 132500 },
    { id: 2, model_id: 2, complectationName: 'Exclusive', price: 182500 },
    { id: 2, model_id: 2, complectationName: 'Red Line', price: 192500 },
  ];

  // Отфильтруем комплектации для выбранной модели
  const availableComplectations = complectations.filter((c) => c.model_id === model.id);

  return (
    <div className="complectation-selection">
      <h2>Выберите комплектацию для {model.modelName}</h2>
      <div className="complectation-list">
        {availableComplectations.map((complectation) => (
          <div
            key={complectation.id}
            className="complectation-item"
            onClick={() => onSelect(complectation)}
          >
            <h3>{complectation.complectationName}</h3>
            <p>Дополнительная стоимость: {complectation.price.toLocaleString('ru-RU')} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplectationSelection;
