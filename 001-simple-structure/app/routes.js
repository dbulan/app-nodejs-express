var express = require('express');
var path = require('path');
// var app = express(); better will be accept all routers in entire app
var router = express.Router();

module.exports = router;

// app.get change to router.app
router.get('/', function(req, res) {
  //res.send('hello world!');
  //res.sendFile(path.join(__dirname, '../views/pages/index.html'));
  res.render('pages/home');
});

router.get('/about', function(req, res) {
  var users = [
    { name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/300/300'},
    { name: 'Chris', email: 'chris@scotch.io', avatar: 'http://placekitten.com/400/400'},
    { name: 'Ado', email: 'Ado@scotch.io', avatar: 'http://placekitten.com/500/500'},
    { name: 'Samantha', email: 'Samantha@scotch.io', avatar: 'http://placekitten.com/700/700'}
  ];
  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});