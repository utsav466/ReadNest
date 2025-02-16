import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../image/logoR2.svg';
import '../App.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a user object
    const newUser = {
      username,
      email,
      password // Note: In a real application, never store passwords in plain text
    };

    // Get existing users from local storage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Add the new user
    existingUsers.push(newUser);

    // Save the updated users array back to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Log the signup attempt (you can remove this in production)
    console.log('Signup successful:', newUser);

    // Clear the form
    setUsername('');
    setEmail('');
    setPassword('');

    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="login-container">
      {/* Left section */}
      <div className="login-form-section">
        <div className="login-form-container">
          <h1 className="signup-text">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Right section */}
      <div className="signup-section">
        <img src={logo} alt="readNestLogo" />
        
        <div className="signup-content">
          <h2>Already have an account?</h2>
          <p>Manage Your Library with Ease.</p>
          <button 
            onClick={() => navigate('/')} 
            className="sign-up-button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;