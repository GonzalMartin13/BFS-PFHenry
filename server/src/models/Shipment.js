const { DataTypes } = require('sequelize');
 //Modelo de quien envia el paquete
module.exports = (sequelize) => {
    sequelize.define('Shipment', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        dni: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
        status: {
            type: DataTypes.ENUM('En tránsito', 'Entregado', 'Pendiente'),
            defaultValue: 'Pendiente',
        },
        estimatedDeliveryDate: {
            type: DataTypes.DATE,
        },
        }, { freezeTableName: true
    });
}