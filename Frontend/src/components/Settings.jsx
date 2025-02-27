"use client"

import { useState } from "react"

const Settings = () => {
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const checkUserExists = (email) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    return users.some((user) => user.userEmail === email) // Changed from user.email to user.userEmail
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!checkUserExists(email)) {
      alert("User not found!")
      return
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    // In a real application, you would send this data to your backend
    // Here, we'll simulate updating the password by storing it in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const updatedUsers = users.map((user) => {
      if (user.userEmail === email) { // Changed from user.email to user.userEmail
        return { ...user, userPassword: newPassword } // Changed from password to userPassword
      }
      return user
    })
    localStorage.setItem("users", JSON.stringify(updatedUsers))

    console.log("Password updated for:", email)
    alert("Password Updated Successfully!")

    // Clear the form
    setEmail("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="settings-container">
      <h1>Update Password</h1>
      <form onSubmit={handleSubmit} className="settings-form">
        <div>
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="update-button">
          Update Password
        </button>
      </form>
    </div>
  )
}

export default Settings