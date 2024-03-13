const lkRoute = require('express').Router();

const {
  DocTestDrive, DocTO, Cars, User,
} = require('../db/models');




lkRoute.get('/DocTestDrive', async (req, res) => {
  const { userId } = req.session;
  // console.log(userId, 'тестдрайв рчка гет sessionID');
  try {
    const docsTD = await DocTestDrive.findAll({
      where: { user_id: userId },
      attributes: ['id', 'dateNow', 'dateSelected', 'user_id', 'car_id', 'userScore', 'userComment'],
    });
    const getDocsTD = docsTD.map((el) => el.get({ plain: true }));
    // console.log('======>DOCSTD', getDocsTD);
    res.json(getDocsTD);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ ГЕТ ТЕСТДРАЙВ');
    res.sendStatus(500);
  }
});

lkRoute.get('/docTO', async (req, res) => {
  const { userId } = req.session;
  try {
    const docsTO = await DocTO.findAll({
      where: { user_id: userId },
      attributes: ['id', 'dateNow', 'dateSelected', 'user_id', 'car_id', 'userScore', 'userComment'],
    });

    const getDocsTO = docsTO.map((el) => el.get({ plain: true }));

    res.json(getDocsTO);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ ГЕТ ТЕСТДРАЙВ');
    res.sendStatus(500);
  }
});

lkRoute.put('/docTD/', async (req, res) => {
  const { userId } = req.session;
  const { formData } = req.body;
  // console.log('LK TD PUT formData', formData);
  try {
    if (userId) {
      const queryDoc = await DocTestDrive.findByPk(formData.id);
      queryDoc.userScore = formData.userScore;
      queryDoc.userComment = formData.userComment;
      await queryDoc.save();

      res.json({
        id: queryDoc.id,
        dateNow: queryDoc.dateNow,
        dateSelected: queryDoc.dateSelected,
        user_id: queryDoc.user_id,
        card_id: queryDoc.card_id,
        userScore: queryDoc.userScore,
        userComment: queryDoc.userComment,
      });
    }
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUTH ДОКУМЕНТА TD');
    res.sendStatus(500);
  }
});

lkRoute.put('/docTO', async (req, res) => {
  const { userId } = req.session;
  const { formData } = req.body;
  // console.log('LK TO PUT formData', formData);
  try {
    if (userId) {
      const queryDoc = await DocTO.findByPk(formData.id);
      queryDoc.userScore = formData.userScore;
      queryDoc.userComment = formData.userComment;
      await queryDoc.save();

      res.json({
        id: queryDoc.id,
        dateNow: queryDoc.dateNow,
        dateSelected: queryDoc.dateSelected,
        user_id: queryDoc.user_id,
        card_id: queryDoc.card_id,
        userScore: queryDoc.userScore,
        userComment: queryDoc.userComment,
      });
    }
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ PUTH LK ДОКУМЕНТА TO');
    res.sendStatus(500);
  }
});

lkRoute.get('/user', async (req, res) => {
  const { userId } = req.session;
  try {
    if (userId) {
      const user = await User.findByPk(userId);
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role_id: user.role_id,
        propType: user.propType,
        persDataArg: user.persDataArg,
      });
    }
  } catch (error) {
    console.log(error, 'ошибка в ручке get user ');
  }
});

lkRoute.put('/user', async (req, res) => {
  const { userId } = req.session;
  const { inputsName, inputsPhone } = req.body;
  // console.log('===req.body PUT USER', req.body);
  try {
    if (userId) {
      const user = await User.findByPk(userId);
      user.name = inputsName;
      user.phone = inputsPhone;
      user.save();
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role_id: user.role_id,
        propType: user.propType,
        persDataArg: user.persDataArg,
      });
    }
  } catch (error) {
    console.log(error, 'Ошибка в ручке put user lk');
    res.sendStatus(500);
  }
});


lkRoute.get('/car', async (req, res) => {
  const { userId } = req.session;
  // console.log('на машины ручка сессия', userId);

  try {
    if (userId) {
      const carsAll = await Cars.findAll({
        where: { user_id: userId },
        attributes: ['id', 'mark', 'model', 'color', 'prodYear', 'gosNum', 'gear', 'engine', 'vin'],
      });
      const resultAllcar = carsAll.map((el) => el.get({ plain: true }));
      console.log(resultAllcar);
      res.json(resultAllcar);
    }
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ GET CARS');
    res.sendStatus(500);
  }
});

lkRoute.put('/car', async (req, res) => {
  const { formData } = req.body;
  const { userId } = req.session;
  try {
    if (userId) {
      const car = await Cars.findByPk(formData.id);
      car.mark = formData.mark;
      car.model = formData.model;
      car.color = formData.color;
      car.prodYear = formData.prodYear;
      car.gosNum = formData.gosNum;
      car.gear = formData.gear;
      car.engine = formData.engine;
      car.vin = formData.vin;
      car.save();
      res.json(car)
    }
  } catch (error) {
    console.log(error, 'ошибка в ручке pur car LK ');
    res.sendStatus(500);
  }
});

lkRoute.post('/car', async (req, res) => {
  const { userId } = req.session;
  const {
   formData
  } = req.body;
  console.log(req.body, '=====reqbody post avto')
  if (userId) {
    const newCar = await Cars.create({
      mark: formData.mark,
      model: formData.model,
      color: formData.color,
      prodYear: formData.prodYear,
      gosNum: formData.gosNum,
      gear: formData.gear,
      engine: formData.engine,
      vin: formData.vin,
      user_id: userId,
      probegTotal: 0,
      ours: false,
      bu: true,
    });
    res.json({
      id: newCar.id,
      mark: newCar.mark,
      model: newCar.model,
      color: newCar.color,
      prodYear: newCar.prodYear,
      gosNum: newCar.gosNum,
      gear: newCar.gear,
      engine: newCar.engine,
      vin: newCar.vin,
    });
  }
});

lkRoute.delete('/car/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  try {
    if (userId) {
      const queryCar = await Cars.destroy({ where: { id, user_id: userId } });
      res.json(id);
    }
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ УДАЛЕНИЯ CAR');
    res.sendStatus(500);
  }
});

module.exports = lkRoute;
