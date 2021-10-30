var express = require('express');
var expressHandlebars  = require('express-handlebars');
var path = require('path');
var logger = require('morgan');
const createError = require('http-errors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var port = process.env.PORT || '3001'

// view engine setup
app.engine('hbs', expressHandlebars())
app.set('view engine', 'hbs'); //FIXME

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.listen(port, ()=>{
  console.log(`listening on http://localhost:3001/`)
})

module.exports = app;
