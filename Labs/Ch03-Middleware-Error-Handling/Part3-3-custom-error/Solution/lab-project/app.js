var express = require('express');

const expressPromiseRouter = require("express-promise-router");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const Promise = require("bluebird");
const customErrors = require("./custom-errors");

var moment = require('moment');
var index = require('./routes/index.js');
var users = require('./routes/users.js');
var students = require('./routes/students.js');

let app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* All routers and middlewares are wrapped into an express-promise-router to
   make sure that error handling is consistent throughout the application. */
let router = expressPromiseRouter();

   

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));

const unhandledError = require("unhandled-error");

let errorReporter = unhandledError((err) => {
	/* This should eventually be hooked into some sort of error reporting
	   mechanism. SMS text nessaging....etc. bug */
	console.error("UNHANDLED ERROR:", err.stack);
});

/* The 'state' object is an object that we pass to everything that needs some
   sort of stateful dependency; all of the stateful dependencies are initialized
   here in server.js, and then passed into the modules that need them using a
   wrapper function. The wrapper function can unpack the stateful dependencies
   that it needs, eg. using object destructuring. */
   let state = {
     errorReporter: errorReporter
   }


router.use(function (req, res, next) {
  console.log(`Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}  `);
  next();
});


//router.use(index);
app.use('/',index);
app.use('/users',users);
app.use('/students',students);




// catch 404 and forward to error handler
router.use(function(req, res, next) {
  let err = new Error('Oh no! the page cannot be found');
  err.status = 404;
  req.timestamp = new Date();
  next(err);
});

app.use('/',router);
app.use(require("./middleware/error-handler")(state));

module.exports = app;

// app.listen(3000, () => {
// 	console.log(`Listening on port 3000...`);
// });