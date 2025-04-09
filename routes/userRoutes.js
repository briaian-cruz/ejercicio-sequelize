const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController.js");

//GET: Mostrar todos los usuarios
router.get("/usuarios", userController.index);
//GET: Mostrar un usuario por ID
router.get("/usuarios/:id", userController.show);
// POST: Crear un nuevo usuario
router.post("/usuarios", userController.store);
//PATCH: Editar un usuario por ID
router.patch("/usuarios/editar/:id", userController.update);
//DELETE: Eliminar un usuario por ID
router.delete("/usuarios/eliminar/:id", userController.destroy);

module.exports = router;
