const { sequelize } = require("./models");

async function createTable() {
  await sequelize.sync({ force: true });
  console.log("¡Las tablas fueron creadas!");
}

createTable();
