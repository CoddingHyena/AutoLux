const bossRoutes = require('express').Router();
const { Op } = require('sequelize');

const { DocFeedback } = require('../db/models');

bossRoutes.get('/feedbacks', async (req, res) => {
  const thirtyDaysAgo = new Date(new Date() - 30 * 24 * 60 * 60 * 1000);

  try {
    const feedbacks = await DocFeedback.findAll({
      where: {
        dateNow: {
          [Op.gt]: thirtyDaysAgo,
        },
      },
      attributes: ['id', 'dateNow', 'status'],
    });

    const plainFeedbacks = feedbacks.map((fb) => fb.get({ plain: true }));

    res.status(200).json(plainFeedbacks);
  } catch (error) {
    console.error('Ошибка в эндпоинте boss/feedbacks: ', error);
    res.sendStatus(500);
  }
});

module.exports = bossRoutes;
