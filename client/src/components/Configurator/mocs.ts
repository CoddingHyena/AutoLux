const colors = [
  { id: 1, model_id: 2, colorName: 'Alaitoc Blue', photo: 'Alaitoc Blue.png', price: 10000 },
  {
    id: 2,
    model_id: 2,
    colorName: 'Brass Scorpion',
    photo: 'Brass Scorpion.png',
    price: 17000,
  },
  {
    id: 3,
    model_id: 2,
    colorName: 'Lothern Blue',
    photo: 'Lothern Blue.png',
    price: 25500,
  },
  {
    id: 4,
    model_id: 2,
    colorName: 'Corvus Black',
    photo: 'Corvus Black.png',
    price: 29000,
  },
  {
    id: 5,
    model_id: 2,
    colorName: 'Grey Knights Steel',
    photo: 'Grey Knights Steel.png',
    price: 19000,
  },
  {
    id: 6,
    model_id: 2,
    colorName: 'Warpfiend Grey',
    photo: 'Warpfiend Grey.png',
    price: 13000,
  },
  { id: 7, model_id: 2, colorName: 'White Scar', photo: 'White Scar.png', price: 16500 },
  {
    id: 8,
    model_id: 2,
    colorName: 'Wild Rider Red',
    photo: 'Wild Rider Red.png',
    price: 30000,
  },
];

const complectations = [
  {
    id: 1,
    model_id: 2,
    complectationName: 'Respect',
    price: 132500,
    features: [
      'Адаптивный круиз-контроль',
      'Cистема мониторинга слепых зон "Side Assist" с функцией "Rear Traffic Alert"',
      'Водительское сиденье с электрорегулировками в 10 положениях, пассажирское сиденье с ручной регулировкой в 6 положениях',
      'Индукционная беспроводная зарядка мобильного телефона',
    ],
  },
  {
    id: 2,
    model_id: 2,
    complectationName: 'Exclusive',
    price: 182500,
    features: [
      'Парковочный ассистент "Park Assist", датчики парковки спереди и сзади',
      'Хромированная окантовка боковых стекол',
      'Легкосплавные колесные диски "Capricorn" 8J x 20, шины 255/50 R20 , болты-секретки',
    ],
  },
  {
    id: 2,
    model_id: 2,
    complectationName: 'Red Line',
    price: 192500,
    features: [
      'Особенности Exclusive включены',
      'Передний и задний бампер в стиле R-Line в цвет кузова с черными глянцевыми вставками и диффузором',
      'Многофункциональное рулевое колесо с отделкой кожей Nappa, подогревом и логотипом R-Line',
      'Стальные накладки на педали',
    ],
  },
];

const models = [
  { id: 1, modelName: 'Folo', price: 1600000, photo: 'FOLOCONF.png' },
  { id: 2, modelName: 'Feramont', price: 3600000, photo: 'FERAMONTCONF.png' },
  { id: 3, modelName: 'Figuan', price: 2600000, photo: 'FIGUANCONF.png' },
];

export { colors, complectations, models };
