const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// login y logout
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;