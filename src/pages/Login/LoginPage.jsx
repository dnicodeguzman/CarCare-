import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // adjust path if needed
=======
>>>>>>> 5943c49 (pa test  crud)
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
<<<<<<< HEAD
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      const token = await user.getIdToken();
      localStorage.setItem("token", token);

      navigate('/home');

    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with that email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("Login failed. Try again.");
      }
=======
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
>>>>>>> 5943c49 (pa test  crud)
    }
  };

  return (
    <div className="login-container">
<<<<<<< HEAD

      
      <div className="login-left">
        <div className="login-form-container">

          <h1>Login</h1>

          {error && <p className="error-message">{error}</p>}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
=======
     
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
>>>>>>> 5943c49 (pa test  crud)
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
<<<<<<< HEAD

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
=======
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
>>>>>>> 5943c49 (pa test  crud)
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
<<<<<<< HEAD

            <button className="login-button" type="submit">
              Login
            </button>
          </form>

        </div>
      </div>

      
      <div className="login-right">
        <div className="image-content">
          <span>Welcome Back!</span>
        </div>
      </div>

=======
            
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>

   
      <div className="login-right">
        <div className="image-content">
          <span>Image</span>
        </div>
      </div>
>>>>>>> 5943c49 (pa test  crud)
    </div>
  );
};

<<<<<<< HEAD
export default LoginPage;
=======
export default LoginPage;
>>>>>>> 5943c49 (pa test  crud)
