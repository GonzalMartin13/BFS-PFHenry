const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;

<<<<<<< HEAD
conn
.sync({ force: true })
.then(() => {
	server.listen(3001, () => {
		console.log(`server conectado a base de datos, puerto ojete ${port}`);
	});
})
=======
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log(`server conectado a base de datos, puerto ojete ${port}`);
  });
});
>>>>>>> 76f273b753ebde86224ef0cd17aeffd9429fa9f7
