
const { Student, Subject } = require("../../../core/database/models")
const { success, errors } = require("../../../core/helpers/messages");


module.exports = {
    getStudentById: async (req, res) => {
        try {
            const { id } = req.params;

            const student = await Student.findByPk(id, {
                include: [
                    {
                        model: Subject,
                        through: {
                            attributes: ['id'],
                        }
                    }
                ]
            });

            if (student) {
                return res.status(success.read.code).json({
                    message: success.read.message,
                    data: student,
                });
            } else {
                return res.status(errors.errorNotFoundStudent.code).json({
                    message: errors.errorNotFoundStudent.message,
                    data: id,
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(errors.server.code).json({
                message: errors.server.message,
                data: [],
            });
        }
    },



    getAllStudents: async (req, res) => {
        try {
            const students = await Student.findAll();

            return res.status(success.read.code).json({
                message: success.read.message,
                data: students,
            });
        } catch (error) {
            console.error(error);
            return res.status(errors.server.code).json({
                message: errors.server.message,
                data: [],
            });
        }
    },
    addStudent: async (req, res) => {
        try {
            const { name, last_name, years_old } = req.body;
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
            console.error(error);
            return res.status(errors.errorAddStudent.code).json({
                message: errors.errorAddStudent.message,
                data: []
            });
        }
    },
    deleteStudent: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Student.destroy({
                where: { id }
            });
            if (deleted) {
                return res.status(success.successDeleteStudent.code).json({
                    message: success.successDeleteStudent.message,
                    data: id,
                });
            } else {
                return res.status(errors.errorNotFoundStudent.code).json({
                    message: errors.errorNotFoundStudent.message,
                    data: id,
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(errors.server.code).json({
                message: errors.server.message,
                data: id,
            });
        }
    },

    updateStudent: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, last_name, years_old, total_credits } = req.body;
            const updatedStudent = await Student.update({
                name,
                last_name,
                years_old,
                total_credits
            }, {
                where: { id }
            });
            console.log(updatedStudent)
            if (updatedStudent[0] === 1) {
                const student = await Student.findByPk(id);
                return res.status(success.successUpdateStudent.code).json({
                    message: success.successUpdateStudent.message,
                    data: student,
                });
            } else {
                return res.status(errors.errorNotFoundStudent.code).json({
                    message: errors.errorNotFoundStudent.message,
                    data: id,
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(errors.server.code).json({
                message: errors.server.message,
                data: id,
            });
        }
    },
};
