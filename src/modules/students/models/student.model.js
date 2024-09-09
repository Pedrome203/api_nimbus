const { DataTypes } = require('sequelize');
const sequelize = require('../../../core/database/sequelize');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    years_old: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_credits: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0  // Valor por defecto
    }
}, {
    tableName: 'students',
    timestamps: false
});

module.exports = Student;
