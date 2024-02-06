import Book from "../models/BookModel.js";
import Category from "../models/CategoryModel.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: {
        model: Category,
        as: "category",
      },
    });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const response = await Book.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createBook = async (req, res) => {
  console.log(req);
  try {
    await Book.create(req.body);
    res.status(201).json({ msg: "Book Created" });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    await Book.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Book Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Book Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBookCategory = async (req, res) => {
  const data = await Book.findAll({
    include: [
      {
        model: Category,
        as: "category",
      },
    ],
    where: { id: req.params.id },
  });
};
