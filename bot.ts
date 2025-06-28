import { Bot } from "https://deno.land/x/grammy@v1.36.3/mod.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN")!);

bot.command("start", async (ctx) => {
  const username = ctx.from?.first_name || "there";

  await ctx.replyWithPhoto("https://crownslots.pro/img/bot.jpg", {
    caption: `Hello ${username}, Fordern Sie Ihre BONUSSE an 🎁<br><a href="https://t.me/slotalarmcasinos_bot/slots">👉 Jetzt ansehen</a>`,
    parse_mode: "HTML",
  });
});

export default bot;

