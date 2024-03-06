require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);


const userRoute = require('./routes/userRoutes');
const lkRoute = require('./routes/lkRoutes');

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

app.use('/api/users', userRoute);
app.use('/api/lk', lkRoute)

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
