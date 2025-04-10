import React, { useState, useContext } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import bg from '../assets/bg.png'; // ✅ IMPORT THE IMAGE

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', formData);
      login(res.data.user, res.data.token);
      alert('Login successful');
      navigate('/recipient');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div
      className="auth-wrapper"
      style={{
        backgroundImage: `url(${bg})`, // ✅ USE IMPORTED IMAGE HERE
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
