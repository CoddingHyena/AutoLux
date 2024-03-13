import React from 'react';

function YandexMap() {
  const src = "https://yandex.ru/map-widget/v1/?um=constructor%3Aeabb80cf90cbbb290bc4780b85786d825fceceff9b6335e42679f1e9bc39a1c0&amp;width=1000&amp;height=500&amp;lang=ru_RU&amp;scroll=true"; // Замените 'ваш_код_карты' на код вашей карты
  return (
    <iframe
      src={src}
      width="660"
      height="500"
      frameborder="0"
    ></iframe>
  );

  
}

export default YandexMap;

