// Middleware para validar que el nombre sea obligatorio
const validarNombre = (req, res, next) => {
    const { nombre } = req.body;

    if (!nombre || nombre.trim() === "") {
        return res.status(400).json({ 
            error: "El campo 'nombre' es obligatorio y no puede estar vacío." 
        });
    }

    next(); // Si todo está bien, continúa
};

module.exports = validarNombre;