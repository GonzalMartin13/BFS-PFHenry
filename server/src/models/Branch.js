const { DataTypes } = require('sequelize');
//Modelo de Ubicación
module.exports = (sequelize) => {
    sequelize.define('Branch', {
        ID: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
      },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          province: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          coordinates: {
            type: DataTypes.JSON, // Coordenadas geográficas (latitud y longitud).
            allowNull: false,
          },
          mapUrl: {
            type: DataTypes.STRING, // URL del mapa o datos para integrar un mapa.
            allowNull: false,
          },
          contactPerson: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          contactEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isEmail: true,
            },
          },
          contactPhone: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          services: {
            type: DataTypes.ARRAY(DataTypes.STRING), // Servicios ofrecidos en esta ubicación (ej. almacenamiento, envío, etc.).
          },
          
    });
}