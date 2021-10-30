const express = require('express');
const expressHandlebars  = require('express-handlebars');
const path = require('path');
const logger = require('morgan');
// eslint-disable-next-line no-unused-vars
const createError = require('http-errors');
const indexRouter = require('./routes/index');

const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const app = express();
const port = process.env.PORT || '3001'

// view engine setup
app.engine('hbs', expressHandlebars())
app.set('view engine', 'hbs'); //FIXME

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use('/', indexRouter);

// catch 404 and forward to error handler
const init = async () => {
  await sequelize.sync({ force: false })
  app.listen(port, ()=>{
    console.log(`listening on http://localhost:3001/`)
  })
}

init()


module.exports = app;
