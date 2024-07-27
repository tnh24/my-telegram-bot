const axios = require('axios');

const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN'; // Replace with your bot token
const NETLIFY_FUNCTION_URL = 'https://your-netlify-site.netlify.app/.netlify/functions/telegram-bot'; // Replace with your Netlify function URL

axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
  url: NETLIFY_FUNCTION_URL
})
.then(response => {
  console.log('Webhook set successfully:', response.data);
})
.catch(error => {
  console.error('Error setting webhook:', error);
});
