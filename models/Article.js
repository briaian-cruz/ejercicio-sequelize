const { Model, DataTypes } = require("sequelize");
class Article extends Model {}
Article.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    author: DataTypes.STRING,
  },
  { sequelize, modelName: "article" }
);

module.exports = Article;
