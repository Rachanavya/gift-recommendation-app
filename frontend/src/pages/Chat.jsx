import React, { useState, useEffect } from 'react';
import API from '../utils/api';
import ChatBox from '../components/ChatBox';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [recipient, setRecipient] = useState(null);

  // Load recipient details on mount and send auto prompt
  useEffect(() => {
    const details = localStorage.getItem('recipientDetails');
    if (details) {
      const parsed = JSON.parse(details);
      setRecipient(parsed);

      // Construct auto-prompt
      const autoPrompt = `Suggest a gift for a ${parsed.age}-year-old ${parsed.relationship} celebrating a ${parsed.occasion} within a ₹${parsed.budget} budget.`;

      // Auto-send prompt to API and add to chatLog
      const sendAutoPrompt = async () => {
        const introLog = [
          { sender: 'user', text: autoPrompt }
        ];
        setChatLog(introLog);

        try {
          const res = await API.post('/chat', { message: autoPrompt });
          const reply = res.data.reply;
          setChatLog([
            ...introLog,
            { sender: 'bot', text: reply }
          ]);
        } catch (err) {
          setChatLog([
            ...introLog,
            { sender: 'bot', text: 'Error: Could not get a response.' }
          ]);
        }
      };

      sendAutoPrompt();
    }
  }, []);

  // Send user's message
  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newChat = [...chatLog, { sender: 'user', text: message }];
    setChatLog(newChat);

    try {
      const res = await API.post('/chat', { message });
      const reply = res.data.reply;

      setChatLog([...newChat, { sender: 'bot', text: reply }]);
      setMessage('');
    } catch (err) {
      setChatLog([...newChat, { sender: 'bot', text: 'Error: Could not get a response.' }]);
    }
  };

  return (
    <div className="container">
      <h2>🎁 Gift Recommendation Chat</h2>

      {recipient && (
        <div style={{ background: '#f0f8ff', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          <strong>🧞 Magical Genie is helping you find a gift for:</strong>
          <p>
            A <strong>{recipient.age}-year-old</strong> <strong>{recipient.relationship}</strong>{' '}
            celebrating a <strong>{recipient.occasion}</strong> 🎉 within a budget of{' '}
            <strong>₹{recipient.budget}</strong>.
          </p>
        </div>
      )}

      <ChatBox chatLog={chatLog} />

      <form onSubmit={handleSend} style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Ask for a gift suggestion..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
