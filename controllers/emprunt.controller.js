const { Emprunt, User, Book } = require("../models");

module.exports = {
  // GET /emprunts
  async index(req, res) {
    try {
      const emprunts = await Emprunt.findAll({ include: ["user", "book"] });
      res.status(200).json(emprunts);
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  // GET /emprunts/:id
  async show(req, res) {
    try {
      const emprunt = await Emprunt.findByPk(req.params.id, { include: ["user", "book"] });
      if (!emprunt) return res.status(404).json({ error: "Emprunt non trouvé" });
      res.status(200).json(emprunt);
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  // POST /emprunts
  async store(req, res) {
    try {
      const { userId, bookId, borrowedAt, returnedAt } = req.body;
      const emprunt = await Emprunt.create({ userId, bookId, borrowedAt, returnedAt });
      res.status(201).json(emprunt);
    } catch (err) {
      res.status(400).json({ error: "Erreur lors de la création de l'emprunt" });
    }
  },

  // PUT /emprunts/:id
  async update(req, res) {
    try {
      const emprunt = await Emprunt.findByPk(req.params.id);
      if (!emprunt) return res.status(404).json({ error: "Emprunt non trouvé" });
      await emprunt.update(req.body);
      res.status(200).json(emprunt);
    } catch (err) {
      res.status(400).json({ error: "Erreur lors de la mise à jour" });
    }
  },

  // DELETE /emprunts/:id
  async destroy(req, res) {
    try {
      const emprunt = await Emprunt.findByPk(req.params.id);
      if (!emprunt) return res.status(404).json({ error: "Emprunt non trouvé" });
      await emprunt.destroy();
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  },
};
