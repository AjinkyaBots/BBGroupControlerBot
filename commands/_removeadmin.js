/*CMD
  command: /removeadmin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /removeadmin@grouphelpdlbot
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
  if (message == "/demote demoteHandle") {
    var c = JSON.parse(content)
    if (c.ok) {
      if (c.result.status != "administrator") {
        Bot.sendMessage("Not a admin !", { is_reply: true })
      } else {
        var Apiurl2 =
          "https://api.telegram.org/bot" +
          bot.token +
          "/promoteChatMember?chat_id=" +
          chat.chatid +
          "&user_id=" +
          request.reply_to_message.from.id +
          "can_promote_members=false&can_post_messages=false&can_edit_messages=false&can_delete_messages=false&can_restrict_members=false&can_invite_users=false&can_pin_messages=false&can_manage_topics=false"
        //Bot.inspect(Apiurl2)
        HTTP.get({
          url: Apiurl2,
          success: "/demote demoteSuccess",
          error: "/onError"
          //background:true
        })
      }
    }
    return
  }

  if (message == "/demote demoteSuccess") {
    var ct = JSON.parse(content)
    if (ct.ok) {
      Bot.sendMessage(
        "Successfully demoted [" +
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

  if (message == "/demote checkUserStatus") {
    //Bot.inspect(content)
    var userStatus = JSON.parse(content).result.status

    //Bot.inspect(userStatus)

    if (userStatus == "creator") {
      var userId = request.reply_to_message
      if (!userId) {
        return Bot.sendMessage(
          "lnvalid syntax. You need to reply to that message."
        )
      }

      //check if already demoted
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
        success: "/demote demoteHandle",
        error: "/onError"
        //background:true
      })

      /*
    
 Api.demoteChatMember({
  chat_id: chat.chatid,
  user_id: userId.id,
 // only_if_banned: true
})
*/
      /* Bot.sendMessage(
      "Successfully demoted [" +
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
    success: "/demote checkUserStatus",
    error: "/onError"
    //background:true
  })
}

