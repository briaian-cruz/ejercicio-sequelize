const { User } = require("../models/models.js");
const UserController = {
  index: async (req, res) => {
    try {
      const results = await User.findAll();
      res.json(results);
    } catch (error) {
      console.error("error al obtener usuarios", error);
    }
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      const results = await User.findByPk(id);
      return res.json(results);
    } catch (error) {
      console.error("Error al obtener usuarios", error);
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, mail, password } = req.body;
      const results = await User.create({
        firstname,
        lastname,
        mail,
        password,
      });
      return res.json(results);
    } catch (error) {
      console.error("Error al crear usuario", error);
      res.send("Error al crear usuario");
    }
  },

  destroy: async (req, res) => {
    try {
      const results = await User.destroy({ where: { id: req.params.id } });
      return res.json(results);
    } catch (error) {
      console.error("Error al eliminar usuario", error);
    }
  }, //permite destruir algo en la base de datos

  update: async (req, res) => {
    try {
      const results = await User.update(req.body, {
        where: { id: req.params.id },
      });
      return res.json(results);
    } catch (error) {
      console.error("Error al editar usuario", error);
    }
  }, // permite actualizar algo que ya existe
};

module.exports = UserController;
