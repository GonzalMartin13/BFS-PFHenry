const { DataTypes } = require('sequelize');
 //Modelo de quien envia el paquete
module.exports = (sequelize) => {
    sequelize.define('Service', {
        discreto: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
          documento: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
          express: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
          fragil: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
          // Opción para colocar una imagen si el servicio es "fragil"
          fragilImage: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          paquete: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
        }, { freezeTableName: true
    });
}