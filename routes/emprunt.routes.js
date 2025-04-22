const express = require("express");
const router = express.Router();
const empruntController = require("../controllers/emprunt.controller");

// Routes RESTful pour les emprunts
router.get("/", empruntController.index); // GET /emprunts
router.get("/:id", empruntController.show); // GET /emprunts/:id
router.post("/", empruntController.store); // POST /emprunts
router.put("/:id", empruntController.update); // PUT /emprunts/:id
router.delete("/:id", empruntController.destroy); // DELETE /emprunts/:id

module.exports = router;
