// filepath: /c:/Users/Artsy/OneDrive/Documents/mini_project_1/chatbot.js
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Use environment variable for API key
});
const openai = new OpenAIApi(configuration);

async function sendMessageToOpenAI(message) {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        max_tokens: 150,
    });
    return response.data.choices[0].text.trim();
}

module.exports = { sendMessageToOpenAI };