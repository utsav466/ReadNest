"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"
import button from "../image/icon123.svg"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      alert("Passwords don't match!")
      return
    }

    // Get users from local storage
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const userIndex = users.findIndex((u) => u.userEmail === email) 

    if (userIndex === -1) {
      alert("User not found!")
      return
    }

    // Update password
    users[userIndex].userPassword = newPassword // Changed from .password to .userPassword
    localStorage.setItem("users", JSON.stringify(users))

    alert("Password updated successfully!")
    navigate("/")
  }

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
      <div className="forgot-password-form">
        <div className="btnBack">
          <a href="/login"><img src={button} alt="backButton" /></a>
        </div>
        <h1>Change Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-Group">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-Group">
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-Group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="change-password-button">
            Change Password
          </button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default ForgotPassword