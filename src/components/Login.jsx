"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../image/logoR4.svg"
import "../App.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Get users from local storage
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    // Check if user exists and password matches
    const user = users.find((u) => u.email === email && u.password === password)

    if (user) {
      // Successful login
      console.log("Login successful:", user)
      // Navigate to dashboard
      navigate("/dashboard")
    } else {
      // Failed login
      alert("Invalid email or password")
    }
  }

  return (
    <div className="login-container">
      {/* Left section */}
      <div className="login-form-section">
        <div className="login-form-container">
          <h1>Login to Your Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
            <div className="forgot-password-link">
              <button type="button" onClick={() => navigate("/forgot-password")} className="text-button">
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right section */}
      <div className="signup-section">
        <img className="readNestLogo" src={logo || "/placeholder.svg"} alt="ReadNest Logo" />
        <div className="signup-content">
          <h2>New Here?</h2>
          <p>Manage Your Library with Ease.</p>
          <button onClick={() => navigate("/signup")} className="sign-up-button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

