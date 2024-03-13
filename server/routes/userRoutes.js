const userRoute = require('express').Router();
const bcrypt = require('bcrypt');

const { User, Role } = require('../db/models');

function getRoleName2(roleId) {
  if (roleId === 1) {
    return 'accessUser';
  }
  if (roleId === 2) {
    return 'accessAdmin';
  }
  if (roleId === 3) {
    return 'accessManager';
  }
  if (roleId === 4) {
    return 'accessBoss';
  }
  return 'none';
}

userRoute.get('/checkSession', async (req, res) => {
  const { userId, name, email, roleId, phone } = req.session;
  const role = getRoleName2(roleId);

  res.json({ id: userId, name, email, role, phone });
});

function getRoleName(role) {
  if (role.accessUser) {
    return 'accessUser';
  }
  if (role.accessAdmin) {
    return 'accessAdmin';
  }
  if (role.accessManager) {
    return 'accessManager';
  }
  if (role.accessBoss) {
    return 'accessBoss';
  }
  return 'Unknown Role';
}

userRoute.post('/reg', async (req, res) => {
  try {
    const { name, email, password, persDataAgrBool } = req.body;

    console.log(req.body);

    const user = await User.findOne({ where: { email } });
    if (user) {
      res.sendStatus(403);
    }
    if (!email.includes('@')) {
      res.sendStatus(405);
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hash,
        role_id: 1,
        propType: true,
        persDataAgr: persDataAgrBool,
      });
      req.session.name = newUser.name;
      req.session.email = newUser.email;
      req.session.userId = newUser.id;
      req.session.roleId = newUser.role_id;
      console.log('req.sessions====>', req.session);

      req.session.save(() => {
        console.log('Зарегистрировался!');
      });
      const userWithRole = await User.findOne({
        where: { email },
        include: [
          {
            model: Role,
            where: { id: newUser.role_id },
          },
        ],
      });

      const roleName = getRoleName(userWithRole.Role);

      res.status(201).json({
        id: userWithRole.id,
        name: userWithRole.name,
        email: userWithRole.email,
        role: roleName,
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
        req.session.roleId = reqUser.role_id;
        req.session.phone = reqUser.phone;
        req.session.save(() => {
          console.log(reqUser.id, reqUser.name, reqUser.email, 'Зашел!');
        });
        const userWithRole = await User.findOne({
          where: { email },
          include: [
            {
              model: Role,
              where: { id: reqUser.role_id },
            },
          ],
        });

        const roleName = getRoleName(userWithRole.Role);

        res.status(201).json({
          id: userWithRole.id,
          name: userWithRole.name,
          email: userWithRole.email,
          role: roleName,
          phone: userWithRole.phone,
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
