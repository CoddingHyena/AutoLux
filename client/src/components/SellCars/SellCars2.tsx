import React from 'react';
import './SellCars.css';


// Тестовый объект car, который мы будем использовать в качестве примера
const exampleCar = {
  imageUrl: '/BMW.jpg',
  name: 'BMW X6',
  year: '2017',
  bodyType: 'Внедорожник',
  available: 1,
  discount: '230 000',
  price: '3 595 000'
};

const CarCard2 = ({ car = exampleCar }) => { // Задаём значение по умолчанию для пропса car
  return (
    <div className="car-card">
      <div className="car-card-header">
        <span>Акция</span>
      </div>
      <img src={car.imageUrl} alt={car.name} />
      <div className="car-card-info">
        <h2>{car.name}</h2>
        <p>Год выпуска: {car.year}</p>
        <p>Кузов: {car.bodyType}</p>
        <p>В наличии: {car.available} авто</p>
        <p>С учетом выгоды до {car.discount} р.</p>
        <div className="car-card-price">
          от {car.price} р.
        </div>
        <button className="car-card-button">Подробнее</button>
      </div>
    </div>
  );
};

export default CarCard2;