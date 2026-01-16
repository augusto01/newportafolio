const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');

// GET: Público
router.get('/', projectController.getAll);

// POST: Privado + Validaciones
router.post('/', 
  [
    auth,
    [
      check('titulo', 'El título del proyecto es obligatorio').not().isEmpty().trim(),
      check('descripcion', 'La descripción es obligatoria').not().isEmpty().trim(),
      check('tecnologias', 'Debes incluir al menos una tecnología').not().isEmpty()
    ]
  ], 
  projectController.create
);

// PUT: Privado
router.put('/:id', auth, projectController.update);

// DELETE: Privado
router.delete('/:id', auth, projectController.delete);



module.exports = router;