const CONFIG = require('./config.example');

if (CONFIG.botToken !== 'https://discordapp.com/api/webhooks/743016685673513002/CK5W3NIKFvjIwCU-GUIZyFxm8Khkhl9wu15tI8Hu_jY7ew2axJWZkbgX5zNGUMA2fA3H') 
	throw new Error("Please remove the Discord bot token from 'botToken' in the config.js file.");
if (CONFIG.yourID !== '@538273251831316480')
	throw new Error("Please remove the user ID from 'yourID' in the config.js file.");
