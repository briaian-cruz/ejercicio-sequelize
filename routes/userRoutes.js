const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../controllers/UserController.js");
app.use(express.json());

//GET: Mostrar todos los usuarios
router.get("/users", userController.index);
//GET: Mostrar un usuario por ID
router.get("/users/:id", userController.show);
// POST: Crear un nuevo usuario
router.post("/users", userController.store);
//PATCH: Editar un usuario por ID
router.patch("/users/:id", userController.update);
//DELETE: Eliminar un usuario por ID
router.delete("/users/:id", userController.destroy);

module.exports = router;
