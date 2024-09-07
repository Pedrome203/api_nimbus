const Student = require("../models/student.model"); // Importa correctamente el modelo sin destructuración
const { success, errors } = require("../../../core/helpers/messages");

module.exports = {
    addStudent: async (req, res) => {
        try {
            const { name, last_name, years_old } = req.body;

            // Crear nuevo estudiante usando Sequelize
            const newStudent = await Student.create({
                name,
                last_name,
                years_old
            });

            return res.status(success.successAddStudent.code).json({
                message: success.successAddStudent.message,
                data: newStudent,
            });

        } catch (error) {
            console.error("Error al agregar estudiante:", error);
            return res.status(errors.errorAddStudent.code).json({
                message: errors.errorAddStudent.message,
                data: []
            });
        }
    },
};
