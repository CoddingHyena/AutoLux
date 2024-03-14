import React from 'react';

const FeatureCard = ({ image, title, description }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '5px',
    maxWidth: '350px',
    width: '150%',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    minHeight: '450px',
  };

  const imageStyle = {
    width: '100%',
    height: '250px', // Высота может быть изменена в соответствии с вашими потребностями
    objectFit: 'cover',
  };

  const titleStyle = {
    fontWeight: 'bold',

    marginTop: '20px',
  };

  const descriptionStyle = {
    textAlign: 'center',

    padding: '0 20px 20px 20px',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <h2 style={titleStyle}>{title}</h2>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

const FeaturesContainer = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  };

  return (
    <div style={containerStyle}>
      <FeatureCard
        image="/Optics.jpg" // Измените на ваше изображение
        title="ФУНКЦИОНАЛЬНАЯ ОПТИКА"
        description="Cостоит из двух рядов светодиодных ламп. Нижний ряд отвечает за ближний свет, обеспечивая яркое и ровное освещение дороги перед автомобилем, а верхний  отвечает за дальний, обеспечивая широкий и яркий световой поток."
      />
      <FeatureCard
        image="/Face.jpg" // Измените на ваше изображение
        title="ВНЕШНИЙ ВИД"
        description="Внешний вид, привлекающий внимание Светодиодная полоса с подсветкой логотипа подчеркивает брутальный и выразительный внешний вид автомобиля."
      />

      <FeatureCard
        image="/Wheel.jpg" // Измените на ваше изображение
        title="БРУТАЛЬНЫЙ И СТИЛЬНЫЙ"
        description="21-дюймовые колесные диски с массивными расширителями арок не только создают впечатляющий внешний вид, но и придают автомобилю устойчивость и непревзойденную мощь на дороге."
      />
    </div>
  );
};

export default FeaturesContainer;
