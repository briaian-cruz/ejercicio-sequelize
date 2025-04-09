const ArticuloController = {
  index: async (req, res) => {
    try {
      const results = await Articulo.findAll();
      res.json(results);
    } catch (error) {
      console.error("Error al obtener artículos", error);
    }
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      const results = await Articulo.findByPk(id);
      return res.json(results);
    } catch (error) {
      console.error("Artículo no encontrado:", error);
    }
  },
  store: async (req, res) => {
    try {
      const { title, content, userId } = req.body;
      const results = await Articulo.create({
        title,
        content,
        userId,
      });
      return res.send(results);
    } catch (error) {
      console.error("Error al crear artículo", error);
    }
  },

  destroy: async (req, res) => {
    try {
      const id = req.params.id;
      const results = await Articulo.destroy({ where: { id } });
      return res.json(results);
    } catch (error) {
      console.error("Error al eliminar artículo", error);
    }
  }, //permite destruir algo en la base de datos

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const results = await Articulo.update(req.body, {
        where: { id },
      });
      return res.json(results);
    } catch (error) {
      console.error("Error al editar artículo", error);
    }
  }, // permite actualizar algo que ya existe
};

module.exports = ArticuloController;
