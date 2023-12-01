const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;

conn
.sync({ alter: true })
.then(() => {
	server.listen(3001, () => {
		console.log(`server conectado a base de datos, puerto ojete ${port}`);
	});
})
