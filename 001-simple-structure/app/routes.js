var express = require('express');
var path = require('path');
// var app = express(); better will be accept all routers in entire app
var router = express.Router();

module.exports = router;

// app.get change to router.app
router.get('/', function(req, res) {
  //res.send('hello world!');
  res.sendFile(path.join(__dirname, '../views/pages/index.html'));
});
router.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/pages/about.html'));
});