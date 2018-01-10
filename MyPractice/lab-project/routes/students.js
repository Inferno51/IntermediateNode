var express = require('express');
var router = express.Router();

let students = [{
	nameFirst: "Keith",
	nameLast: "Gibson",
	email: "Keith.Gibson@geemail.com"
}, {
	nameFirst: "Jon",
	nameLast: "Pack",
	email: "Jon.Pack@geemail.com",
}, {
	nameFirst: "Bill",
	nameLast: "Katz",
	email: "Bill.Katz@geemail.com",
}, {
  nameFirst: "Erin",
  nameLast: "Pack",
  email: "Erin.Pack@geemail.com"
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('students', {
    title: 'Students',
    students: students
  });
});

module.exports = router;
