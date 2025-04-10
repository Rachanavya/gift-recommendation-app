import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // adjust path if needed
import './Navbar.css'; // optional, for styling

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">
          <span role="img" aria-label="gift">🎁</span> Magical Genie
        </h1>
      </div>
      
      <div className="navbar-right">
        {user ? (
          <>
            <Link to="/chat" className="nav-link">Chat</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <button onClick={handleLogout} className="nav-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
