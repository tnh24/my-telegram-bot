const axios = require('axios');

const TELEGRAM_BOT_TOKEN = '7382843737:AAE8nivAOxYJSF-a1JmSYt59g_lyqTKhTr8'; // Replace with your bot token
const NETLIFY_FUNCTION_URL = 'https://ytscribe.netlify.app/.netlify/functions/telegram-bot'; // Replace with your Netlify function URL

axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
  url: NETLIFY_FUNCTION_URL
})
.then(response => {
  console.log('Webhook set successfully:', response.data);
})
.catch(error => {
  console.error('Error setting webhook:', error);
});
