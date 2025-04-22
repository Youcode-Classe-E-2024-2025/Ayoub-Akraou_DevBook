"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("à lire", "en cours", "lu"),
        defaultValue: "à lire",
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );

  Book.associate = function (models) {
    Book.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category",
    });
  };

  return Book;
};
