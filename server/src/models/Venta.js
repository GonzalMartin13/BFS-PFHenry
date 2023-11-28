const { DataTypes } = require('sequelize');
// Modelo de Usuario Para el registro
module.exports = (sequelize) => {
    sequelize.define('Venta', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        hora: {
            type: DataTypes.TIME,
            allowNull: false,
          },
         monto: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        impuesto: {
            type: DataTypes.FLOAT,
            allowNull: true, // Dependiendo de si todos los registros tienen impuestos
          },
      }, { freezeTableName: true
    })
}