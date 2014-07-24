var express = require('express');
var router = express.Router();

//adds
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  db.User.findAll({
    include: [{model: db.Task, required: true}]  // innner join
  }).success(function(users){
    res.render('index', { title: 'Express', users: users });
  })
});

module.exports = router;
