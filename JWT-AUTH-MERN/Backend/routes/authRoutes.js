const express = require('express');
const { register, login, refresh, logout, getUser } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refreshtoken', refresh);
router.post('/logout', logout);
router.get('/profile', authMiddleware, getUser);

module.exports = router;
