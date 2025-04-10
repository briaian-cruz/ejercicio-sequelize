const { Model, DataTypes } = require("sequelize");
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

module.exports = User;
