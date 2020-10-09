const router = require('express').Router();
const loginController = require('../controllers').login;
const verifyUser = require('../configs/verify');

router.get('/', verifyUser.isLogout, loginController.login);
router.get('/logout', loginController.loginAuth);

router.post('/auth', loginController.loginAuth);

module.exports = router;