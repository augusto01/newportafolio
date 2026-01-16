const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const expController = require('../controllers/experienceController');
const auth = require('../middleware/auth');

router.get('/', expController.getAll);

router.post('/', 
  [
    auth,
    [
      check('puesto', 'El puesto ocupado es obligatorio').not().isEmpty().trim(),
      check('empresa', 'El nombre de la empresa es obligatorio').not().isEmpty().trim(),
      check('fechaInicio', 'La fecha de inicio es requerida').not().isEmpty()
    ]
  ], 
  expController.create
);

router.put('/:id', auth, expController.update);
router.delete('/:id', auth, expController.delete);

module.exports = router;