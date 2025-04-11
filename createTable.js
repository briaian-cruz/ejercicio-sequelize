require("dotenv").config();
const { sequelize } = require("./models/models.js");

async function createTable() {
  await sequelize.sync({ force: true });
  console.log("¡Las tablas fueron creadas!");
}

createTable();
