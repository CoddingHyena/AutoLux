import React from 'react';
import AccordionItem from './AccordionItem';
import styles from './MerenComponents.module.css'; // Путь до CSS модуля

const CarDetail = ({ car }) => {
  // Деструктуризация объекта car для удобства
  const { imageUrl, title, year, specs, price } = car;

  const data = [
    {
      title: 'Прочее',
      items: ['Пневмоподвеска', 'Защита картера'],
    },
    {
      title: 'Мультимедиа',
      items: ['USB', 'Bluetooth', 'Голосовое управление'],
    },
    {
        title: 'Защита от угона',
        items: ['Центральный замок', 'Датчик проникновения в салон (датчик объема)'],
      },
      {
        title: 'Салон',
        items: ['Отделка кожей рулевого колеса', 'Люк', 'Тонированные стекла', 'Накладки на пороги', 'Панорамная крыша / лобовое стекло', 'Подогрев передних сидений'],
      },

  ];

  return (
    
    <div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{`${title} ${year}`}</h1>
        <ul className={styles.list}>
          {specs.map(spec => (
            <li key={spec} className={styles.listItem}>{spec}</li>
          ))}
        </ul>
        <div className={styles.price}>{price}</div>
        <a href="/contact" className={styles.button}>Получить предложение</a>
      </div>
    </div>

    <div className={styles.mainContainer}>
      {data.map((section, index) => (
        <AccordionItem key={index} title={section.title} items={section.items} />
      ))}
    </div>
    </div>
  );
};

export default CarDetail;