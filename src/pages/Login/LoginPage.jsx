import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();

      if (response.ok) {
        const user = data.users.find(u => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem('token', 'dummy-token-' + user.id);
          navigate('/home');
        } else {
          setError('Invalid credentials');
        }
      } else {
        setError('Failed to fetch user data');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="login-container">
     
      <div className="login-left">
        <div className="login-form-container">
          <h1>Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>

   
      <div className="login-right">
        <div className="image-content">
          <span>Image</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;