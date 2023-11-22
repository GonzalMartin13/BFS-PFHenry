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

Shipment.hasOne(Receive, {foreignKey: "shipmentId"});
Receive.belongsTo(Shipment, {foreignKey: "receiveId"});

User.hasMany(Shipment, {foreignKey: "userId"});
Shipment.belongsTo(User, {foreignKey: "userId"});

Shipment.hasMany(Package, {foreignKey: "shipmentId"});
Package.belongsTo(Shipment, {foreignKey: "packageId"});

Branch.hasMany(Shipment, {foreignKey: "branchId"});
Shipment.belongsTo(Branch, {foreignKey: "shipmentId"});

User.belongsToMany(Branch, { through: 'User_Branch' });
Branch.belongsToMany(User, { through: 'User_Branch' });



module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { pool } = require('./db.js');
  };
