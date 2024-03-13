import React from 'react';
import './SellCars.css';


// Тестовый объект car, который мы будем использовать в качестве примера
const exampleCar = {
  imageUrl: '/Meren.jpg',
  name: 'Mercedes-Benz S-Класс',
  year: '2021',
  bodyType: 'Седан',
  available: 1,
  discount: '219 990',
  price: '16 190 000'
};

const CarCard4 = ({ car = exampleCar }) => { // Задаём значение по умолчанию для пропса car
  return (
    <div className="car-card">
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

export default CarCard4;