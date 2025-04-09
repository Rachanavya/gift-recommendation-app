import React from 'react';

const ChatBox = ({ chatLog }) => {
  return (
    <div className="chat-box">
      {chatLog.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender}`}>
          <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
