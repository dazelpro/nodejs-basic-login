const router = require('express').Router();
const homeController = require('../controllers').home;
const verifyUser = require('../configs/verify');

router.get('/', verifyUser.isLogin, homeController.home);

module.exports = router;