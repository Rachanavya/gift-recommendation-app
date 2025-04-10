// components/ChatBox.jsx
const ChatBox = ({ chatLog }) => (
  <div className="chat-box">
    {chatLog.map((msg, i) => (
      <div key={i} className={`message ${msg.sender}`}>
        <strong>{msg.sender === "user" ? "You" : "🧞 Genie"}:</strong> {msg.text}
      </div>
    ))}
  </div>
);

export default ChatBox;
