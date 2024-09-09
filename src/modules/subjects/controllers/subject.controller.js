const { Subject } = require("../../../core/database/models");
const { success, errors } = require("../../../core/helpers/messages");

module.exports = {
    getSubjectById: async (req, res) => {
        try {
            const { id } = req.params;
            const subject = await Subject.findByPk(id);
            if (subject) {
                return res.status(success.read.code).json({
                    message: success.read.message,
                    data: subject,
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

    getAllSubjects: async (req, res) => {
        try {
            const subjects = await Subject.findAll();

            return res.status(success.read.code).json({
                message: success.read.message,
                data: subjects,
            });
        } catch (error) {
            console.error(error);
            return res.status(errors.server.code).json({
                message: errors.server.message,
                data: [],
            });
        }
    },

    addSubject: async (req, res) => {
        try {
            const { name, credits } = req.body;
            const newSubject = await Subject.create({
                name,
                credits
            });

            return res.status(success.successAddSubject.code).json({
                message: success.successAddSubject.message,
                data: newSubject,
            });

        } catch (error) {
            console.error(error);
            return res.status(errors.server.code).json({
                message: errors.server.message,
                data: []
            });
        }
    },

    deleteSubject: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Subject.destroy({
                where: { id }
            });
            if (deleted) {
                return res.status(success.successDeleteSubject.code).json({
                    message: success.successDeleteSubject.message,
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

    updateSubject: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, credits } = req.body;

            const updatedSubject = await Subject.update({
                name,
                credits
            }, {
                where: { id }
            });

            if (updatedSubject[0] === 1) {
                const subject = await Subject.findByPk(id);
                return res.status(success.successUpdateSubject.code).json({
                    message: success.successUpdateSubject.message,
                    data: subject,
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
