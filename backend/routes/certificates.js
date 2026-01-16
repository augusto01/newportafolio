const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const certController = require('../controllers/certController');
const auth = require('../middleware/auth');

router.get('/', certController.getAll);

router.post('/', 
  [
    auth,
    [
      check('titulo', 'El nombre del certificado es obligatorio').not().isEmpty().trim(),
      check('institucion', 'La institución emisora es obligatoria').not().isEmpty().trim()
    ]
  ], 
  certController.create
);

router.delete('/:id', auth, certController.delete);

module.exports = router;