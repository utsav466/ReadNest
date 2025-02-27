import { Book } from "../models/Book.js";

// Fetch all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).send({ data: books, message: "Successfully fetched books" });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

// Create a new book
const createBook = async (req, res) => {
  try {
    const { title, author, genre, status } = req.body;
    if (!title || !author || !genre) {
      return res.status(400).send({ message: "Title, author, and genre are required" });
    }
    const book = await Book.create({ title, author, genre, status });
    res.status(201).send({ data: book, message: "Successfully created book" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create book" });
  }
};

// Update an existing book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, status } = req.body;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    book.title = title || book.title;
    book.author = author || book.author;
    book.genre = genre || book.genre;
    book.status = status || book.status;
    await book.save();
    res.status(200).send({ data: book, message: "Successfully updated book" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    await book.destroy();
    res.status(200).send({ message: "Successfully deleted book" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};

// Get a single book by ID
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ data: book, message: "Successfully fetched book" });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch book" });
  }
};

export const bookController = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  getBookById,
};
