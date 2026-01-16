const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// @route   GET api/users/profile
// @desc    Obtener mi información (Privado)
router.get('/profile', auth, userController.getProfile);

// @route   PUT api/users/profile
// @desc    Actualizar mi información (Privado)
router.put('/profile', 
  [
    auth,
    [
      check('nombreCompleto', 'El nombre no puede estar vacío').not().isEmpty().trim(),
      check('email', 'Por favor incluye un email válido').isEmail().normalizeEmail()
    ]
  ], 
  userController.updateProfile
);

module.exports = router;