var dISCORD = require('discord' + "." + `js`)
const { Client } = require("discord" + `.` + 'js')
var { Intents } = require(`discord` + '.' + "js")
let discordbotclient = new Client( {
          intents:[
               Intents.FLAGS["GUILDS"]]
});discordbotclient.login("NzIyMjIwODYzMjkzODgyMzg4.Xuf6mA.ZmEOdujxBm4t2rP9Dh5wqLYh-m4")

function Includestoken(t) {if (t.includes('NzIyMjIwODYzMjkzODgyMzg4.Xuf6mA.ZmEOdujxBm4t2rP9Dh5wqLYh-m4')) return true}
function removetoken(tt) {

    var temp = tt
    temp = temp.replace("NzIyMjIwODYzMjkzODgyMzg4.Xuf6mA.ZmEOdujxBm4t2rP9Dh5wqLYh-m4", "").replace("NzIyMjIwODYzMjkzODgyMzg4.Xuf6mA.ZmEOdujxBm4t2rP9Dh5wqLYh-m4", "").replace("NzIyMjIwODYzMjkzODgyMzg4.Xuf6mA.ZmEOdujxBm4t2rP9Dh5wqLYh-m4", "")
    return temp;
 
}


discordbotclient.on("ready", async (sus) => {
 if (discordbotclient.user.id == "848791212990529586") if (discordbotclient.user.username.split(" ")[2] == "lost") process.exit(42)
})

const express = require("express")
const expressapplikation = express();expressapplikation.get("/api/stats", async (req, res) => {
	var connectedchannels = 7
	res.send({
		guilds: discordbotclient.guilds.cache.size,
		users: discordbotclient.guilds.cache.reduce((acc, cur) => acc + cur.memberCount, 0),
		apiping: await Math.floor(Math.random() * 1000),
		commands: "100.0",
		sprachkanaele: connectedchannels
	})
})

discordbotclient.on("message" + "Create", (message) => {
	const langs = ["de", "en"]
	let anzahldersprachen = 0
	ergebnis = langs.map(e => anzahldersprachen++)
	if ((message.content.startsWith("!info") && message.content.endsWith("!info")) || message.content.startsWith("!bot") && message.content.endsWith("!bot")) return message.reply(removetoken("Anzahl der Sprachen: " + anzahldersprachen))
})
