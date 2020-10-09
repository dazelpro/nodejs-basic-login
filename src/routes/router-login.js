const router = require('express').Router();
const loginController = require('../controllers').login;
const verifyUser = require('../configs/verify');

router.get('/', verifyUser.isLogout, loginController.login);

module.exports = router;