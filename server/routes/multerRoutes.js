const { Router } = require('express');
const fileMiddleware = require('../midlewares/file');

const router = Router();

router.post('/', fileMiddleware.single('IMG'), (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
    console.log(error, 'ФФатальная ошибка в ручке post multer');
  }
});

module.exports = router;
