const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');
const ChatHistory = require('../models/ChatHistory');

router.post('/', authMiddleware, sendMessage);

router.get('/history', authMiddleware, async (req, res) => {
  try {
    const history = await ChatHistory.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to get history', error: err.message });
  }
});

module.exports = router;
