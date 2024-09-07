const sequelize = require('./database/sequelize'); // Importa tu configuración de Sequelize


// Importar los modelos antes de sincronizar
require('../modules/students/models/student.model');
require('../modules/subjects/models/subject.model');


// Sincronizar los modelos con la base de datos
sequelize.sync({ alter: true })  // Usa { force: true } para eliminar y recrear tablas si es necesario.
    .then(() => {
        console.log('Modelos sincronizados con la base de datos.');
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
    });
