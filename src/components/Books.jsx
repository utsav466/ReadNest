import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Books = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', status: 'Available' },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Science Fiction', status: 'Borrowed' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', status: 'Available' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState({ id: null, title: '', author: '', genre: '', status: 'Available' });
  const [isEditing, setIsEditing] = useState(false);

  const openModal = (book = null) => {
    if (book) {
      setCurrentBook(book);
      setIsEditing(true);
    } else {
      setCurrentBook({ id: null, title: '', author: '', genre: '', status: 'Available' });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentBook({ id: null, title: '', author: '', genre: '', status: 'Available' });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBook({ ...currentBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setBooks(books.map(book => book.id === currentBook.id ? currentBook : book));
    } else {
      setBooks([...books, { ...currentBook, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  return (
    <div>
      <h1>Book Management</h1>
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
            {books.map((book) => (
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
                  <button className="action-button" onClick={() => handleDelete(book.id)}>
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
            <h2>{isEditing ? 'Edit Book' : 'Add New Book'}</h2>
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
                <button type="submit">{isEditing ? 'Save Changes' : 'Add Book'}</button>
                <button type="button" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
