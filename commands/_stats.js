/*CMD
  command: /stats
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var us = Libs.ResourcesLib.anotherChatRes("status", "global")
  .value()
  .toFixed(0)

var dp = Libs.ResourcesLib.anotherChatRes("totaldeposit", "global")

////
let free = new Date().toLocaleString("en-US", {
  timeZone: "Asia/kolkata"
})
var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
var tm = Libs.DateTimeFormat.format(free, "h:MM:ss T")
var dxy = Libs.DateTimeFormat.format(free, " dddd")
//Bot.sendMessage("*🔝Data for: (Today)\n📅 DATE:*_"+dt+"_\n*⏳ TIME:*_ "+tm+"M_")
////
//var Lib = Libs.resourcesLib
var tbs = Libs.ResourcesLib.anotherChatRes("bots_Clone", "global")
var tttt = parseInt(us)
var ss = tttt / 2
var sss = ss / 2
var ttttt = ss + sss

var onu = Libs.Random.randomInt(0, ttttt)

var ph = "https://quickchart.io/chart?bkg=white&c={type:%27bar%27,data:{labels:['@" +
  bot.name +
  "'],datasets:[{label:%27Total+Users%27,data:["+ us +"]},{label:%27Online+Users%27,data:["+ onu +"]}]}}"

var message =
  "<b>📊 Bot Live Statistics\n\n👥 Users = " +
  us +
  " \n\n☢️ Online Users: " +
  onu +
  "\n\n📅 DATE : " +
  dt +
  "\n⏳ TIME : " +
  tm +
  "M\n🗓 DAY : " +
  dxy +
  "\n\n© @" +
  bot.name +
  "</b>"
Api.sendPhoto({
  photo: ph,
  caption: message,
  parse_mode: "HTML"
})

