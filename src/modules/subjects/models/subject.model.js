const { DataTypes } = require('sequelize');
const sequelize = require('../../../core/database/sequelize');

const Subject = sequelize.define('Subject', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    credits: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    tableName: 'subjects',
    timestamps: false
});

module.exports = Subject;