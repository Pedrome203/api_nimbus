const { Sequelize } = require('sequelize');
const fs = require('fs');


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); // Cargar variables desde .env solo si no es producción
}


const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USERDB,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                ca: process.env.SSL_CERT_PATH ? fs.readFileSync(process.env.SSL_CERT_PATH) : undefined
            }
        }
    }
);

// Verificar la conexión
sequelize.authenticate()
    .then(() => console.log('Conexión establecida con éxito.'))
    .catch(err => console.error('No se pudo conectar a la base de datos:', err));

module.exports = sequelize;
