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
    centerMode: true, // Добавляем центрирование
    centerPadding: '555', // Удаление дополнительного отступа
    customPaging: function (i) {
      return (
        <div>
          <p
            style={{
              fontSize: '10px',
              fontWeight: 'bold',
              marginRight: '150px',
              marginLeft: '120px',
              padding: '20px',
              margin: '115px',
            }}
          >
            {slides[i].upperDescription}
          </p>
        </div>
      );
    },
  };

  const slides = [
    {
      image: 'gruz1.png',
      upperDescription: '330 л. ',
      lowerDescription: 'До 7 пассажирских мест',
    },
    {
      image: 'gruz2.png',
      upperDescription: '871 л.',
      lowerDescription: 'Сбалансированное решение',
    },
    {
      image: 'gruz3.png',
      upperDescription: '1421 л.',
      lowerDescription: 'Огромный объем багажника',
    },
  ];

  return (
    <>
      {' '}
      <h2 style={{ fontSize: '4em', fontWeight: 'bold', lineHeight: 1.2 }}>Места хватит всем</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <p style={{ fontWeight: 'bold' }}>{slide.upperDescription}</p>
            <img src={`/${slide.image}`} alt={`Slide ${index + 1}`} />
            <p>{slide.lowerDescription}</p>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderComponent;
