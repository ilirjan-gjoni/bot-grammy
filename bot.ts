import { Bot, InlineKeyboard } from "https://deno.land/x/grammy@v1.36.3/mod.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN")!);

bot.command("start", async (ctx) => {
  const user = ctx.from;
  const userId = user?.id;
  const username = user?.username ?? user?.first_name ?? "unknown";

  // Open Deno KV database
  const kv = await Deno.openKv();

  // Save user info
  await kv.set(["telegram_users", userId], {
    id: userId,
    username: username,
    first_name: user.first_name,
    last_name: user.last_name,
    joined_at: new Date().toISOString(),
  });

  // Create inline button
  const keyboard = new InlineKeyboard().url(
    "Get BONUS!",
    "https://t.me/slotalarmcasinos_bot/slots"
  );

  // Send image + text + button
  await ctx.replyWithPhoto("https://crownslots.pro/img/bot.jpg", {
    caption: `Hello @${username}, Fordern Sie Ihre BONUSSE an 🎁`,
    reply_markup: keyboard,
  });
});

export default bot;
