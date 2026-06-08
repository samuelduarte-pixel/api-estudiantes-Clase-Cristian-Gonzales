// Middleware para registrar la actividad de la API en la consola
const logs = (req, res, next) => {
    const fecha = new Date().toISOString().replace('T', ' ').substring(0, 19);
    console.log(`${req.method} - ${req.url} - ${fecha}`); // Ejemplo: GET - /estudiantes - 2026-06-08 15:10
    next(); // Permite que la petición continúe a la ruta o al siguiente middleware
};

module.exports = logs;