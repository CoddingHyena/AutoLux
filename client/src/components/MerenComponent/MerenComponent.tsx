import React from 'react';
import styles from './MerenComponents.module.css'; // Путь до CSS модуля

const CarDetail = ({ car }) => {
  // Деструктуризация объекта car для удобства
  const { imageUrl, title, year, specs, price } = car;

  return (
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
  );
};

export default CarDetail;