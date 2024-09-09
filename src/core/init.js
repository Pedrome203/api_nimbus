const sequelize = require('./database/sequelize'); // Importa tu configuración de Sequelize


require('../modules/students/models/student.model');
require('../modules/subjects/models/subject.model');
require('../modules/students_subjects/models/student_subject.model');

require('./database/models');


const syncDatabaseAndCreateTriggers = async () => {
    try {
        // Sincronizar la base de datos
        await sequelize.sync({ alter: true });

        // Crear trigger para actualizar total_credits después de insertar en students_subjects
        await sequelize.query(`
            CREATE TRIGGER update_total_credits_after_insert
            AFTER INSERT ON students_subjects
            FOR EACH ROW
            BEGIN
                UPDATE students
                SET total_credits = (
                    SELECT IFNULL(SUM(subjects.credits), 0)
                    FROM subjects
                    JOIN students_subjects ON subjects.id = students_subjects.id_subject
                    WHERE students_subjects.id_student = NEW.id_student
                )
                WHERE students.id = NEW.id_student;
            END;
        `);

        // Crear trigger para actualizar total_credits después de eliminar en students_subjects
        await sequelize.query(`
            CREATE TRIGGER update_total_credits_after_delete
            AFTER DELETE ON students_subjects
            FOR EACH ROW
            BEGIN
                UPDATE students
                SET total_credits = (
                    SELECT IFNULL(SUM(subjects.credits), 0)
                    FROM subjects
                    JOIN students_subjects ON subjects.id = students_subjects.id_subject
                    WHERE students_subjects.id_student = OLD.id_student
                )
                WHERE students.id = OLD.id_student;
            END;
        `);

        // Crear trigger para actualizar total_credits después de actualizar créditos en subjects
        await sequelize.query(`
            CREATE TRIGGER update_total_credits_after_update_subject
            AFTER UPDATE ON subjects
            FOR EACH ROW
            BEGIN
                UPDATE students
                SET total_credits = (
                    SELECT IFNULL(SUM(subjects.credits), 0)
                    FROM subjects
                    JOIN students_subjects ON subjects.id = students_subjects.id_subject
                    WHERE students_subjects.id_student IN (
                        SELECT id_student
                        FROM students_subjects
                        WHERE id_subject = NEW.id
                    )
                )
                WHERE students.id IN (
                    SELECT id_student
                    FROM students_subjects
                    WHERE id_subject = NEW.id
                );
            END;
        `);

        console.log('Modelos sincronizados y triggers creados correctamente.');
    } catch (error) {
        console.error('Error al sincronizar la base de datos o crear los triggers:', error);
    }
};


syncDatabaseAndCreateTriggers();

// const sequelize = require('./database/sequelize'); // Configuración de Sequelize

// // Importar los modelos
// require('../modules/students/models/student.model');
// require('../modules/subjects/models/subject.model');
// require('../modules/students_subjects/models/student_subject.model');

// // Importar y definir las relaciones entre los modelos (¡esto es clave!)
// require('./database/models');

// // Sincronizar los modelos con la base de datos
// sequelize.sync({ alter: true })  // Usa { force: true } si deseas eliminar y recrear las tablas
//     .then(() => {
//         console.log('Modelos y relaciones sincronizados con la base de datos.');
//     })
//     .catch(err => {
//         console.error('Error al sincronizar la base de datos:', err);
//     });
