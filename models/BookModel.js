import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Category from "./CategoryModel.js";

const { DataTypes } = Sequelize;

const Book = db.define(
  "book",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING,
    release_year: DataTypes.INTEGER,
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
    category_id: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Book.belongsTo(Category, { foreignKey: "category_id" });

export default Book;

(async () => {
  await db.sync();
})();
