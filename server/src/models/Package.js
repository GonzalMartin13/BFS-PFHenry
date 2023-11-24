const { DataTypes } = require('sequelize');
//Modelo de Paquete y documentos
module.exports = (sequelize) => {
    sequelize.define('Package', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

      },
      description: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      weight: {
          type: DataTypes.FLOAT,
          allowNull: false,
      },
      dimensions: {
          type: DataTypes.JSON, // Puede contener datos como altura, anchura, longitud, etc.
          allowNull: false,
      },
      service: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      photoUrl: { // atributo para que el usuario pueda subir una imagen
         type: DataTypes.STRING,
         allowNull: true,
      },
      deliveryInstructions: {
          type: DataTypes.TEXT, // Instrucciones especiales para la entrega.
      },
        }, { freezeTableName: true
    });
}