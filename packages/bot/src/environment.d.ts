declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      DISCORD_TOKEN: string;
      DEV_GUILD_ID: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
