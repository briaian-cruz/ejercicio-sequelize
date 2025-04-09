const express = require("express");
const router = express.Router();
const ArticuloController = require("../controllers/articuloController");

//GET: Mostrar todos los usuarios
router.get("/Articulo", ArticuloController.index);
//GET: Mostrar un usuario por ID
router.get("/Articulo/:id", ArticuloController.show);
// POST: Crear un nuevo usuario
router.post("/Articulo", ArticuloController.store);
//PATCH: Editar un usuario por ID
router.patch("/Articulo/editar/:id", ArticuloController.update);
//DELETE: Eliminar un usuario por ID
router.delete("/Articulo/eliminar/:id", ArticuloController.destroy);

module.exports = router;
