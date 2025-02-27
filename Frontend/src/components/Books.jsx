import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState({
    id: null,
    title: "",
    author: "",
    genre: "",
    status: "Available",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  // Helper to get token from localStorage
  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  // Fetch books when component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/books", {
        headers: getAuthHeader(),
      });
      if (response.status === 200) {
        setBooks(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch books:", error);
      setError("Failed to fetch books");
    }
  };

  const openModal = (book = null) => {
    if (book) {
      setCurrentBook(book);
      setIsEditing(true);
    } else {
      setCurrentBook({
        id: null,
        title: "",
        author: "",
        genre: "",
        status: "Available",
      });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentBook({
      id: null,
      title: "",
      author: "",
      genre: "",
      status: "Available",
    });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBook({ ...currentBook, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update an existing book via PUT
        const response = await axios.put(
          `http://localhost:4000/api/books/${currentBook.id}`,
          currentBook,
          { headers: getAuthHeader() }
        );
        
        if (response.status === 200) {
          setBooks(
            books.map((book) =>
              book.id === currentBook.id ? response.data.data : book
            )
          );
        }
      } else {
        // Create a new book via POST
        const response = await axios.post(
          "http://localhost:4000/api/books",
          currentBook,
          { headers: getAuthHeader() }
        );
        if (response.status === 201) {
          setBooks([...books, response.data.data]);
        }
      }
      closeModal();
    } catch (error) {
      console.error("Error saving book:", error);
      setError("Error saving book");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/books/${id}`,
          { headers: getAuthHeader() }
        );
        if (response.status === 200) {
          setBooks(books.filter((book) => book.id !== id));
        }
      } catch (error) {
        console.error("Error deleting book:", error);
        setError("Error deleting book");
      }
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Book Management</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="search-container">
        <input
          className="bookSearch"
          type="text"
          placeholder="Search by title, author, or genre"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>
                  <span className={`status-badge ${book.status.toLowerCase()}`}>
                    {book.status}
                  </span>
                </td>
                <td>
                  <button className="action-button" onClick={() => openModal(book)}>
                    <FaEdit />
                  </button>
                  <button
                    className="action-button"
                    onClick={() => handleDelete(book.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="actions">
        <button onClick={() => openModal()}>
          <FaPlus /> Add New Book
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{isEditing ? "Edit Book" : "Add New Book"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={currentBook.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={currentBook.author}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  value={currentBook.genre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={currentBook.status}
                  onChange={handleInputChange}
                >
                  <option value="Available">Available</option>
                  <option value="Borrowed">Borrowed</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="submit">
                  {isEditing ? "Save Changes" : "Add Book"}
                </button>
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
