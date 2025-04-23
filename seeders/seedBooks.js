// Seeder pour insérer des livres fake directement dans la base de données avec Sequelize
// Exécution : node seeders/seedBooksToDB.js

const { faker } = require("@faker-js/faker");
const { Book } = require("../models"); // Adapte le chemin si besoin

const books = [];
for (let i = 0; i < 20; i++) {
  books.push({
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
    description: faker.lorem.paragraph(),
    publishedYear: faker.date.past({ years: 30 }).getFullYear(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

(async () => {
  try {
    await Book.bulkCreate(books);
    console.log("20 livres fake ont été insérés dans la base de données.");
  } catch (error) {
    console.error("Erreur lors de l'insertion :", error);
  } finally {
    process.exit();
  }
})();
