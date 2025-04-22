const { Category } = require("../models");

module.exports = {
  // GET /categories
  async index(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  // GET /categories/:id
  async show(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category)
        return res.status(404).json({ error: "Catégorie non trouvée" });
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  // POST /categories
  async store(req, res) {
    try {
      const category = await Category.create({ name: req.body.name });
      res.status(201).json(category);
    } catch (err) {
      res
        .status(400)
        .json({ error: "Données invalides ou catégorie existante" });
    }
  },

  // PUT /categories/:id
  async update(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category)
        return res.status(404).json({ error: "Catégorie non trouvée" });

      await category.update({ name: req.body.name });
      res.status(200).json(category);
    } catch (err) {
      res.status(400).json({ error: "Erreur lors de la mise à jour" });
    }
  },

  // DELETE /categories/:id
  async destroy(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category)
        return res.status(404).json({ error: "Catégorie non trouvée" });

      await category.destroy();
      res.status(204).send(); // convention REST = 204 No Content
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  },
};
