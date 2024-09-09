const { StudentSubject } = require("../../../core/database/models");
const { success, errors } = require("../../../core/helpers/messages");


module.exports = {


    addSubjectIntoStudent: async (req, res) => {
        try {
            const { id_student, id_subject } = req.body;
            await StudentSubject.create({
                id_student,
                id_subject
            });

            return res.status(success.read.code).json({
                message: success.read.message,
                data: [],
            });

        } catch (error) {
            console.error(error);
            return res.status(errors.errorAddStudent.code).json({
                message: errors.errorAddStudent.message,
                data: []
            });
        }
    },
    removeSubject: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await StudentSubject.destroy({
                where: { id }
            });
            if (deleted) {
                return res.status(success.read.code).json({
                    message: success.read.message,
                    data: id,
                });
            } else {
                return res.status(errors.errorNotFoundSubject.code).json({
                    message: errors.errorNotFoundSubject.message,
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
