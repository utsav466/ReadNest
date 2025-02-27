"use client"

import { useState, useMemo } from "react"
import { FaHome, FaBook, FaUsers, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa"
import { Link, Routes, Route } from "react-router-dom"
import Books from "./Books"
import Users from "./Users"
import Settings from "./Settings"
import "../Dashboard.css"

const Dashboard = ({ books, setBooks, firstName }) => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const stats = useMemo(() => {
    const availableBooks = books.filter((book) => book.status === "Available").length
    const borrowedBooks = books.filter((book) => book.status === "Borrowed").length
    const returnedBooks = books.filter((book) => book.status === "Returned").length
    const unreturnedBooks = borrowedBooks

    return {
      availableBooks,
      returnedBooks,
      unreturnedBooks,
      borrowedBooks,
    }
  }, [books])

  return (
    <div className="dashboard">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/dashboard">
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/books">
              <FaBook /> Books
            </Link>
          </li>
          <li>
            <Link to="/dashboard/users">
              <FaUsers /> Users
            </Link>
          </li>
          <li>
            <Link to="/dashboard/settings">
              <FaCog /> Settings
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="dashboard-home">
                <h1 className="dashboard-title">Welcome to dashboard</h1>
                <h2 className="dashboard-greeting">Hi, {firstName} GoodMorning</h2>

                <div className="stats-container">
                  <div className="stats-card primary">
                    <div className="stats-content">
                      <span className="stats-number1">{stats.availableBooks}</span>
                      <span className="stats-icon">
                        <FaBook />
                      </span>
                    </div>
                    <h3 className="stats-label1">Available Books</h3>
                  </div>

                  <div className="stats-grid">
                    <div className="stats-card secondary">
                      <span className="stats-number">{stats.returnedBooks}</span>
                      <h3 className="stats-label">Returned Books</h3>
                    </div>

                    <div className="stats-card secondary">
                      <span className="stats-number">{stats.unreturnedBooks}</span>
                      <h3 className="stats-label">UnReturned Books</h3>
                    </div>

                    <div className="stats-card secondary">
                      <span className="stats-number">{stats.borrowedBooks}</span>
                      <h3 className="stats-label">Borrowed Books</h3>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/books" element={<Books books={books} setBooks={setBooks} />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard;

