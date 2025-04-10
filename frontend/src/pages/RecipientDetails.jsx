import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipientDetails.css';

const RecipientDetails = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    age: '',
    relationship: '',
    occasion: '',
    budget: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Save to localStorage or context if needed
    localStorage.setItem('recipientDetails', JSON.stringify(form));

    // Navigate to the chat page
    navigate('/chat');
  };

  return (
    <div className="recipient-container">
      <h2 className="recipient-title">🎁 Tell Us About the Recipient</h2>
      <form onSubmit={handleSubmit} className="recipient-form">
        <label>👤 Age</label>
        <input type="number" name="age" onChange={handleChange} required />

        <label>💞 Relationship</label>
        <select name="relationship" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="friend">Friend</option>
          <option value="parent">Parent</option>
          <option value="partner">Partner</option>
          <option value="sibling">Sibling</option>
        </select>

        <label>🎉 Occasion</label>
        <input type="text" name="occasion" onChange={handleChange} required />

        <label>💰 Budget (INR)</label>
        <input type="number" name="budget" onChange={handleChange} required />

        <button type="submit" className="recipient-btn">✨ Get Gift Ideas</button>
      </form>
    </div>
  );
};

export default RecipientDetails;
