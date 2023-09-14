/*CMD
  command: /del
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

//check if the user replied to a message
if(!request.reply_to_message) return Bot.sendMessage('Unspecified message for deleting');

//deleting the message replied to
Api.deleteMessage({
  chat_id: request.chat.id,
  message_id: request.reply_to_message.message_id
})

//now the below of want to delete the /del message
Api.deleteMessage({
  chat_id: request.chat.id,
  message_id: request.message_id
})
