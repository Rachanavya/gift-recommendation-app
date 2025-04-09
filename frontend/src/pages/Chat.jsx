import React, { useState } from 'react';
import API from '../utils/api';
import ChatBox from '../components/ChatBox';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chatLog
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
