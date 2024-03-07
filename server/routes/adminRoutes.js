const adminRoute = require('express').Router();

const {
  DocTestDrive, DocTo, DocFeedback, PhoneNum, Cars, User,
} = require('../db/models');

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

adminRoute.put('/docTD/:id', async (req, res) => {
  const { id } = req.params;
  const {
    dateNow, manager, status, probegKm, ourComment,
  } = req.body;
  try {
    const queryDocTD = await DocTestDrive.findByPk(id);
    queryDocTD.dateNow = dateNow;
    queryDocTD.manager = manager;
    queryDocTD.status = status;
    queryDocTD.probegKm = probegKm;
    queryDocTD.ourComment = ourComment;
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
    const docsTO = await DocTo.findAll();
    const getDocsTO = docsTO.map((el) => el.get({ plain: true }));
    res.json(getDocsTO);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ ГЕТ_TO ADMIN');
    res.sendStatus(500);
  }
});

adminRoute.put('/docTO/:id', async (req, res) => {
  const { id } = req.params;
  const {
    dateNow, manager, status, probegKm, ourComment,
  } = req.body;
  try {
    const queryDocTO = await DocTo.findByPk(id);
    queryDocTO.dateNow = dateNow;
    queryDocTO.manager = manager;
    queryDocTO.status = status;
    queryDocTO.probegKm = probegKm;
    queryDocTO.ourComment = ourComment;
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
    await DocTo.destroy({ where: { id } });
    res.json(id);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ DELETE_DOCTO ADMIN');
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

adminRoute.put('/docFB/:id', async (req, res) => {
  const { id } = req.params;
  const {
    dateNow, manager, status, phoneNumber, ourComment,
  } = req.body;
  try {
    const queryDocFB = await DocFeedback.findByPk(id);
    queryDocFB.dateNow = dateNow;
    queryDocFB.manager = manager;
    queryDocFB.status = status;
    queryDocFB.phoneNumber = phoneNumber;
    queryDocFB.ourComment = ourComment;
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

adminRoute.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { roleId, propType, persDataArg } = req.body;
  try {
    const queryUser = await User.findByPk(id);
    queryUser.role_id = roleId;
    queryUser.propType = propType;
    queryUser.persDataArg = persDataArg;
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

adminRoute.get('/phone', async (req, res) => {
  try {
    const phoneAll = await PhoneNum.findAll();
    const getPhones = phoneAll.map((el) => el.get({ plain: true }));
    res.json(getPhones);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ GET_PHONE ADMIN');
    res.sendStatus(500);
  }
});

adminRoute.put('phone/:id', async (req, res) => {
  const { id } = req.params;
  const { phoneNumber } = req.body;
  try {
    const queryPhone = await PhoneNum.findByPk(id);
    queryPhone.phoneNumber = phoneNumber;
    queryPhone.save();
    res.json(queryPhone);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUT_PHONE ADMIN');
  }
});

adminRoute.delete('/phone/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await PhoneNum.destroy({ where: { id } });
    res.json(id);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ DELETE_phoneNum ADMIN');
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

adminRoute.put('/car/:id', async (req, res) => {
  const { id } = req.params;
  const {
    mark, model, color, prodYear, gosNum,
    gear, engine, vin, probegTotal, ours, bu,
  } = req.body;
  try {
    const queryCar = await Cars.findByPk(id);
    queryCar.mark = mark;
    queryCar.model = model;
    queryCar.color = color;
    queryCar.prodYear = prodYear;
    queryCar.gosNum = gosNum;
    queryCar.gear = gear;
    queryCar.engine = engine;
    queryCar.vin = vin;
    queryCar.probegTotal = probegTotal;
    queryCar.ours = ours;
    queryCar.bu = bu;
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
