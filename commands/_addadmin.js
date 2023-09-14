/*CMD
  command: /addadmin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /addadmin@grouphelpdlbot
CMD*/

if (request.chat.type == "private") {
  Bot.sendMessage("You cannot run this command in private chat.", {
    is_reply: true
  })
  return
}

//Bot.inspect(request)
//restrictChatMember

if (content != null) {
  if (message == "/promote promoteHandle") {
    var c = JSON.parse(content)
//Bot.inspect(c)
    if (c.ok) {
      if (c.result.status == "administrator") {
        Bot.sendMessage("Already promoted!", { is_reply: true })
      } else {
//-----
//Bot.inspect(request.reply_to_message.from)
      ///-----

  var Apiurl2 =
          "https://api.telegram.org/bot" +
          bot.token +
          "/promoteChatMember?chat_id=" +
          chat.chatid +
          "&user_id=" +       request.reply_to_message.from.id+"&can_promote_members=true"
//&can_post_messages=true&can_edit_messages=true&can_delete_messages=true&can_restrict_members=true&can_invite_users=true&can_pin_messages=true&can_manage_topics=true"
      //  Bot.inspect(Apiurl2)
        HTTP.get({
          url: Apiurl2,
          success: "/promote promoteSuccess",
          error: "/onError"
          //background:true
        })
      }
    }
    return
  }

  if (message == "/promote promoteSuccess") {
    var ct = JSON.parse(content)
    if (ct.ok) {
      Bot.sendMessage(
        "Successfully promoted [" +
          request.reply_to_message.from.first_name +
          "](tg://user?id=" +
          request.reply_to_message.from.id +
          ") !",
        { is_reply: true }
      )
    } else {
      Bot.sendMessage("*Error* : " + ct.description, { is_reply: true })
    }

    return
  }

  if (message == "/promote checkUserStatus") {
    //Bot.inspect(content)
    var userStatus = JSON.parse(content).result.status

    //Bot.inspect(userStatus)
Bot.inspect(JSON.parse(content).result);
    if (true){//userStatus == "creator" || userStatus=="administrator") {
      var userId = request.reply_to_message
      if (!userId) {
        return Bot.sendMessage(
          "lnvalid syntax. You need to reply to that message."
        )
      }

      //check if already promoted
      var Apiurl3 =
        "https://api.telegram.org/bot" +
        bot.token +
        "/getChatMember?chat_id=" +
        chat.chatid +
        "&user_id=" +
        userId.from.id
      // Bot.inspect(Apiurl3)

      HTTP.get({
        url: Apiurl3,
        success: "/promote promoteHandle",
        error: "/onError"
        //background:true
      })

      /*
    
 Api.promoteChatMember({
  chat_id: chat.chatid,
  user_id: userId.id,
 // only_if_banned: true
})
*/
      /* Bot.sendMessage(
      "Successfully promoted [" +
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
      "You are not owner of this group.\nYou don't have privilege to do this.",
      { is_reply: true }
    )

    return
  }
  //Bot.sendMessage('200')
  //Bot.inspect(options.result.status)
  return
} else {
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
    success: "/promote checkUserStatus",
    error: "/onError"
    //background:true
  })
}

