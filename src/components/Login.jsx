"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "../App.css"
import logo from "../image/LogoRx1.svg"

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
    <div className="login-card">
      <div className="login-form">
        <div className="logoRN"><img src={logo} alt="logo" /></div>

       
        <h1>Login to Your Account</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>

          <button onClick={() => navigate('forgot-password')} type="button" className="forgot-Password">Forgot password?</button>
        </form>
      </div>
      <div   className="signup-section">
        <h2>New Here?</h2>
        <p>Manage Your Library with Ease.</p>
        <button       onClick={() => navigate('/signup')} className="signup-button">Sign Up</button>
      </div>
    </div>
  </div>
  )
}

export default Login

