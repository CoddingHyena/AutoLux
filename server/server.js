require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const userRoute = require('./routes/userRoutes');
const lkRoute = require('./routes/lkRoutes');
const feedBackRoute = require('./routes/feedBackRoutes');
const adminRoute = require('./routes/adminRoutes');
const managerRoute = require('./routes/managerRoutes');
const bossRoute = require('./routes/bossRoutes');
const testDriveRoute = require('./routes/testDriveRoutes');

const app = express();
const { PORT, SECRET_KEY_SESSION } = process.env;

const sessionConfig = {
  name: 'cookies',
  store: new FileStore(),
  secret: SECRET_KEY_SESSION ?? 'Word',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};
const corsConfig = {
  credentials: true,
  origin: ['http://localhost:5173'],
  optionsSuccesStatus: 200,
};

app.use(cors(corsConfig));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/users', userRoute);
app.use('/api/lk', lkRoute);
app.use('/api/feedBack', feedBackRoute);
app.use('/api/admin', adminRoute);
app.use('/api/manager', managerRoute);
app.use('/api/boss', bossRoute);
app.use('/api/testdrive', testDriveRoute);
app.use('/api/multer', require('./routes/multerRoutes'));
app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
