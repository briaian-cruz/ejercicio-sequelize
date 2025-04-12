const { Article } = require("../models/models.js");

const ArticleController = {
  index: async (req, res) => {
    try {
      const results = await Article.findAll();
      res.json(results);
    } catch (error) {
      console.error("Error al obtener artículos", error);
    }
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      const results = await Article.findByPk(id);
      return res.json(results);
    } catch (error) {
      console.error("Artículo no encontrado:", error);
    }
  },
  store: async (req, res) => {
    try {
      const { title, content, userId } = req.body;
      const results = await Article.create({
        title,
        content,
        userId,
      });
      return res.json(results);
    } catch (error) {
      console.error("Error al crear artículo", error);
    }
  },

  destroy: async (req, res) => {
    try {
      const id = req.params.id;
      const results = await Article.destroy({ where: { id } });
      return res.json(results);
    } catch (error) {
      console.error("Error al eliminar artículo", error);
    }
  }, //permite destruir algo en la base de datos

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const results = await Article.update(req.body, {
        where: { id },
      });
      return res.json(results);
    } catch (error) {
      console.error("Error al editar artículo", error);
    }
  }, // permite actualizar algo que ya existe
};

module.exports = ArticleController;
