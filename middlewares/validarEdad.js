// Middleware para validar que el estudiante sea mayor de edad (mínimo 18 años)
const validarEdad = (req, res, next) => {
    const { edad } = req.body;

    if (edad === undefined || edad === null) {
        return res.status(400).json({ 
            error: "El campo 'edad' es obligatorio." 
        });
    }

    if (typeof edad !== 'number' || edad < 18) {
        return res.status(400).json({ 
            error: "El estudiante debe ser mayor de edad (mínimo 18 años)." 
        });
    }

    next(); // Si cumple con la edad, continúa
};

module.exports = validarEdad;