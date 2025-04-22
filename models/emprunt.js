"use strict";
module.exports = (sequelize, DataTypes) => {
  const Emprunt = sequelize.define(
    "Emprunt",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      borrowedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      returnedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {}
  );

  Emprunt.associate = function (models) {
    Emprunt.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    Emprunt.belongsTo(models.Book, { foreignKey: "bookId", as: "book" });
  };

  return Emprunt;
};
