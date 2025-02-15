
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt with:', { username, email, password});
  };

  return (
    <div className="login-container">
      {/* Left section */}
      <div className="login-form-section">
        <div className="login-form-container">
          <h1 >Sign Up</h1>
          <form onSubmit={handleSubmit}>
            
          <div className="form-group">
              <input
                type="username"
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