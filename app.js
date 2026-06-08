const express = require('express');
const app = express();
const PORT = 3000;

// Importar el middleware global de logs
const logs = require('./middlewares/logs');

// Importar las rutas de estudiantes
const rutasEstudiantes = require('./routes/estudiantes');

// 1. Middleware nativo de Express para entender datos en formato JSON
app.use(express.json());

// 2. Middleware GLOBAL para registrar los logs en la consola
app.use(logs);

// 3. Conectar las rutas de la API bajo el prefijo /estudiantes
app.use('/estudiantes', rutasEstudiantes);

// Ruta base de prueba para verificar que el servidor levante
app.get('/', (req, res) => {
    res.send('¡Servidor corriendo y Middleware global de logs activo!');
});

// 4. Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor activo en: http://localhost:${PORT}`);
});