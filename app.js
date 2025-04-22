const express = require("express");
const app = express();

const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const bookRoutes = require("./routes/book.routes");

// Middleware pour parser les données JSON
app.use(express.json());

// Routes
app.use("/api/users", userRoutes); // Préfixe /api pour toutes les routes utilisateurs
app.use("/api/categories", categoryRoutes); // Préfixe /api pour toutes les routes catégories
app.use("/api/books", bookRoutes); // Préfixe /api pour toutes les routes catégories

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
