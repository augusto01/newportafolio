const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// @route   GET api/users/profile
// @desc    Obtener mi información (Privado)
router.post('/register', [
  check('username', 'Requerido').not().isEmpty(),
  check('email', 'Email inválido').isEmail(),
  check('password', 'Mínimo 6 caracteres').isLength({ min: 6 })
], userController.register);

router.get('/profile', auth, userController.getProfile);
router.put('/profile', auth, userController.updateProfile);
router.put('/soft-delete', auth, userController.softDeleteProfile);

module.exports = router;