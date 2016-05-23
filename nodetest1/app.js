var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');


// We will be talking to MongoDB and using Monk to do it, and our database is located  at 'localhost:27017/nodetest1'
var mongo = require('mongodb');
var monk  = require('monk');
var db    = monk('localhost:27017/nodetest1');


var routes = require('./routes/index');
var users  = require('./routes/users');

// Instantiates express and assigns app variable to it
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// This tells the app where to find its views
// Tells app to use Jade to render views
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Make our db accessible to our router
app.use(function(req, res, next){
  req.db = db;
  next();
});

// Tells express what route files to use
app.use('/', routes);
app.use('/users', users);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err    = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error:   err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error:   {}
  });
});


// All modules export an object, which can be called elsewhere in the code
module.exports = app;
