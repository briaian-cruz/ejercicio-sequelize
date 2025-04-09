const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("ejercicio_users_db", "root", "root", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
  logging: false,
});

class User extends Model {}
User.init(
  {
    firsname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);

User.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  },
  { sequelize, modelName: "user" }
);
module.exports = { sequelize };
