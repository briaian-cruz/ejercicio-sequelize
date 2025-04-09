const express = require("express");
const router = express.Router();
const Usercontroller = require("../controllers/userController.js");

//GET: Mostrar todos los usuarios
router.get("/usuarios", Usercontroller.index);
//GET: Mostrar un usuario por ID
router.get("/usuarios/:id", Usercontroller.show);
// POST: Crear un nuevo usuario
router.post("/usuarios", Usercontroller.store);
//PATCH: Editar un usuario por ID
router.patch("/usuarios/editar/:id", Usercontroller.update);
//DELETE: Eliminar un usuario por ID
router.delete("/usuarios/eliminar/:id", Usercontroller.destroy);

module.exports = router;
