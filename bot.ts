import { Bot, InlineKeyboard } from "https://deno.land/x/grammy@v1.36.3/mod.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN")!);

// /start command
bot.command("start", async (ctx) => {
  const user = ctx.from;
  const userId = user?.id;
  const username = user?.username ?? user?.first_name ?? "unknown";

  const kv = await Deno.openKv();

  await kv.set(["telegram_users", userId], {
    id: userId,
    username: username,
    first_name: user.first_name,
    last_name: user.last_name,
    joined_at: new Date().toISOString(),
  });

  const keyboard = new InlineKeyboard().url(
    "Get BONUS!",
    "https://t.me/slotalarmcasinos_bot/slots"
  );

  await ctx.replyWithPhoto("https://crownslots.pro/img/bot.jpg", {
    caption: `Hello @${username}, Fordern Sie Ihre BONUSSE an 🎁`,
    reply_markup: keyboard,
  });
});

bot.command("broadcast", async (ctx) => {
  const kv = await Deno.openKv();

  // Message text after /broadcast command
  const text = ctx.message?.text?.split(" ").slice(1).join(" ");
  if (!text) return ctx.reply("Please provide a message to send.");

  // Inline button
  const keyboard = new InlineKeyboard().url(
    "Play Now!",
    "https://t.me/slotalarmcasinos_bot/slots"
  );

  const users = [];
  for await (const entry of kv.list({ prefix: ["telegram_users"] })) {
    users.push(entry.value);
  }

  let success = 0;
  let failed = 0;

  for (const user of users) {
    try {
      await ctx.api.sendPhoto(user.id, "https://crownslots.pro/img/bot2.png", {
        caption: text,
        reply_markup: keyboard,
      });
      success++;
    } catch (err) {
      console.error("Failed to send to", user.id, err);
      failed++;
    }
  }

  await ctx.reply(`✅ Broadcast sent to ${success} users, ❌ ${failed} failed.`);
});


export default bot;

