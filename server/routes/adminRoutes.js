const adminRoute = require('express').Router();

const { DocTestDrive, DocTO, DocFeedback, PhoneNum, Cars, User } = require('../db/models');




adminRoute.get('/docTD', async (req, res) => {
  try {
    const docsTD = await DocTestDrive.findAll();
    const getDocsTD = docsTD.map((el) => el.get({ plain: true }));
    res.json(getDocsTD);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ ГЕТ_TD ADMIN');
    res.sendStatus(500);
  }
});

adminRoute.put('/docTD', async (req, res) => {
  const { formData } = req.body;
  console.log(req.body, 'req.body docTD put');
const probeg = formData.probegKm;
const carId = formData.car_id;
const userId = formData.user_id;
  try {
    const queryDocTD = await DocTestDrive.findByPk(formData.id);
    queryDocTD.user_id = +userId;
    queryDocTD.car_id = +carId;
    queryDocTD.dateNow = formData.dateNow;
    queryDocTD.dateSelected = formData.dateSelected;
    queryDocTD.manager = formData.manager;
    queryDocTD.status = formData.status;
    queryDocTD.probegKm = +probeg;
    queryDocTD.ourComment = formData.ourComment;
    queryDocTD.save();
    res.json(queryDocTD);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUT_docTD');
    res.sendStatus(500);
  }
});

adminRoute.delete('/docTD/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await DocTestDrive.destroy({ where: { id } });
    res.json(id);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ DELETE_DOCTD ADMIN');
    res.sendStatus(500);
  }
});

adminRoute.get('/docTO', async (req, res) => {
  try {
    const docsTO = await DocTO.findAll();
    const getDocsTO = docsTO.map((el) => el.get({ plain: true }));
    res.json(getDocsTO);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ ГЕТ_TO ADMIN');
    res.sendStatus(500);
  }
});

adminRoute.put('/docTO', async (req, res) => {
  const { formData } = req.body;
  
const probeg = formData.probegKm;
const carId = formData.car_id;
const userId = formData.userId;
  try {
    const queryDocTO = await DocTO.findByPk(formData.id);
    queryDocTO.user_id = +userId;
    queryDocTO.car_id = +carId;
    queryDocTO.dateNow = formData.dateNow;
    queryDocTO.dateSelected = formData.dateSelected;
    queryDocTO.manager = formData.managerId;
    queryDocTO.status = formData.status;
    queryDocTO.probegKm = +probeg;
    queryDocTO.ourComment = formData.ourComment;
    queryDocTO.save();
    res.json(queryDocTO);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUT_docTD');
    res.sendStatus(500);
  }
});

adminRoute.delete('/docTO/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await DocTO.destroy({ where: { id } });
    res.json(id);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ DELETE_DocTO ADMIN');
    res.sendStatus(500);
  }
});

adminRoute.get('/docFB', async (req, res) => {
  try {
    const feetBacks = await DocFeedback.findAll();
    const getFeetBack = feetBacks.map((el) => el.get({ plain: true }));
    res.json(getFeetBack);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ GET_FEETBACK ADMIN');
    res.sendStatus(500);
  }
});

adminRoute.put('/docFB', async (req, res) => {
  const { formData } = req.body;
  console.log(req.body, 'req.body docFB put');
  try {
    const queryDocFB = await DocFeedback.findByPk(formData.id);
    queryDocFB.manager = formData.managerId;
    queryDocFB.status = formData.status;
    queryDocFB.ourComment = formData.ourComment;
    queryDocFB.save();
    res.json(queryDocFB);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUT_docFB admin');
    res.sendStatus(500);
  }
});

adminRoute.delete('/docFB/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await DocFeedback.destroy({ where: { id } });
    res.json(id);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ DELETE_DOCfeetback ADMIN');
    res.sendStatus(500);
  }
});

adminRoute.get('/user', async (req, res) => {
  try {
    const users = await User.findAll();
    const getUser = users.map((el) => el.get({ plain: true }));
    res.json(getUser);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ GET_USER aDMIN');
  }
});

adminRoute.put('/user', async (req, res) => {
  const { formData } = req.body;
  console.log(req.body, 'req.body user put');
  try {
    const queryUser = await User.findByPk(formData.id);
    queryUser.role_id = Number(formData.role_id);
    queryUser.save();
    res.json(queryUser);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUT_USER ADMIN');
  }
});

adminRoute.delete('/user/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id } });
    res.json(id);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ DELETE_user ADMIN');
    res.sendStatus(500);
  }
});



adminRoute.get('/car', async (req, res) => {
  try {
    const carsAll = await Cars.findAll();
    const carsGet = carsAll.map((el) => el.get({ plain: true }));
    res.json(carsGet);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ GET_CARS ADMIN');
    res.sendStatus(500);
  }
});

adminRoute.put('/car', async (req, res) => {
  const { formData } = req.body;
  try {
    const queryCar = await Cars.findByPk(formData.id);
    queryCar.mark = formData.mark;
    queryCar.model = formData.model;
    queryCar.color = formData.color;
    queryCar.prodYear = formData.prodYear;
    queryCar.gosNum = formData.gosNum;
    queryCar.gear = formData.gear;
    queryCar.engine = formData.engine;
    queryCar.vin = formData.vin;
    queryCar.probegTotal = formData.probegTotal;
    queryCar.ours = formData.ours;
    queryCar.bu = formData.bu;
    queryCar.save();
    res.json(queryCar);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUT_CAR ADMIN');
    res.sendStatus(500);
  }
});

adminRoute.delete('/car/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Cars.destroy({ where: { id } });
    res.json(id);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ DELETE_car ADMIN');
    res.sendStatus(500);
  }
});

module.exports = adminRoute;
