//var express = require('express');
//var router = express.Router();
var expressPromiseRouter = require("express-promise-router");
var router = expressPromiseRouter();
const customErrors = require('../custom-errors');

const Promise = require("bluebird");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Manager' });
});

router.get('/login', function(req, res, next) {
  res.render('admin/login');
});

router.post('/login', (req, res, next) => {
  console.log('IN ROUTER POST LOGIN');
  return Promise.try(() => {
      if (req.body.password === "secret") {
      //if it is the correct password, login and set up session
        res.redirect('/students');
        console.log('after redirect');
        res.end();
        return;
      } else {
          throw new customErrors.AuthenticationError("Incorrect password");
       // throw new Error("Incorrect password");
      }
  })
  .catch( next )
});  

module.exports = router;
