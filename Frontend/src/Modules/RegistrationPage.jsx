// src/RegistrationPage.js

import React, { useState } from 'react';
import './RegistrationPage.css'; // We'll create this CSS file next

function RegistrationPage() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    // Here you would typically send this data to a backend server
    // For demonstration, we'll just log it.
    console.log({
      username,
      email,
      password,
    });

    setMessage('Registration successful! (Demo: Check console for data)');
    // You might want to redirect the user to a dashboard or login page after successful registration
    // navigate('/dashboard'); or navigate('/login');
  };

  return (
    <section className="RegistrationPages" id="RegistrationPages">
    <div className="registration-container">
      <h2>BOOKING DETAILS</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="username">NAME:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">Register</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
    </section>
  );
}

export default RegistrationPage;