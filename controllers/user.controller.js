const { User } = require("../models"); // Assure-toi que le modèle User est correctement importé

class UserController {
  // GET /users : Récupérer tous les utilisateurs
  async index(req, res) {
    try {
      const users = await User.findAll(); // Utilisation directe du modèle User
      return res.status(200).json({
        status: "success",
        data: users,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erreur serveur", error: error.message });
    }
  }

  // GET /users/:id : Récupérer un utilisateur spécifique par ID
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id); // Recherche d'un utilisateur par ID

      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }

      return res.status(200).json({ status: "success", data: user });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erreur serveur", error: error.message });
    }
  }

  // POST /users : Créer un nouvel utilisateur
  async store(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password }); // Création d'un nouvel utilisateur
      return res.status(201).json({ status: "success", data: user });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erreur lors de la création", error: error.message });
    }
  }

  // PUT /users/:id : Mettre à jour un utilisateur par ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const user = await User.findByPk(id); // Recherche de l'utilisateur par ID
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }

      // Mise à jour des informations de l'utilisateur
      const updatedUser = await user.update({ name, email, password });
      return res.status(200).json({ status: "success", data: updatedUser });
    } catch (error) {
      return res.status(500).json({
        message: "Erreur lors de la mise à jour",
        error: error.message,
      });
    }
  }

  // DELETE /users/:id : Supprimer un utilisateur par ID
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id); // Recherche de l'utilisateur par ID

      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }

      // Suppression de l'utilisateur
      await user.destroy();
      return res
        .status(200)
        .json({ status: "success", message: "Utilisateur supprimé" });
    } catch (error) {
      return res.status(500).json({
        message: "Erreur lors de la suppression",
        error: error.message,
      });
    }
  }
}

module.exports = new UserController();
