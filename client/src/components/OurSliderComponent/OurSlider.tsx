import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    { image: 'gruz1.jpg', description: 'Описание 1' },
    { image: 'gruz2.jpg', description: 'Описание 2' },
    { image: 'gruz3.jpg', description: 'Описание 3' },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <p>{slide.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;