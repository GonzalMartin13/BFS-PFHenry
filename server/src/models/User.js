const { DataTypes } = require('sequelize');
// Modelo de Usuario Para el registro
module.exports = (sequelize) => {
    sequelize.define('User', {
        ID: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,          
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,         
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        connect: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        }
      }, { freezeTableName: true
    });
}