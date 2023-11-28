const { DataTypes} = require('sequelize');
//Modelo de Paquete y documentos
module.exports = (sequelize) => {
    sequelize.define('Package', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      origen: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      destino: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      peso: {
          type: DataTypes.INTEGER,
          allowNull: true,
      },
      dimensiones: {
          type: DataTypes.INTEGER,
          allowNull: true,
      },
      servicios: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      imagen: { // atributo para que el usuario pueda subir una imagen
         type: DataTypes.STRING,
         allowNull: true,
      },
      total: {
          type: DataTypes.INTEGER,
          allowNull: false, // Instrucciones especiales para la entrega.
      },
      total: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "En espera",
      },
      fechaInicial: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('En tránsito', 'Entregado', 'Pendiente'),
        defaultValue: 'Pendiente',
        allowNull: false,
    },
      destinatario: {
        type: DataTypes.STRING,
        allowNull: false,
    },

        }, { freezeTableName: true
    });
}