"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import icon from "../image/icon123.svg";
import logo from "../image/LogoRx1.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before new request

    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.data.access_token;
        
        // Store the token in local storage or session storage
        localStorage.setItem("token", token);

        console.log("Login successful:", response.data);
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form">
          <div className="backButton">
            <a href="/">
              <img src={icon || "/placeholder.svg"} alt="BackButton" />
            </a>
          </div>
          <div className="logoRN">
            <img src={logo || "/placeholder.svg"} alt="logo" />
          </div>

          <h1>Login to Your Account</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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

            <button onClick={() => navigate("/forgot-password")} type="button" className="forgot-Password">
              Forgot password?
            </button>
          </form>
        </div>
        <div className="signup-section">
          <h2>New Here?</h2>
          <p>Manage Your Library with Ease.</p>
          <button onClick={() => navigate("/signup")} className="signup-button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
