const router = require('express').Router();
const registerController = require('../controllers').register;
const verifyUser = require('../configs/verify');

router.get('/', verifyUser.isLogout, registerController.formRegister);
router.post('/save', verifyUser.isLogout, registerController.saveRegister);

module.exports = router;