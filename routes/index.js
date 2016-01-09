var express = require('express');
var router = express.Router();

var config = require('../config.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    name: config.name,
    address: config.address
  });
});

module.exports = router;
