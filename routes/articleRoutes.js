const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

//GET: Mostrar todos los usuarios
router.get("/article", articleController.index);
//GET: Mostrar un usuario por ID
router.get("/article/:id", articleController.show);
// POST: Crear un nuevo usuario
router.post("/article", articleController.store);
//PATCH: Editar un usuario por ID
router.patch("/article/edit/:id", articleController.update);
//DELETE: Eliminar un usuario por ID
router.delete("/article/delete/:id", articleController.destroy);

module.exports = router;
