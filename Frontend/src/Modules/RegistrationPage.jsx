import React, { useState } from 'react';
import './RegistrationPage.css';
import toast from "react-hot-toast" 
import axios from "axios"

function RegistrationPage() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
   try {
    const res = await axios.post(`localhost:8000/api/register.php`, {
      name: username,
      email,
      password
    })

    if (res.data.status === 200) {
      toast.success("Registered successfully")
      localStorage.setItem("user", JSON.stringify(res.data))
    }
   } catch (error) {
    console.error(error);
    toast.error("Failed to reegister")
   }
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
        <p>
          Do you already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
    </section>
  );
}

export default RegistrationPage;