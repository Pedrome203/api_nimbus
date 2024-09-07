const { Sequelize } = require('sequelize');
const fs = require('fs');
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

// Conexión a la base de datos usando las variables de entorno
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERDB, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync(process.env.SSL_CERT_PATH)
        }
    }
});

// Verificar la conexión
sequelize.authenticate()
    .then(() => console.log('Conexión establecida con éxito.'))
    .catch(err => console.error('No se pudo conectar a la base de datos:', err));

module.exports = sequelize;
