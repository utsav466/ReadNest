"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import ForgotPassword from "./components/ForgotPassword"
import LandingPage from "./components/LandingPage"
import "./App.css"
import "./Page.css"


function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", status: "Available" },
    { id: 2, title: "1984", author: "George Orwell", genre: "Science Fiction", status: "Borrowed" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", status: "Available" },
  ])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-Password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<Dashboard books={books} setBooks={setBooks} />} />
      </Routes>
    </Router>
  )
}

export default App

