/*
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 * En este ejemplo se están insertando 500 artículos con textos ficticios.
 */

const faker = require("@faker-js/faker").fakerES;
const { Article } = require("../models/models.js");
const { User } = require("../models/models.js");

module.exports = async () => {
  const users = await User.findAll();
  const articles = [];

  for (let i = 0; i < 500; i++) {
    const userId = users[Math.floor(Math.random() * users.length)].id;
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.sentence(15),
      userId: userId,
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
