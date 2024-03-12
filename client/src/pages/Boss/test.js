'use strict';

const moment = require('moment');

// Функция для генерации случайного булева значения
function randomBoolean() {
  return Math.random() < 0.5;
}

// Функция для генерации случайной даты в заданном диапазоне
function randomDate(daysAgoStart, daysAgoEnd) {
  const start = moment().subtract(daysAgoStart, 'days');
  const end = moment().subtract(daysAgoEnd, 'days');

  return new Date(
    new Date(start).getTime() +
      Math.random() * (new Date(end).getTime() - new Date(start).getTime())
  );
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Функция для генерации userScore с 30% шансом на null
function randomUserScore() {
  return Math.random() < 0.3 ? null : randomIntFromInterval(1, 5);
}

function randomManagerComment() {
  const shouldHaveComment = Math.random() > 0.4; // 60% вероятность, что будет комментарий
  if (!shouldHaveComment) return null;

  const managerComments = [
    'Записал клиента на тест-драйв на следующую неделю. Нужно подготовить автомобиль.',
    'Отправил покупателю полный прайс-лист с дополнительным оборудованием для Feramon.',
    'Обсудил финансовые вопросы с клиентом. Ожидает предложений по кредиту и лизингу.',
    "Клиент интересовался наличием цвета 'Северное сияние'. Уточню у поставщика и отвечу.",
    'Предложил клиенту индивидуальную консультацию по выбору дополнительных опций.',
    'Ответил на вопросы клиента касательно гарантий и постгарантийного обслуживания.',
    'Уточнил у сервисного центра сроки выполнения ТО для новых автомобилей Feramon.',
    'Оформил заявку на специальные условия покупки для корпоративных клиентов.',
    'Назначил встречу в автосалоне для демонстрации автомобиля и обсуждения деталей покупки.',
    'Зарегистрировал отзыв клиента на качество обслуживания. Планирую обсудить на следующем совещании с командой.',
    'Провел детальный анализ предпочтений клиента, чтобы предложить оптимальную комплектацию Feramon.',
    'Заказал эксклюзивные аксессуары для индивидуализации автомобиля по запросу клиента.',
    'Организовал презентацию новой модели Feramon для VIP-клиентов.',
    'Подготовил и отправил клиенту сравнительный анализ Feramon и конкурирующих моделей.',
    'Разработал индивидуальное предложение по trade-in для клиента, желающего обновить свой автомобиль.',
    'Инициировал улучшение процесса подачи автомобилей на тест-драйв, учитывая отзывы клиентов.',
    'Реализовал программу лояльности, предлагая дополнительные бонусы при покупке Feramon.',
    'Ввел дополнительную проверку состояния автомобилей перед передачей клиентам.',
    'Устроил вебинар по особенностям эксплуатации Feramon в сложных дорожных условиях.',
    'Обновил раздел часто задаваемых вопросов на сайте автосалона, добавив информацию о Feramon.',
    'Разработал и внедрил систему обратной связи после каждого тест-драйва для повышения качества обслуживания.',
    'Предложил систему раннего бронирования для новых моделей Feramon, учитывая высокий спрос.',
    'Оптимизировал процесс выбора и покупки автомобиля, сократив время ожидания для клиентов.',
    'Усилил меры безопасности при проведении тест-драйвов, обеспечив максимальную защиту клиентов.',
    'Разработал мобильное приложение автосалона для упрощения выбора и покупки автомобилей.',
  ];

  const randomIndex = Math.floor(Math.random() * managerComments.length);
  return managerComments[randomIndex];
}

const names = [
  'Иван Косой Кузнецов',
  'Сергей Барс Баранов',
  'Алексей Лысый Морозов',
  'Виктор Седой Луганский',
  'Николай Тату Сергеев',
  'Дмитрий Бес Петров',
  'Михаил Крест Воробьев',
  'Анатолий Шурик Ширяев',
  'Василий Ворон Орлов',
  'Павел Зуб Зубков',
  'Леонид Клещ Сидоров',
  'Артем Щука Карпов',
  'Олег Рыжий Новиков',
  'Егор Молот Токарев',
  'Геннадий Гена Балашов',
  'Роман Карась Карасев',
  'Владислав Бульдозер Волков',
  'Игорь Тихий Мельников',
  'Аркадий Смешной Кривошеин',
  'Юрий Стекло Глазов',
  'Анна Аркадьевна Каренина',
  'Константин Дмитриевич Левин',
  'Алексей Александрович Вронский',
  'Наталья Ильинична Ростова',
  'Пьер Кириллович Безухов',
  'Андрей Николаевич Болконский',
  'Родион Романович Раскольников',
  'Авдотья Романовна Раскольникова Соня',
  'Иван Федорович Карамазов',
  'Дмитрий Федорович Карамазов',
  'Алексей Федорович Карамазов',
  'Григорий Александрович Печорин',
  'Евгений Онегин',
  'Татьяна Ларина',
  'Лиза Калитина',
  'Илья Ильич Обломов',
  'Ольга Ильинская',
  'Федор Павлович Карамазов',
  'Александра Ивановна Каренина Кити',
  'Михаил Алексеевич Кольцов',
  'Максим MaxShow Широков',
  'Анна AnnaTravels Королева',
  'Леонид TechLeo Белов',
  'Виктория VickyTales Семенова',
  'Артем ArtyFacts Зайцев',
  'Елена LenaLooks Миронова',
  'Денис DenCook Кулинаров',
  'Ксения XeniStyle Павлова',
  'Никита NikVlogs Воробьев',
  'Ольга OlgaSings Романова',
  'Игорь IggyTech Казанцев',
  'София SofySpace Космова',
  'Роман RoManiac Манукян',
  'Полина PollyGoes Гончарова',
  'Алексей AlexPlay Игнатов',
  'Мария MashaMakes Деловая',
  'Вадим VadimViews Тихонов',
  'Светлана LanaLife Живова',
  'Егор EgorEats Овчинников',
  'Татьяна TanyaTeach Учитель',
];

const questions = [
  'Сколько будет стоить Ферамон с полным пакетом опций?',
  'Могу ли я записаться на тест-драйв Feramon на след. неделе?',
  'В каких цветах доступен Ферамон? Интересует темно-синий.',
  'Какова реальная расход топлива у Feramon?',
  'Можно узнать, есть ли спецпредложения на Ферамон?',
  'А какие гарантии на авто? И что они покрывают?',
  'Хотелось бы получить каталог аксессуаров для Feramon.',
  'Есть ли варианты финансирования покупки Ферамона?',
  'Можно ли получить кредит на авто прям у вас?',
  'Слышал, что у вас можно сдать старое авто в зачет нового. Как это работает?',
  'У вас есть программа лояльности для постоянных клиентов?',
  'Сколько времени занимает доставка, если заказать Ферамон сейчас?',
  'Возможно ли изменить комплектацию уже заказанного авто?',
  'Какой срок службы у аккумулятора в Ферамоне?',
  'Есть ли возможность протестировать авто в условиях зимы?',
  'Сколько стоит полис КАСКО для Ферамона?',
  'Можете ли вы отправить мне фото интерьера выбранной комплектации?',
  'Как долго действуют ваши текущие акции на Ферамон?',
  'Можно ли заказать авто с доставкой в другой город?',
  'Какие документы нужны, чтобы оформить покупку?',
  'Может ли ваш специалист помочь с выбором дополнительного оборудования?',
  'Есть ли у Ферамона версия с гибридным двигателем?',
  'Какие условия обмена на новую модель через несколько лет?',
  'Можно ли у вас пройти обучение по эксплуатации новой машины?',
  'Есть ли у вас сервисные центры за пределами города?',
  'Как быстро можно оформить возврат, если авто не подошло?',
  'Какие бонусы я получу, если приведу друга как покупателя?',
  'Какие штрафы за опоздание платежа по кредиту?',
  'Можно ли у вас заказать индивидуальную покраску авто?',
  'Какие отзывы оставляют владельцы Ферамона?',
  'Могу ли я рассчитывать на скидку при покупке двух авто?',
  'Возможно ли у вас тест-драйв на дом, чтобы не приезжать в салон?',
  'Чем Feramon лучше своих конкурентов?',
  'Есть ли ограничения по пробегу для гарантийного обслуживания?',
  'Сколько стоит замена масла и ТО для Feramon?',
  'Можно ли установить спортивное кресло в Ферамон?',
  'Какие опции идут в стандартной комплектации?',
  'Работаете ли вы по выходным?',
  'Как часто необходимо проходить ТО для моего автомобиля?',
  'Входит ли замена масла в стандартное техобслуживание?',
  'Могу ли я ожидать автомобиль во время проведения ТО?',
  'Какие работы включает в себя первое ТО после покупки нового авто?',
  'Существуют ли у вас специальные предложения на ТО для постоянных клиентов?',
  'Можно ли записаться на ТО онлайн?',
  'Как долго длится стандартное ТО?',
  'Можете ли вы предоставить замену авто на время ТО?',
  'Какие гарантии вы предоставляете на выполненные работы?',
  'Есть ли у вас лицензия на проведение ТО?',
  'Как мне узнать, что приближается время для ТО?',
  'Могу ли я принести свои запчасти для ТО?',
  'Какие документы мне нужно предоставить для ТО?',
  'Какова стоимость ТО для моей модели авто?',
  'Могу ли я получить официальный отчет о проделанных работах после ТО?',
  'Возможно ли ускоренное ТО, если мне срочно нужно использовать автомобиль?',
  'Принимаете ли вы к оплате кредитные карты за ТО?',
  'Могу ли я отменить запись на ТО, если у меня изменились планы?',
  'Есть ли у вас услуга выездного ТО на дом или в офис?',
  'Можно ли провести ТО раньше срока?',
  'Что делать, если после ТО я заметил неполадки?',
  'Предоставляется ли гарантия на запчасти, установленные во время ТО?',
  'Какие марки автомобилей вы обслуживаете?',
  'Можно ли провести ТО в вашем сервисе, если авто на гарантии у другого дилера?',
  'Какие виды дополнительных услуг вы предлагаете во время ТО?',
  'Есть ли у вас скидки для пенсионеров или студентов на ТО?',
  'Как происходит диагностика автомобиля перед ТО?',
  'Можете ли вы провести ТО в выходные дни?',
  'Как я могу оставить отзыв о качестве проведенного ТО?',
  'Предоставляете ли вы услуги по ремонту в рамках ТО, если обнаруживаются серьезные неисправности?',
  'Можно ли провести ТО автомобиля, купленного за границей?',
  'Есть ли специализированное ТО для спортивных автомобилей?',
  'Какие преимущества предоставляет ваша программа лояльности при регулярном ТО?',
  'Предлагаете ли вы услуги по утилизации старых автомобильных жидкостей и фильтров?',
  'Как мне подготовить автомобиль к ТО?',
  'Могу ли я присутствовать при ТО моего автомобиля?',
  'Сколько времени заранее необходимо записываться на ТО?',
  'Предоставляете ли вы отчеты о состоянии автомобиля после ТО?',
  'Могу ли я запросить замену конкретной детали в рамках ТО, даже если она еще работоспособна?',
  'Предлагаете ли вы услуги по модернизации и тюнингу во время ТО?',
  'Можете ли вы проверить автомобиль на предмет утечек в рамках ТО?',
  'Какие антикоррозийные обработки вы рекомендуете во время ТО?',
  'Включает ли ТО проверку системы кондиционирования и климат-контроля?',
  'Проводите ли вы обновление программного обеспечения автомобиля во время ТО?',
  'Есть ли у вас опыт работы с электромобилями и гибридами при ТО?',
  'Какие меры предосторожности вы принимаете для защиты автомобиля во время ТО?',
  'Можно ли у вас провести предпродажное ТО?',
  'Есть ли у вас акции или скидки для новых клиентов на первое ТО?',
  'Предлагаете ли вы услуги по восстановлению после ДТП в рамках ТО?',
  'Какие виды тестов и проверок включены в ваше комплексное ТО?',
];

function generateRandomDateSelected(dateNow) {
  const daysToAdd = randomIntFromInterval(3, 30);
  return moment(dateNow).add(daysToAdd, 'days').toDate();
}

module.exports = {
  async up(queryInterface, Sequelize) {
    const entries = new Array(30).fill(null).map(() => {
      const dateNow = randomDate(60, 0); // Случайная дата от сегодня до 60 дней назад
      const dateSelected = generateRandomDateSelected(dateNow);

      return {
        user_id: randomIntFromInterval(1, 10),
        car_id: randomIntFromInterval(1, 6),
        dateNow,
        dateSelected,
        probegKm: randomIntFromInterval(0, 100000),
        status: randomBoolean(),
        userComment: questions[randomIntFromInterval(0, questions.length - 1)],
        ourComment: randomManagerComment(),
        userScore: randomUserScore(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('DocTOs', entries);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DocTOs', null, {});
  },
};

// 'use strict';

// const moment = require('moment');
// const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
// const yesterday = moment().subtract(1, 'days');
// const monthAgo = moment().subtract(30, 'days');
// const yearAgo = moment().subtract(365, 'days');
// const halfYearAgo = moment().subtract(180, 'days');
// const quoterYearAgo = moment().subtract(90, 'days');
// console.log(typeof yesterday);

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert('DocTOs', [
//       {
//         user_id: 7,
//         car_id: 6,
//         dateNow: new Date(yearAgo),
//         probegKm: 52697,
//         status: false,
//         userComment: 'Всё отлично!',
//         ourComment: 'Работы выполнены',
//         userScore: 5,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         user_id: 7,
//         car_id: 6,
//         dateNow: new Date(halfYearAgo),
//         probegKm: 72697,
//         status: true,
//         userComment: 'Всё отлично!',
//         ourComment: 'Работы выполнены',
//         userScore: 5,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         user_id: 7,
//         car_id: 6,
//         dateNow: new Date(quoterYearAgo),
//         probegKm: 92697,
//         status: true,
//         userComment: 'Всё отлично!',
//         ourComment: 'Работы выполнены',
//         userScore: 5,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         user_id: 7,
//         car_id: 6,
//         dateNow: new Date(monthAgo),
//         probegKm: 112697,
//         status: true,
//         userComment: 'Всё отлично!',
//         ourComment: 'Работы выполнены',
//         userScore: 5,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         user_id: 1,
//         car_id: 1,
//         dateNow: new Date(quoterYearAgo),
//         probegKm: 80000,
//         status: true,
//         userComment: 'Всё хорошо!',
//         ourComment: 'Работы выполнены',
//         userScore: 4,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         user_id: 1,
//         car_id: 1,
//         dateNow: new Date(monthAgo),
//         probegKm: 100000,
//         status: true,
//         userComment: 'Всё хорошо!',
//         ourComment: 'Работы выполнены',
//         userScore: 4,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         user_id: 1,
//         car_id: 1,
//         dateNow: new Date(yesterday),
//         probegKm: 110000,
//         status: true,
//         userComment:
//           'Механик уронил гайку в маслобак, сказал ничего страшного, вылетит из выхлопной',
//         ourComment: 'Работы выполнены',
//         userScore: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         user_id: 8,
//         car_id: 5,
//         dateNow: new Date(yesterday),
//         probegKm: 130000,
//         status: false,
//         userComment:
//           'Механик уронил гайку в маслобак, сказал ничего страшного, вылетит из выхлопной',
//         ourComment: 'Работы выполнены',
//         userScore: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ]);
//   },

//   async down(queryInterface, Sequelize) {},
// };
