import React, { useEffect, useState } from 'react';
import API from '../utils/api';

const Dashboard = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await API.get('/chat/history');
        setHistory(res.data);
      } catch (err) {
        console.error('Error fetching history:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="container">
      <h2>📜 Chat History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : history.length === 0 ? (
        <p>No history found.</p>
      ) : (
        <div className="history-list">
          {history.map((entry, index) => (
            <div key={index} className="history-entry">
              <p><strong>🧑 You:</strong> {entry.prompt}</p>
              <p><strong>🤖 Bot:</strong> {entry.response}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
