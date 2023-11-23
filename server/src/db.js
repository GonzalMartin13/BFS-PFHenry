require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");
const path = require("path");
const fs = require("fs");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/BFS`,
	
	{
		logging: false,
		native: false,
		dialectModule: pg,
	}
);

const basename = path.basename(__filename);

// Lectura y carga dinámica de modelos desde la carpeta 'models'
const modelDefiners = [];

//usamos filesystem para extraer de la carpeta models el nombre de cada modelo y pushearlo al array modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos que estan en el Array modelDefiners
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {User, Shipment, Receive, Package, Branch} = sequelize.models;
//Relación de uno a uno
Shipment.hasOne(Receive, {foreignKey: "shipmentId"}); // Un envio a un recibido
Receive.belongsTo(Shipment, {foreignKey: "receiveId"}); // Un recibido "recibe" un envio

//Relacion de uno a muchos
User.hasMany(Shipment, {foreignKey: "userId"}); // un usuario hace muchos envios
Shipment.belongsTo(User, {foreignKey: "userId"}); // Muchis envios pertenecen a un usuario

//Relacion de uno a muchos
Shipment.hasMany(Package, {foreignKey: "shipmentId"}); // En un envio puede tener muchos paquetes
Package.belongsTo(Shipment, {foreignKey: "packageId"}); // Muchos paquetes pertenecen a un envio

//Relacion de uno a muchos
Branch.hasMany(Shipment, {foreignKey: "branchId"}); // Una sucursal recibe muchos envios
Shipment.belongsTo(Branch, {foreignKey: "shipmentId"}); // Muchos envios llegaran a una sucursal

// Relación de muchos a muchos
User.belongsToMany(Branch, { through: 'User_Branch' }); // Muchos usuarios pueden enviar paquetes a muchas sucursales
Branch.belongsToMany(User, { through: 'User_Branch' }); // Muchas sucursales reciben envios de muchos usuarios



module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { pool } = require('./db.js');
  };
