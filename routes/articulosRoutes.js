const express = require("express");
const router = express.Router();
const articuloController = require("../controllers/ArticuloController");

//GET: Mostrar todos los usuarios
router.get("/Articulo", articuloController.index);
//GET: Mostrar un usuario por ID
router.get("/Articulo/:id", articuloController.show);
// POST: Crear un nuevo usuario
router.post("/Articulo", articuloController.store);
//PATCH: Editar un usuario por ID
router.patch("/Articulo/editar/:id", articuloController.update);
//DELETE: Eliminar un usuario por ID
router.delete("/Articulo/eliminar/:id", articuloController.destroy);

module.exports = router;
