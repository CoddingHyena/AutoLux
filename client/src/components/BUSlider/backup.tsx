import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarCard1 from '../SellCars/SellCars1';
import CarCard2 from '../SellCars/SellCars2';
import CarCard3 from '../SellCars/SellCars3';
import CarCard4 from '../SellCars/SellCars4';
import CarCard5 from '../SellCars/SellCars5';
import './BuSlider.css';

const carsData = [
  // Ваши данные для каждой CarCard
  {
    imageUrl: '/Figuan.jpg',
    name: 'Volkswagen Tiguan',
    year: '2023',
    bodyType: 'Внедорожник',
    available: 1,
    discount: '700 000',
    price: '4 232 020',
  },
];

const CarSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carComponents = [CarCard1, CarCard2, CarCard3, CarCard4, CarCard5];

  return (
    <Slider {...settings}>
      {carComponents.map((CarCard, index) => (
        <CarCard key={index} car={carsData[index]} />
      ))}
    </Slider>
  );
};

export default CarSlider;
