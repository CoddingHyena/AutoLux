const feedBackRoutes = require('express').Router();

const { DocFeedback } = require('../db/models');

feedBackRoutes.post('/', async (req, res) => {
  const { userName, phoneNumber, userComment } = req.body;
  try {
    const newFeedBack = await DocFeedback.create(
      {
        userName, dateNow: new Date(), manager: '', status: false, phoneNumber, ourComment: '', userComment,
      }
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ FEEDBACK POST');
    res.sendStatus(500);
  }
});

module.exports = feedBackRoutes;
