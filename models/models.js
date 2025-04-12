const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);
class Article extends Model {}
Article.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    author: DataTypes.STRING,
  },
  { sequelize, modelName: "article" }
);
class User extends Model {}
User.init(
  {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);
module.exports = { sequelize, User, Article };
