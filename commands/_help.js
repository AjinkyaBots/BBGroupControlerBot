/*CMD
  command: /help
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendInlineKeyboard(
  [{ title: "Dᴇʟᴇᴛᴇ", command: "/close" }],
  "*Currently available commands* :\n\n/start - start bot\n/id - to know your id\n/info - to know your telegram info\n/getadmins - get group admins list\n/help - get help\n/getprofilepic - get your profile photo\n\n*Admin Commands* :\n\n/ban - ban a user from the group without giving him the possibility to join again using the link of the group _[admin only]_\n/unban - unban a banned user _[admin only]_\n/kick - bans a user from the group _[admin only]_\n\n*Owner Commands* :\n\n/addadmin - add admins _[admin only]_\n/removeadmin - remove admins _[admin only]_"
)

