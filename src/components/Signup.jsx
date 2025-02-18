import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../App.css";

function Signup() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 && /^[0-9]*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userName,
      userEmail,
      userPassword,
    };

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    console.log('Signup successful:', newUser);

    setFullName('');
    setPhoneNumber('');
    setUserName('');
    setUserEmail('');
    setUserPassword('');

    navigate('/');
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-card">
      <div className="signup-form-area">
        <div className="signup-form-box">
          <h1 className="signup-heading">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-field-container">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="input-field-container">
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
            </div>
            <div className="input-field-container">
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="input-field-container">
              <input
                type="email"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-field-container">
              <input
                type="password"
                placeholder="Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
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
          <button onClick={() => navigate('/')} className="login-redirect-btn">
            Login
          </button>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Signup;