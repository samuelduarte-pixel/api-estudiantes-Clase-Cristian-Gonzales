const express = require('express');
const router = express.Router();

// Importamos los middlewares de validación locales
const validarNombre = require('../middlewares/validarNombre');
const validarCorreo = require('../middlewares/validarCorreo');
const validarEdad = require('../middlewares/validarEdad');

// Base de datos ficticia en memoria (Arreglo JavaScript)
let estudiantes = [
    { id: 1, nombre: "Erik Crespo", correo: "erik@correo.com", edad: 20 },
    { id: 2, nombre: "Franky", correo: "franky@correo.com", edad: 22 }
];

// 1. GET /estudiantes - Listar todos los estudiantes
router.get('/', (req, res) => {
    res.status(200).json(estudiantes);
});

// 2. POST /estudiantes - Crear un estudiante (AQUÍ SE APLICAN LOS MIDDLEWARES)
router.post('/', [validarNombre, validarCorreo, validarEdad], (req, res) => {
    const { nombre, correo, edad } = req.body;
    
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre,
        correo,
        edad
    };
    
    estudiantes.push(nuevoEstudiante);
    res.status(201).json({
        mensaje: "Estudiante creado con éxito",
        estudiante: nuevoEstudiante
    });
});

// 3. PUT /estudiantes/:id - Actualizar un estudiante por ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, correo, edad } = req.body;
    
    const estudiante = estudiantes.find(e => e.id === id);
    
    if (!estudiante) {
        return res.status(404).json({ error: "Estudiante no encontrado." });
    }
    
    if (nombre) estudiante.nombre = nombre;
    if (correo) estudiante.correo = correo;
    if (edad) estudiante.edad = edad;
    
    res.status(200).json({
        mensaje: "Estudiante actualizado con éxito",
        estudiante
    });
});

// 4. DELETE /estudiantes/:id - Eliminar un estudiante por ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = estudiantes.findIndex(e => e.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: "Estudiante no encontrado." });
    }
    
    estudiantes.splice(index, 1);
    res.status(200).json({ mensaje: "Estudiante eliminado correctamente." });
});

module.exports = router;