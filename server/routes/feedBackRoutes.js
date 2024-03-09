const feedBackRoutes = require('express').Router();

const { DocFeedback } = require('../db/models');

feedBackRoutes.post('/guest', async (req, res) => {
  const { userName, phoneNumber, userComment } = req.body;
  console.log(req.body, '=========req.body FB MAIN')
  try {
    const newFeedBack = await DocFeedback.create(
      {
        userName, user_id: null, dateNow: new Date(), manager: null, status: false, phoneNumber, ourComment: '', userComment,
      }
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ FEEDBACK POST guest');
    res.sendStatus(500);
  }
});

feedBackRoutes.post('/user', async (req, res) => {
  const {userId} = req.session;
  const { userName, phoneNumber, userComment } = req.body;
  try {
    const newFeedBack = await DocFeedback.create(
      {
        userName, user_id: userId, dateNow: new Date(), manager: null, status: false, phoneNumber, ourComment: '', userComment,
      }
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ FEEDBACK POST user');
    res.sendStatus(500);
  }
});

module.exports = feedBackRoutes;
