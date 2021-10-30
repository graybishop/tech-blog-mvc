const express = require('express');
const expressHandlebars  = require('express-handlebars');
const path = require('path');
const logger = require('morgan');
const createError = require('http-errors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/api/users');

const app = express();
const port = process.env.PORT || '3001'

// view engine setup
app.engine('hbs', expressHandlebars())
app.set('view engine', 'hbs'); //FIXME

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.listen(port, ()=>{
  console.log(`listening on http://localhost:3001/`)
})

module.exports = app;
