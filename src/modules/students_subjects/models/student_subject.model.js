const { DataTypes } = require('sequelize');
const sequelize = require('../../../core/database/sequelize');

const StudentSubject = sequelize.define('StudentSubject', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_student: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'students',  // Nombre de la tabla de estudiantes
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    id_subject: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'subjects',  // Nombre de la tabla de asignaturas
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    tableName: 'students_subjects',  // Nombre de la tabla intermedia
    timestamps: false
});

module.exports = StudentSubject;