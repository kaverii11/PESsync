import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in (by checking for an authToken in localStorage)
    if (localStorage.getItem('authToken')) {
      setIsLoggedIn(true);
      navigate('/homepage'); // Redirect to homepage if logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);
        localStorage.setItem('authToken', result.token); // Store the authToken
        alert('Login successful!');
        navigate('/homepage');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(errorData.error || 'Failed to log in');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login');
    }
  };

  if (isLoggedIn) {
    return null; // Optionally return nothing if already logged in
  }

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="signup.jpg" alt="Login illustration" />
      </div>
      <div className="signup-form">
        <h2>Login to your account</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username *"
            value={loginData.username}
            onChange={handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password *"
            value={loginData.password}
            onChange={handleChange}
          />

          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
