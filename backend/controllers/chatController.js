const { generateResponse } = require('../services/ollamaService');
const ChatHistory = require('../models/ChatHistory');

exports.sendMessage = async (req, res) => {
  const { message } = req.body;
  const userId = req.user?.id;

  if (!message) {
    return res.status(400).json({ msg: 'Message is required' });
  }

  try {
    const aiReply = await generateResponse(message);

    // Save chat history only if userId exists (user is logged in)
    if (userId) {
      const chat = new ChatHistory({
        userId,
        prompt: message,
        response: aiReply
      });
      await chat.save();
    }

    res.json({ reply: aiReply });
  } catch (err) {
    res.status(500).json({ msg: 'Chat failed', error: err.message });
  }
};
