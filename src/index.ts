import { Client, GatewayIntentBits, Partials } from 'discord.js';
import { loadCommands, commands } from './utils/loadCommands';
import loadEvents from './utils/loadEvents';
import 'dotenv/config';

const client = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
  ],

  partials: [Partials.Message, Partials.Message],

  allowedMentions: {
    parse: ['users'],
  },
});

loadCommands();
loadEvents(client);

client.login(process.env.DISCORD_TOKEN);
