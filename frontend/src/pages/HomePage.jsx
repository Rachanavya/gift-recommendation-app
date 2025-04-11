import React from 'react';
import './HomePage.css';
import bg from '../assets/bg.png'; // ✅ Update path based on where your file is

const HomePage = () => {
  return (
    <div
      className="home-page"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="center-content">
        <h1>Welcome to the Gift Recommender</h1>
        <p>Find the perfect gift based on personality, budget, and more!</p>
      </div>
    </div>
  );
};

export default HomePage;
