const userRoute = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

userRoute.get('/checkSession', async (req, res) => {
  const { userId, name, email } = req.session;
  res.json({ id: userId, name, email });
});

userRoute.post('/reg', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.sendStatus(403);
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hash, role_id: 1, propType: true, persDataAgr: true });
      req.session.name = newUser.name;
      req.session.email = newUser.email;
      req.session.userId = newUser.id;
      console.log('req.sessions====>', req.session);

      req.session.save(() => {
        console.log('Зарегистрировался!');
        res.status(201).json({ id: newUser.id, name: newUser.name, email: newUser.email });
      });
    }
  } catch (error) {
    console.log('Ошибка registr!', error);
    res.status(500).json({ err: 'ОШИБКА ПРИ РЕГИСТРАЦИИ' });
  }
});

userRoute.post('/log', async (req, res) => {
  try {
    const { email, password } = req.body;
    const reqUser = await User.findOne({ where: { email } });
    if (!reqUser) {
      res.sendStatus(401);
    } else {
      const checkPass = await bcrypt.compare(password, reqUser.password);
      if (checkPass) {
        req.session.name = reqUser.name;
        req.session.email = reqUser.email;
        req.session.userId = reqUser.id;
        req.session.save(() => {
          console.log(reqUser.id, reqUser.name, reqUser.email);
          res.status(200).json({ id: reqUser.id, name: reqUser.name, email: reqUser.email });
        });
      } else {
        res.sendStatus(402);
      }
    }
  } catch (error) {
    console.log(error, 'ОШИБКА ФАТАЛЬНАЯ ПРИ ЛОГИНИЗАЦИИ');
    res.status(500).json({ err: 'ОШИБКА ПРИ ПОПЫТКИ АУТЕФИКАЦИИ' });
  }
});

userRoute.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookies');
    res.sendStatus(200);
  });
});

module.exports = userRoute;
