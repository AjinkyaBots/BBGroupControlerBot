/*CMD
  command: /id
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /id@grouphelpdlbot
CMD*/

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

Api.getUserProfilePhotos({
    user_id: user.telegramid,
    on_result: "onGetProfilePhotos"
});
