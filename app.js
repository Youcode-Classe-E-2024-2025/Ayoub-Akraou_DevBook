const express = require("express");
const app = express();

const userRoutes = require("./routes/user.routes");

// Middleware pour parser les données JSON
app.use(express.json());

// Routes
app.use("/api", userRoutes); // Préfixe /api pour toutes les routes utilisateurs

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
