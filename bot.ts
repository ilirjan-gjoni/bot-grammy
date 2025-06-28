import { Bot, InlineKeyboard } from "https://deno.land/x/grammy@v1.36.3/mod.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN")!);

bot.command("start", async (ctx) => {
  const username = ctx.from?.username
    ? `@${ctx.from.username}`
    : ctx.from?.first_name || "there";

  //  bot.command("start", async (ctx) => {
  // const username = ctx.from?.first_name || "there"; 

  const keyboard = new InlineKeyboard().url(
    "Get BONUS!",
    "https://t.me/slotalarmcasinos_bot/slots"
  );

  await ctx.replyWithPhoto("https://crownslots.pro/img/bot.jpg", {
    caption: `Hello ${username}, Fordern Sie Ihre BONUSSE an 🎁`,
    reply_markup: keyboard,
  });
});

export default bot;
