// bot.ts
import { Bot } from "https://deno.land/x/grammy@v1.36.3/mod.ts";
import "https://deno.land/std@0.224.0/dotenv/load.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN")!); // safer than hardcoding token

bot.command("start", (ctx) => ctx.reply("Welcome!"));


export default bot;
