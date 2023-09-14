/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /start@grouphelpdlbot
CMD*/

Bot.sendInlineKeyboard(
  [
    [
      {
        title: "➕ Aᴅᴅ Mᴇ Tᴏ A Gʀᴏᴜᴘ ➕",
        url: "https://t.me/" + bot.name + "?startgroup=start"
      }
    ],
    [
      { title: "Uᴘᴅᴀᴛᴇ Cʜᴀɴɴᴇʟ", url: "https://t.me/ajinkyabotz" },
      { title: "Sᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ", url: "https://t.me/botschats" }
    ],
    [{ title: "Hᴇʟᴘ", command: "/help" }],
    [{ title: "🔐 Cʟᴏsᴇ", command: "/close" }]
  ],
  "👋🏻 Hi [" +
    user.first_name +
    "](tg://user?id=" +
    user.telegramid +
    ")!\n\n[BB Group Controler Bot](https://t.me/" +
    bot.name +
    ") is the most complete Bot to help you manage your groups easily and safely!\n\n👉🏻 Add me in a Supergroup and promote me as Admin to let me get in action!"
)

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })

