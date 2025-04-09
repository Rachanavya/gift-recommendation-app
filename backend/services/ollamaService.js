const fetch = require('node-fetch');

const generateResponse = async (prompt) => {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    const data = await response.json();
    return data.response;
  } catch (err) {
    console.error('Error connecting to Ollama:', err);
    return 'Sorry, I could not connect to the AI model right now.';
  }
};

module.exports = { generateResponse };
