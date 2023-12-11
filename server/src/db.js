require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");
const path = require("path");
const fs = require("fs");

const { DB_USER, DB_PASSWORD, DB_HOST, DEPLOY_URL } = process.env;

/* const sequelize = new Sequelize(DEPLOY_URL,

	{
		logging: false,
		native: false,
		dialectModule: pg,
	}

);   */
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

const {User, Package, Admin, Review} = sequelize.models;

//----------------Relacion de Uno A Muchos --------------------------------
User.hasMany(Package); // un usuario hace muchos envios
Package.belongsTo(User); // Muchis envios pertenecen a un usuario

User.hasMany(Review); // un usuario hace muchos comentarios
Review.belongsTo(User); // un cometario solo lo hace un Usuario

//  ---------------->  Relacion de muchos A Muchos <-----------------------

User.belongsToMany(Admin, { through: 'User_Admin' }); // Muchos usuarios pueden enviar paquetes a muchas sucursales
Admin.belongsToMany(User, { through: 'User_Admin' }); // Muchas sucursales reciben envios de muchos usuarios

//console.log(sequelize.models);

module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { pool } = require('./db.js');
  };

