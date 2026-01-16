const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// @route   POST api/auth/login
router.post('/login', authController.login);

// @route   GET api/auth/user
// Aquí 'auth' es la función middleware y 'authController.getUser' es la función controlador
router.get('/user', auth, authController.getUser);

module.exports = router;