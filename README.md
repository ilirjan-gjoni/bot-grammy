# Telegram Bot with grammy (Deno)

This project is a Telegram bot built using the [grammy](https://grammy.dev/) framework and runs on [Deno](https://deno.com/). The bot supports user registration, broadcasting messages, and uses webhooks for receiving updates.

## Features

- **/start**: Registers the user and sends a welcome message with a bonus link.
- **/broadcast**: Sends a broadcast message with an image and button to all registered users (admin only).
- Stores user data using Deno KV.
- Handles Telegram updates via webhook.

## Getting Started

### Prerequisites

- [Deno](https://deno.com/manual/getting_started/installation) installed
- A Telegram bot token from [@BotFather](https://t.me/BotFather)
- A public HTTPS endpoint for webhooks (e.g., [Deno Deploy](https://deno.com/deploy))

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/bot-grammy.git
   cd bot-grammy
   ```

2. **Set your bot token:**
   Create a `.env` file in the project root:
   ```
   BOT_TOKEN=your-telegram-bot-token
   ```

3. **Run the bot locally:**
   ```sh
   deno run -A --unstable main.ts
   ```

4. **Set the webhook with Telegram:**
   Replace `<your-public-url>` with your deployed endpoint.
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<your-public-url>
   ```

### Deployment

You can deploy this bot to [Deno Deploy](https://deno.com/deploy) or any other platform that supports Deno and HTTPS.

## Project Structure

```
bot-grammy/
├── bot.ts        # Bot logic and commands
├── main.ts       # Webhook HTTP server entry point
├── README.md     # Project documentation
└── .env          # Environment variables (not committed)
```

## Notes

- Make sure to enable the Deno extension in VS Code for best development experience.
- The `/broadcast` command is available to anyone who knows the command. For production, restrict it to admins.