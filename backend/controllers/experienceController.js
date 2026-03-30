const Experience = require('../models/Experience');
const { validationResult } = require('express-validator');

// @desc    Obtener todas las experiencias activas
exports.getAll = async (req, res) => {
    try {
        // Filtramos por activo: true para respetar la baja lógica
        const experiences = await Experience.find({ activo: true }).sort({ fechaInicio: -1 });
        
        if (experiences.length === 0) {
            return res.status(200).json([]); // Retornamos array vacío si no hay datos
        }

        res.json(experiences);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Error al obtener experiencias' });
    }
};

// @desc    Crear una nueva experiencia
exports.create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ msg: 'Error: Datos obligatorios faltantes', errors: errors.array() });
    }

    try {
        const data = req.body;
        
        // LÓGICA DE CONTROL: Si es trabajo actual, fechaFin debe estar vacía
        if (data.actual) {
            data.fechaFin = ""; 
        }

        const newExp = new Experience(data);
        await newExp.save();
        res.status(201).json({ msg: 'Experiencia agregada correctamente', exp: newExp });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Error al guardar la experiencia' });
    }
};

// @desc    Actualizar experiencia existente
exports.update = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ msg: 'Datos de actualización no válidos', errors: errors.array() });
    }

    try {
        let data = req.body;

        // LÓGICA DE CONTROL: Aseguramos consistencia en la edición
        if (data.actual) {
            data.fechaFin = "";
        }

        let exp = await Experience.findById(req.params.id);
        if (!exp) {
            return res.status(404).json({ msg: 'La experiencia no existe' });
        }

        // Actualizamos usando $set y desactivando validaciones de tipo estrictas si fuera necesario
        exp = await Experience.findByIdAndUpdate(
            req.params.id, 
            { $set: data }, 
            { new: true, runValidators: false } 
        );
        
        res.json({ msg: 'Experiencia actualizada con éxito', exp });
    } catch (err) {
        if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'ID no válido' });
        res.status(500).json({ msg: 'Error al actualizar' });
    }
};

// @desc    Baja Lógica de experiencia
exports.delete = async (req, res) => {
    try {
        let exp = await Experience.findById(req.params.id);
        if (!exp) return res.status(404).json({ msg: 'Registro no encontrado' });

        // Cambiamos el estado a inactivo en lugar de borrar el documento
        exp = await Experience.findByIdAndUpdate(
            req.params.id,
            { $set: { activo: false } }, 
            { new: true }
        );
        
        res.json({ msg: 'Registro marcado como inactivo', exp });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Error al procesar la baja' });
    }
};