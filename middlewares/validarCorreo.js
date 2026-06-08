// Middleware para validar que el correo sea obligatorio y tenga formato correcto
const validarCorreo = (req, res, next) => {
    const { correo } = req.body;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correo || correo.trim() === "") {
        return res.status(400).json({ 
            error: "El campo 'correo' es obligatorio." 
        });
    }

    if (!regexCorreo.test(correo)) {
        return res.status(400).json({ 
            error: "El formato del correo electrónico no es válido." 
        });
    }

    next(); // Si todo está bien, continúa
};

module.exports = validarCorreo;