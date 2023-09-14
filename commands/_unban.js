/*CMD
  command: /unban
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /unban@grouphelpdlbot
CMD*/

if (request.chat.type == "private") {
  Bot.sendMessage("You cannot run this command in private chat.", {
    is_reply: true
  })
  return
}



//Bot.inspect(request)
//restrictChatMember

if(content!=null){

if (message == "/unban unbanHandle") {
  var c = JSON.parse(content)
  if (c.ok) {
    if (c.result.status != "left") {
      if(c.result.status=="kicked"){
     Bot.sendMessage("User is kicked not banned!", { is_reply: true })
return
}
      Bot.sendMessage("Not a banned user!", { is_reply: true })
return
    } else {
      var Apiurl2 =
        "https://api.telegram.org/bot" +
        bot.token +
        "/unbanChatMember?chat_id=" +
        chat.chatid +
        "&user_id=" +
        request.reply_to_message.from.id
      //Bot.inspect(Apiurl2)
      HTTP.get({
        url: Apiurl2,
        success: "/unban unbanSuccess",
        error: "/onError"
        //background:true
      })
    }
  }
  return
}

if (message == "/unban unbanSuccess") {
  var ct = JSON.parse(content)
  if (ct.ok) {
    Bot.sendMessage(
      "Successfully unbaned [" + request.reply_to_message.from.first_name + "](tg://user?id="+request.reply_to_message.from.id+") !\nNow user can join.",
      { is_reply: true }
    )
  } else {
    Bot.sendMessage("*Error* : " + ct.description, { is_reply: true })
  }

  return
}

if (message=="/unban checkUserStatus") {
  //Bot.inspect(content)
  var userStatus = JSON.parse(content).result.status

  //Bot.inspect(userStatus)

  if (userStatus == "administrator" || userStatus == "creator") {
    var userId = request.reply_to_message
    if (!userId) {
      return Bot.sendMessage("lnvalid syntax. You need to reply to that message.")
    }

    //check if already unbaned
    var Apiurl3 =
      "https://api.telegram.org/bot" +
      bot.token +
      "/getChatMember?chat_id=" +
      chat.chatid +
      "&user_id=" +
      userId.from.id
     Bot.inspect(Apiurl3)

    HTTP.get({
      url: Apiurl3,
      success: "/unban unbanHandle",
      error: "/onError"
      //background:true
    })

    /*
    
 Api.unbanChatMember({
  chat_id: chat.chatid,
  user_id: userId.id,
 // only_if_unbanned: true
})
*/
    /* Bot.sendMessage(
      "Successfully unbaned [" +
        userId.first_name +
        "](tg://user?id=" +
        userId.id +
        ") ",
      { is_reply: true }
    )
*/
    return
  }

  //Bot.inspect(userId)
  Bot.sendMessage(
    "You are not admin of this group.\nYou don't have privilege to do this.",
    { is_reply: true }
  )

  return
}
  //Bot.sendMessage('200')
  //Bot.inspect(options.result.status)
return
}else{
  var Apiurl =
    "https://api.telegram.org/bot" +
    bot.token +
    "/getChatMember?chat_id=" +
    chat.chatid +
    "&user_id=" +
    request.from.id
  //Bot.inspect(Apiurl)
  //Bot.sendMessage('-----')
  //Bot.inspect(options.result)
  HTTP.get({
    url: Apiurl,
    success: "/unban checkUserStatus",
    error: "/onError"
    //background:true
  })
}

