const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;
const cron = require("node-cron");
const actualizarEstado = require("./src/utils/actualizadorDeEstado.js");

const task = cron.schedule("0 14  * * *", () => {
  actualizarEstado();
  console.log("Estados actualizados");
});

conn.sync({ force: false }).then(() => {
  server.listen({ port }, () => {
    console.log(`server conectado a base de datos, puerto ojete ${port}`);
  });
});
