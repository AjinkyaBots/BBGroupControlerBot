/*CMD
  command: /getadmins
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /getadmins@grouphelpdlbot
CMD*/


if(request.chat.type=="private"){
Bot.sendMessage("You cannot run this command in private chat.",{is_reply:true})
return
}




if(content!=null){
if(message=="/getAdmins adminList"){
var totalAdmins =JSON.parse(content).result
var msg="*Admins & Owner Info - *"+"\n\n"
for(var i=0;i<totalAdmins.length;i++){
  
  msg+='_Name_ : ['+totalAdmins[i].user.first_name+'](tg://user?id='+totalAdmins[i].user.id+')\n'
  msg+='_Status_ : '+totalAdmins[i].status+'\n'
  msg +='------------------------------------\n'
  }
  let msg_id = request.message_id;

  
  Bot.editMessage(msg,msg_id+1)

}

}
else{


Bot.sendMessage(' Grabbing Admins ⏳',{is_reply:true})

var url ="https://api.telegram.org/bot"+bot.token+"/getChatAdministrators?chat_id="+chat.chatid

HTTP.get({
  url:url,
  success:'/getAdmins adminList'
  })
  

}
