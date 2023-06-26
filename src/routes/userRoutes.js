const router = require('express').Router();
const { isAuth } = require('../middlewares/authUser');

const userController = require('../controllers/userController');

router.get('/usuarios',isAuth, userController.getUser);

module.exports = router;
