const { DataTypes } = require('sequelize');
//Modelo de quien recibe el envío
module.exports = (sequelize) => { 
    sequelize.define('Receive', {
        ID: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         autoIncrement: true
    },
        nameReceive: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        addressReceive: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cityReceive: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        provinceReceive: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneReceive: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          emailReceive: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
        }, { freezeTableName: true
    });
}