const express = require("express");
const app = express();
const router = express.Router();
const articleController = require("../controllers/articleController");
app.use(express.json());

//GET: Mostrar todos los usuarios
router.get("/article", articleController.index);
//GET: Mostrar un usuario por ID
router.get("/article/:id", articleController.show);
// POST: Crear un nuevo usuario
router.post("/article", articleController.store);
//PATCH: Editar un usuario por ID
router.patch("/article/:id", articleController.update);
//DELETE: Eliminar un usuario por ID
router.delete("/article/:id", articleController.destroy);

module.exports = router;
