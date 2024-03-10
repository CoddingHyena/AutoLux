const managerRoute = require('express').Router();

const { DocFeedback, DocTestDrive, DocTO, Cars } = require('../db/models');

managerRoute.get('/docFB', async (req, res) => {
  try {
    const docFBfalse = await DocFeedback.findAll({ where: { status: false } });
    const getDocFB = docFBfalse.map((el) => el.get({ plain: true }));
    res.json(getDocFB);
  } catch (error) {
    console.log(error, 'ошибка в ручке GET_docFB guest MANAGER');
    res.sendStatus(500);
  }
});



managerRoute.put('/docFB', async (req, res) => {
  const {formData} = req.body;
  console.log('data docFB manager put',formData)
  try {
    const queryDocFB = await DocFeedback.findByPk(formData.id);
    queryDocFB.manager = formData.manager;
    queryDocFB.status = formData.status;
    queryDocFB.ourComment = formData.ourComment;
    queryDocFB.save();
    res.json(queryDocFB);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUT_docFB manager');
    res.sendStatus(500);
  }
});

managerRoute.get('/docTD', async (req, res) => {
  try {
    const docsTD = await DocTestDrive.findAll({ where: { status: false } });
    const getDocsTD = docsTD.map((el) => el.get({ plain: true }));
    res.json(getDocsTD);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ ГЕТ_TD manager');
    res.sendStatus(500);
  }
});

managerRoute.post('/docTD', async (req, res) => {
  const {
    formData
  } = req.body;
  const userId = Number(formData.userId) 
  const carId = Number(formData.carId)
  
  try {
    const newTD = await DocTestDrive.create({
      user_id: userId, car_id: carId, dateNow: new Date(), manager: formData.managerId, status: false, probegKm: 0, ourComment: formData.ourComment, userScore: 10, userComment: '',
    });
    const getNewTD = newTD.get({ plain: true });
    res.json(getNewTD);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ POST docTD manager');
    res.sendStatus(500);
  }
});

managerRoute.put('/docTD', async (req, res) => {
   const {
    formData
  } = req.body;
  try {
    const queryDocTD = await DocTestDrive.findByPk(formData.id);
    queryDocTD.manager = formData.manager;
    queryDocTD.status = formData.status;
    queryDocTD.ourComment = formData.ourComment;
    queryDocTD.save();
    res.json(queryDocTD);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUT_docTD manager');
    res.sendStatus(500);
  }
});

managerRoute.get('/docTO', async (req, res) => {
  try {
    const docsTO = await DocTO.findAll({ where: { status: false } });
    const getDocsTO = docsTO.map((el) => el.get({ plain: true }));
    res.json(getDocsTO);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ ГЕТ_TO manager');
    res.sendStatus(500);
  }
});

// managerRoute.post('/docTO', async (req, res) => {
//   const {
//     userId, carId, dateNow, manager, probegKm, ourComment,
//   } = req.body;
//   try {
//     const newTO = await DocTO.create({
//       userId, carId, dateNow, manager, status: false, probegKm, ourComment, userScore: '', userComment: '',
//     });
//     const getNewTO = newTO.get({ plain: true });
//     res.json(getNewTO);
//   } catch (error) {
//     console.log(error, 'ОШИБКА В РУЧКЕ POST DocTO manager');
//     res.sendStatus(500);
//   }
// });

managerRoute.post('/docTO', async (req, res) => {
  const {
    formData
  } = req.body;
  const userId = Number(formData.userId) 
  const carId = Number(formData.carId)
  console.log('НАШ РЕКБОДИ', req.body, userId, carId);
  
  try {
    const newTO = await DocTO.create({
      user_id: userId, car_id: carId, dateNow: new Date(), manager: formData.managerId, status: false, probegKm: 0, ourComment: formData.ourComment, userScore: 10, userComment: '',
    });
    const getNewTO = newTO.get({ plain: true });
    res.json(getNewTO);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ POST docTO manager');
    res.sendStatus(500);
  }
});

managerRoute.put('/docTO', async (req, res) => {
    const {
      formData
  } = req.body;
  try {
    const queryDocTO = await DocTO.findByPk(formData.id);
    queryDocTO.manager = formData.manager;
    queryDocTO.status = formData.status;
    queryDocTO.ourComment = formData.ourComment;
    queryDocTO.save();
    res.json(queryDocTO);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUT_DocTO manager');
    res.sendStatus(500);
  }
});

managerRoute.get('/car', async (req, res) => {
    try {
      const carsTD = await Cars.findAll({ where: { ours: true, bu: true } });
      const getCarsTD = carsTD.map((el) => el.get({ plain: true }));
      res.json(getCarsTD);
    } catch (error) {
      console.log(error, 'ошибка в ручке GET_carsTD  MANAGER');
      res.sendStatus(500);
    }
  });

module.exports = managerRoute;
