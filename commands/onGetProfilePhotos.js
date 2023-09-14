/*CMD
  command: onGetProfilePhotos
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userInfo = request.from
var text =
  "*First Name* : `" +
  userInfo.first_name +
  "`" +
  "\n*Last Name* : `" +
  userInfo.last_name + "`" +
  "\n*Telegram Premium* : " +
  (userInfo.is_premium ? "`Yes`" : "`No`") +
  "\n*ID* : `" +
  userInfo.id +
  "`" +
  "\n*UserName* : `@" +
  userInfo.username + "`" 
if (!options.ok) {
  return Bot.sendMessage("*Error!!*")
}

if (options.result.total_count == 0) {
  Bot.sendMessage(text)
  return
}

let photos = options.result.photos

Api.sendPhoto({
  photo: photos[0][0].file_id,
  caption: text,parse_mode: "markdownv2",reply_markup:{inline_keyboard : [[{text :"Dᴇʟᴇᴛᴇ",callback_data:"/close"}]]
}})
