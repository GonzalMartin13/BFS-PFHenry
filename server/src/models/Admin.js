const { DataTypes } = require('sequelize');
// Modelo de Usuario Para el registro
module.exports = (sequelize) => {
    sequelize.define('Admin', {
        ID: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        nameAdmin: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        emailAdmin: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        freezeTableName: true
    });
}