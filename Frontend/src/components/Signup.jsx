"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:4000/api/users", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        console.log("Signup successful:", response.data);
        alert("Account created successfully!");

        // Clear form fields
        setName("");
        setEmail("");
        setPassword("");

        // Redirect to login page
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.response?.data?.message || "An error occurred during signup");
    }
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-card">
        <div className="signup-form-area">
          <div className="signup-form-box">
            <h1 className="signup-heading">Sign Up</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="input-field-container">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="input-field-container">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-field-container">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="signup-submit-btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="signup-info-panel">
          <div className="signup-info-content">
            <h2>Already have an account?</h2>
            <p>Manage Your Library with Ease.</p>
            <button onClick={() => navigate("/login")} className="login-redirect-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
