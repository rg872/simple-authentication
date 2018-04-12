var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller')

/* GET home page. */
router.post('/', userCtrl.register);

module.exports = router;
