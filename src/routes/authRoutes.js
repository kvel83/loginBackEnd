const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/usuarios', authController.register);
router.post('/login', authController.login);

module.exports = router;