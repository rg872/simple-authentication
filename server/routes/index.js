var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller')

/* GET home page. */
router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);

module.exports = router;
