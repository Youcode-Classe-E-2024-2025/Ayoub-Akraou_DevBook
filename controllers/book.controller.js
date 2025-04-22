const { Book, Category } = require("../models");

module.exports = {
  // GET /books
  async index(req, res) {
    try {
      const books = await Book.findAll({ include: ["category"] });
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  // GET /books/:id
  async show(req, res) {
    try {
      const book = await Book.findByPk(req.params.id, {
        include: ["category"],
      });
      if (!book) return res.status(404).json({ error: "Livre non trouvé" });
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  // POST /books
  async store(req, res) {
    try {
      const { title, author, status, categoryId } = req.body;
      const book = await Book.create({ title, author, status, categoryId });
      res.status(201).json(book);
    } catch (err) {
      res.status(400).json({ error: "Erreur lors de la création du livre" });
    }
  },

  // PUT /books/:id
  async update(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);
      if (!book) return res.status(404).json({ error: "Livre non trouvé" });

      await book.update(req.body);
      res.status(200).json(book);
    } catch (err) {
      res.status(400).json({ error: "Erreur lors de la mise à jour" });
    }
  },

  // DELETE /books/:id
  async destroy(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);
      if (!book) return res.status(404).json({ error: "Livre non trouvé" });

      await book.destroy();
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  },
};
