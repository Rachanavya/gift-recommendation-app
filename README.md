
# 🧞‍♂️ Gift Recommendation Chatbot

An AI-powered gift recommendation chatbot that uses [Ollama](https://ollama.com) with LLaMA 3.2 to suggest personalized gifts based on recipient details like age, relationship, occasion, and budget.

---

## 📦 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB (Compass/Atlas)
- **AI Model**: LLaMA 3.2 via [Ollama](https://ollama.com)
- **Authentication**: JWT
- **Styling**: CSS

---

## 📁 Project Structure

```
gift-recommendation-app/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
├── frontend/
│   └── src/
│       ├── pages/
│       │   └── Chat.jsx
│       ├── components/
│       │   └── ChatBox.jsx
│       └── utils/
│           └── api.js
├── .env
└── README.md
```

---

## 🚀 Getting Started

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/giftDB
JWT_SECRET=yourSuperSecretKey
```

Start the server:

```bash
nodemon server.js
```

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs at: `http://localhost:3000`

---

### 🧠 Ollama Setup (AI Engine)

Install [Ollama](https://ollama.com/download) and pull the model:

```bash
ollama pull llama3.2
ollama run llama3.2:latest
```

This will launch the AI model at `http://localhost:11434`.

---

## 🧪 How It Works

1. User logs in or registers
2. Fills recipient details (age, relationship, occasion, budget)
3. Chat opens automatically with a custom prompt
4. Genie responds with gift ideas using LLaMA 3.2
5. User can continue chatting or save the chat

---

## 🔐 Authentication

- JWT is stored in localStorage after login
- Token is attached to all protected API requests
- Backend checks token using `authMiddleware.js`

---

## 📥 Sample .env File

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/giftDB
JWT_SECRET=superSecretKey123
```

---

## ✅ Features

- 🎁 AI-generated gift recommendations
- 📨 Auto-prompt from recipient details
- 🧠 Powered by LLaMA 3.2 (Ollama)
- 🧾 Chat history support (for logged-in users)
- 🔐 JWT authentication

---

## 🛣️ Future Enhancements

- ✨ Typing animation for Genie
- 🔄 Regenerate suggestions
- 📤 Export chat to PDF
- 📊 Admin dashboard

---

## 👨‍💻 Author

Made with ❤️ by Racha Navya Sree  
📧 Contact: navyasreeracha0020@gmail.com
```

---

J
