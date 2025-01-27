/*

This file complies all the config files into one config object for the bot
Nothing in this file should be adjusted unless instructed by Shadow

*/

const { allRoles, roles } = require("./roles.js")
const getRole = (rolename) => {
  rolename = rolename.toLowerCase()
  rolename = rolename.replace("-", " ")
  let foundRole = roles.find((x) => x.name.toLowerCase() == rolename)
  if (!foundRole) return { name: "Unknown Role", description: "Unable to find that role!", icon: "https://cdn.discordapp.com/emojis/424929422190182422.png?v=1" }
  return foundRole
}

module.exports = {
  emojis: {},
  getRole,
  allRoles,
  roles,
  botadmins: ["406412325973786624", "439223656200273932"],
  fn: require("./fn.js"),
  ids: require("./ids.js"),
  shop: require("./shop.js"),
  cmi: require("./cmi.js"),
  xp: require("./xp.js"), 
  rosewheel: require("./rosewheel.js"), 
  lootbox: require("./lootbox.js"), 
  soloKillers: ["Serial Killer", "Arsonist", "Bomber", "Corruptor", "Cannibal", "Illusionist", "Bandit", "Alchemist"]
}

module.exports.bombPlacements = ["1 2 3", "2 3 4", "5 6 7", "6 7 8", "9 10 11", "10 11 12", "13 14 15", "14 15 16", "1 5 9", "5 9 13", "2 6 10", "6 10 14", "3 7 11", "7 11 15", "4 8 12", "8 12 16", "1 6 11", "2 7 12", "3 6 9", "4 7 10", "5 10 15", "6 11 16", "7 10 13", "8 11 14"]
module.exports.emojis = {
  coin: `<:coin:606434686931173377>`,
  rose: `<:rosesingle:807256844191793158>`,
  gem: `<:gem:833431075309092904>`,
  bouquet: `<:rosebouquet:808545517209387008>`,
}
