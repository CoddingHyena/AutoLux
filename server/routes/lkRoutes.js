const lkRoute = require('express').Router;

const { DocTestDrive, DocTO } = require('../db/models');

lkRoute.get('/DocTestDrive', async (req, res) => {
  const { userId } = req.sesion;
  try {
    const docsTD = await DocTestDrive.findAll({
      where: { user_id: userId },
      atributes: ['id', 'dateNow', 'user_id', 'car_id', 'userScore', 'userComment'],
    });

    const getDocsTD = docsTD.map((el) => el.get({ plain: true }));

    res.json(getDocsTD);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ ГЕТ ТЕСТДРАЙВ');
    res.status(500);
  }
});

lkRoute.get('/DocTO', async (req, res) => {
  const { userId } = req.sesion;
  try {
    const docsTO = await DocTO.findAll({
      where: { user_id: userId },
      atributes: ['id', 'dateNow', 'user_id', 'car_id', 'userScore', 'userComment'],
    });

    const getDocsTO = docsTO.map((el) => el.get({ plain: true }));

    res.json(getDocsTO);
  } catch (error) {
    console.log(error, 'ОШИБКА В РУЧКЕ ГЕТ ТЕСТДРАЙВ');
    res.status(500);
  }
});

lkRoute.putch('/:id/TD', async (req, res) => {
    const {userId} = req.sesion;
    const {id} = req.params;
    const {userScore, userComment} = req.body;

    try {
        if(userId){
            const queryDoc = await  DocTestDrive.findByPk(id);
            queryDoc.userScore: userScore,
            queryDoc.userComment: userComment,
            queryDoc.save()

            res.json({id: queryDoc.id, dateNow: queryDoc.dateNow, user_id: queryDoc.user_id,
                 card_id: queryDoc.card_id, userScore: queryDoc.userScore, userComment: queryDoc.userComment});
        }
    } catch (error) {
        console.log(error, 'ОШИБКА В РУЧКЕ PUTH ДОКУМЕНТА');
        res.status(500);
    }
})

module.exports = lkRoute;
