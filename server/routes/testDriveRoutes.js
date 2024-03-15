const testDriveRoute = require('express').Router();
const { DocTestDrive, DocTO, DocFeedback, PhoneNum, Cars, User } = require('../db/models');

testDriveRoute.post('/docTD', async (req, res) => {
  const { userId, phoneNumber, userComment, dateSelected, carId } = req.body;
  try {
    // Создаем объект с данными для создания записи, который уже включает обязательные поля
    const dataForNewTD = {
      car_id: Number(carId),
      dateNow: new Date(),
      status: false,
      userComment,
      phoneNumber,
      dateSelected: new Date(dateSelected),
    };

    if (userId) {
      dataForNewTD.user_id = Number(userId);
    }

    const newTD = await DocTestDrive.create(dataForNewTD);

    const getNewTD = newTD.get({ plain: true });
    res.json(getNewTD);
  } catch (error) {
    console.error('Ошибка при создании записи на тест-драйв:', error);
    res.sendStatus(500);
  }
});

module.exports = testDriveRoute;
