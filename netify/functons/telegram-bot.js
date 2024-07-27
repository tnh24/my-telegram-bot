const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const YOUTUBE_SUBSCRIBE_LINK = 'https://www.youtube.com/channel/your_channel_id?sub_confirmation=1';

bot.start((ctx) => {
  console.log('Received /start command');
  ctx.reply(`Welcome! Click [here](${YOUTUBE_SUBSCRIBE_LINK}) to subscribe to our YouTube channel.`, { parse_mode: 'Markdown' });
});

bot.on('text', (ctx) => {
  const userMessage = ctx.message.text;
  if (userMessage.toLowerCase().includes('subscribe')) {
    ctx.reply(`Click [here](${YOUTUBE_SUBSCRIBE_LINK}) to subscribe to our YouTube channel.`, { parse_mode: 'Markdown' });
  } else {
    ctx.reply("Send 'subscribe' to get the YouTube subscription link.");
  }
});

exports.handler = async (event) => {
  console.log('Received event:', event);
  const body = JSON.parse(event.body);

  try {
    await bot.handleUpdate(body);
    return {
      statusCode: 200,
      body: '',
    };
  } catch (error) {
    console.error('Error handling update:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
