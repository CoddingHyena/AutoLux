const { Router } = require('express');
const fileMiddleware = require('../midlewares/file');

const router = Router();

const { AutoOptionsModel, AutoOptionsComplect, AutoOptionsColor } = require('../db/models');

router.post('/avtoOptionsModel', fileMiddleware.single('IMG'), async (req, res) => {
  const { modelName, price } = req.body;
  try {
    if (req.file) {
      const newAvtoOptions = await AutoOptionsModel.create({
        modelName: modelName || 'без имени',
        price: price || 0,
        photo: req.file.filename,
      });

      const fullPath = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
      res.json({ path: fullPath });
    }
  } catch (error) {
    console.log(error, 'ФФатальная ошибка в ручке post multer add model');
    res.status(500).json({
      error: 'ошибка загрузки файла',
    });
  }
});

router.post('/avtoOptionsComplect', fileMiddleware.single('IMG'), async (req, res) => {

  const {modelId, complectName, price } = req.body;
  try {
    if (req.file) {
      const newComplect = await AutoOptionsComplect.create({
        model_id: +modelId,
        complectationName: complectName || 'без имени',
        price: price || 0,
        photo: req.file.filename,
      });

      const fullPath = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
      res.json({ path: fullPath });
    }
  } catch (error) {
    console.log(error, 'ФФатальная ошибка в ручке post multer add complectations');
    res.status(500).json({
      error: 'ошибка загрузки файла',
    });
  }
});


router.post('/avtoOptionsColor', fileMiddleware.single('IMG'), async (req, res) => {
  const {modId, colorName, price } = req.body;
 
  try {
    if (req.file) {
      const newComplect = await AutoOptionsColor.create({
        model_id: +modId,
        colorName: colorName || 'без имени',
        price: price || 0,
        photo: req.file.filename,
      });

      const fullPath = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
      res.json({ path: fullPath });
    }
  } catch (error) {
    console.log(error, 'ФФатальная ошибка в ручке post multer add color');
    res.status(500).json({
      error: 'ошибка загрузки файла',
    });
  }
});

module.exports = router;
