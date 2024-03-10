const lkRoute = require('express').Router();

const {
  DocTestDrive, DocTO, Cars, User,
} = require('../db/models');

lkRoute.get('/DocTestDrive', async (req, res) => {
  const { userId } = req.session;
  console.log(userId, 'тестдрайв рчка гет sessionID');
  try {
    const docsTD = await DocTestDrive.findAll({
      where: { user_id: userId },
      attributes: ['id', 'dateNow', 'user_id', 'car_id', 'userScore', 'userComment'],
    });
    const getDocsTD = docsTD.map((el) => el.get({ plain: true }));
    console.log('======>DOCSTD', getDocsTD);
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
      attributes: ['id', 'dateNow', 'user_id', 'car_id', 'userScore', 'userComment'],
    });

    const getDocsTO = docsTO.map((el) => el.get({ plain: true }));

    res.json(getDocsTO);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ ГЕТ ТЕСТДРАЙВ');
    res.sendStatus(500);
  }
});

lkRoute.put('/TD/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  const { userScore, userComment } = req.body;

  try {
    if (userId) {
      const queryDoc = await DocTestDrive.findByPk(id);
      queryDoc.userScore = userScore;
      queryDoc.userComment = userComment;
      await queryDoc.save();

      res.json({
        id: queryDoc.id,
        dateNow: queryDoc.dateNow,
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

lkRoute.put('/TO', async (req, res) => {
  const { userId } = req.sesion;
  const { formData } = req.body;
  console.log('LK TO PUT formData', formData);
  try {
    if (userId) {
      const queryDoc = await DocTO.findByPk(formData.id);
      queryDoc.userScore = formData.userScore;
      queryDoc.userComment = formData.userComment;
      await queryDoc.save();

      res.json({
        id: queryDoc.id,
        dateNow: queryDoc.dateNow,
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
  console.log('===req.body PUT USER', req.body)
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
// lkRoute.get('/phone', async (req, res) => {
//   const { userId } = req.sesion;
//   try {
//     if (userId) {
//       const phoneNumber = await PhoneNum.findAll({
//         where: { user_id: userId },
//         attributes: ['id', 'phoneNumber'],
//       });
//       const result = phoneNumber.map((el) => el.get({ plain: true }));
//       res.json(result);
//     }
//   } catch (error) {
//     console.log(error, 'ОШИБКА В РУЧКЕ GET PHONE');
//   }
// });

// lkRoute.post('/phone', async (req, res) => {
//   const { userId } = req.session;
//   const { phoneNumber } = req.body;

//   try {
//     if (userId) {
//       const newNum = await PhoneNum.create({ user_id: userId, phoneNumber });
//       res.json({ id: newNum.id, phoneNumber: newNum.phoneNumber });
//     }
//   } catch (error) {
//     console.log(error, 'ОШИБКА В РУЧКЕ POST PHONE');
//     res.sendStatus(500);
//   }
// });

// lkRoute.put('/phone/:id', async (req, res) => {
//   const { userId } = req.session;
//   const { phoneNumber } = req.body;
//   const { id } = req.params;
//   try {
//     if (userId) {
//       const queryNum = await PhoneNum.findByPk(id);
//       if (queryNum.user_id === userId) {
//         queryNum.phoneNumber = phoneNumber;
//         await queryNum.save();
//         res.json({ id: queryNum.id, phoneNumber: queryNum.phoneNumber });
//       }
//     }
//   } catch (error) {
//     console.log(error, 'ОШИБКА В РУЧКЕ PUT PHONE');
//     res.sendStatus(500);
//   }
// });

lkRoute.get('/car', async (req, res) => {
  const { userId } = req.session;
  console.log('на машины ручка сессия', userId);

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

lkRoute.post('/car', async (req, res) => {
  const { userId } = req.session;
  const {
    mark, model, color, prodYear, gosNum, gear, engine, vin,
  } = req.body;
  if (userId) {
    const newCar = await Cars.create({
      mark,
      model,
      color,
      prodYear,
      gosNum,
      gear,
      engine,
      vin,
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
