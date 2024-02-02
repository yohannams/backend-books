import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Category from "./CategoryModel.js";

const { DataTypes } = Sequelize;

const Book = db.define(
  "book",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING,
    release_year: {
      type: DataTypes.INTEGER,
      min: 1980,
      max: 2021,
    },
    price: DataTypes.STRING,
    total_page: DataTypes.INTEGER,
    thickness: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      field: "created_at",
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      field: "updated_at",
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Book.hasMany(Category, {
  foreignKey: "id",
  as: "category",
  onDelete: "NO ACTION",
  onUpdate: "CASCADE",
});

Category.belongsTo(Book, { foreignKey: "id", as: "book" });

export default Book;

(async () => {
  await db.sync();
  await Category.sync();
  await Book.sync({ alter: true });
})();
