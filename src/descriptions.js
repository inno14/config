/*

This file holds all the descriptions for a role

Format:

"role name": "You are the **role**. You can do this thing with the command `+thing [player number]`. After that thing, you can do this thing. Your aura is **Unknown** and your Team is **something**.",

Add a line before the } at the bottom of the file, 
and make sure the line you add has a comma on the end.

*/

module.exports = {
  villager: "You are a regular villager without any special abilities! Your aura is **Good** and you belong to the **Village** team!",
  mayor: "Once during a game, you can reveal your role by doing `+reveal`, which will make your vote count double during the rest of the game. Your aura is **Good** and you belong to the **Village** team.",
  president: "You are the president! Everyone knows who you are! If you die, the village loses. Your aura is **Good** and you belong to the **Village** team.",
  pacifist: "Once per game, you can reveal the role of a player to everybody and prevent anyone from voting that day by doing `+reveal [player]`. Your aura is **Good** and you belong to the **Village** team.",
  loudmouth: "You can select a player by doing `+tag [player]`, whose role will be revealed when you die. You can only select after night 1 ends. Your aura is **Good** and you belong to the **Village** team.",
  "grumpy grandma": "After the first night, you can select a player by doing `+mute [player]` who cannot talk or vote during the next day. Your aura is **Good** and you belong to the **Village** team.",
  doctor: "Choose one player to protect every night by doing `+heal [player]` . That player cannot be killed that night. Your aura is **Good** and you belong to the **Village** team.",
  "beast hunter": "At night you can place a trap on a player by doing `+trap [player]`. It will become active the following night. This player cannot be killed at night. If the player is attacked by werewolves, the weakest werewolf will die. The attack of solo killers, zombies and the sect leader will trigger the trap but not kill them. Moving the trap when active will deactivate the trap. Your aura is **Unknown** and you belong to the **Village** team.",
  "tough guy": "You can choose one player to protect every night by doing `+protect [player]`. If you or that player is attacked, neither dies and instead, you and the attacker will both see each other's role. Because of your injuries, you will die at the end of the following day. Your aura is **Good** and you belong to the **Village** team.",
  witch: "You have 2 potions. One will kill a player by doing `+poison [player]` and the other will protect a player by doing `+protect [player]`. The protect potion is only consumed if the player was attacked. You cannot kill in the first night. Your aura is **Unknown** and you belong to the **Village** team.",
  bodyguard: "You can choose one player to protect every night by doing `+protect [player]`. That player cannot be killed that night and instead you will be attacked if someone attacks them. Because you are strong, you will survive the first attack but you will die on the second attack. Every night, you automatically protect yourself. Your aura is **Good** and you belong to the **Village** team.",
  gunner: "You have 2 bullets which you can use to kill someone by doing `+shoot [player]`. Only one bullet can be fired each day. The shots are very loud so that your role will be revealed after the first shot. You cannot shoot during the discussion phase on the first day. Your aura is **Unknown** and you belong to the **Village** team.",
  avenger: "After the first night, you can select a player by doing `+tag [player]` that will be killed when you die. Your aura is **Good** and you belong to the **Village** team.",
  jailer: "Select a target each day by doing `+jail [player]`, to put in jail during the next night. If you change your mind about jailing then use `+jail cancel `. At night, you can talk privately with your target using `+j [message]`. Your target cannot act or be attacked, but if you find them suspicious, you can kill them by doing `+shoot`. Your aura is **Unknown** and you belong to the **Village** team.",
  forger: "You can forge 2 shields and then a sword by doing `+forge`. Forging takes 1 day and each new item must be given to another player before forging the next one by doing `+give [player]`. Each shield will save a player once from being attacked at night. The sword can be used to kill another player. Your aura is **Unknown** and you belong to the **Village** team.",
  marksman: "At night, you can mark a player as your target by doing `+mark [player]`. After the next day, you can kill by doing `+shoot` or change your target. If you try to kill a villager, your shot will backfire and kill you instead. Your aura is **Unknown** and you belong to the **Village** team.",
  priest: "You can throw holy water on another player by doing `+water [player]`. If that player is a werewolf, they die. If not, you die. Your aura is **Good** and you belong to the **Village** team.",
  medium: "During the night, you can talk anonymously with the dead by doing `+d [message]`. Once during the game, you can revive a dead player by doing `+revive [player]`. Your aura is **Unknown** and you belong to the **Village** team.",
  detective: "Each night, you can select two players to uncover if they are in the same team. You can check the players by doing `+check [player1] [player2]`. Possible teams are: village, werewolves, fool, headhunter, serial killer etc. Your aura is **Good** and you belong to the **Village** team.",
  "aura seer": "Each night, you can select a player to uncover their alignment by doing `+check [player]`: Good, Evil or Unknown. Evil players belong to the werewolves team and Good players belong to the villagers team.\n\nUnknown targets can be: Gunner, Jailer, Marksman, Medium, Witch, Forger, Beast Hunter, Fortune Teller, Alpha Werewolf, Fool, Headhunter, Serial Killer, Arsonist, Bomber, Corruptor, Cannibal, Illusionist, Bandit, Accomplice, Sect Leader, Zombie, Sect Hunter, Mad Scientist, Naughty Boy, Doppelganger or Lone Wolf.\n\nYour aura is **Good** and you belong to the **Village** team.",
  "seer apprentice": "You are a normal villager until a player with an information role is killed, at which point you inherit their role. If that player is revived, your role reverts back to seer apprentice. Your aura is **Good** and you belong to the **Village** team.",
  seer: "Each night, you can select a player to uncover their role by doing `+check [player]`. Your aura is **Good** and you belong to the **Village** team.",
  sheriff: "At night, you can select someone to watch by doing `+snipe [player]`. If that player dies during the night, you will uncover two possible suspects who might have killed that player.. Your aura is **Good** and you belong to the **Village** team.",
  "spirit seer": "Each night, you select up to two players by doing `+check [player1] [player2]` (you can check 1 person too). At the beginning of the next day, you will be informed if either of those two players have killed last night. Your aura is **Good** and you belong to the **Village** team.",
  "red lady": "At night, you can visit another player by doing `+visit [player]`. If you are attacked while visiting, you will not be killed. However, if you visit a player that is attacked or is evil, you will die! Your aura is **Good** and you belong to the **Village** team.",
  "fortune teller": "You have two cards which you can give to other players by doing `+give [player]`, at night. These players can use these cards to reveal their roles. Your aura is **Unknown** and you belong to the **Village** team.",
  "flower child": "You are a villager who can once protect a player from being lynched by the village by doing `+protest [player]`. Your aura is **Good** and you belong to the **Village** team.",
  cupid: "During the first night, you can select two players to be in a love couple by doing `+couple [player1] [player2]`. You win if the village wins or if the lovers are the last survivors. Your aura is **Good** and you belong to the **Village** team.",
  "santa claus": 'You are a villager that only appears during Christmas time. Each night, you can either send a "HO HO HO" to all players by doing +hohoho or gift a dead but still connected player by doing `+give [player]`. These gifts have no further effect on the game! Your aura is **Good** and you belong to the **Village** team.',
  "grave robber": "At the beginning of the game, you are assigned a target. When your target dies, you will steal their role, potentially switching teams. Your aura is **Good** and you belong to the **Village** team.",
  cursed: "You are a villager until the werewolves try to kill you, at which point, you become a werewolf. You cannot be converted into another team by sect leader etc. Your aura is Good and you belong to the **Village** or **Werewolves** team depending on if you have been converted.",
  werewolf: "Choose one player to kill every night by doing `+vote [player]`. Your aura is **Evil** and you belong to the **Werewolves** team.",
  "wolf seer": "Each night, you can select a player to uncover their role by doing `+check [player]`. If you are the last werewolf alive, or you resign your ability by doing `+resign`, you become a regular werewolf and can vote to kill players by doing `+vote [player]`. Your aura is **Evil** and you belong to the **Werewolves** team.",
  "junior werewolf": "You are a Junior Werewolf. Because you are so cute, you can select another player to be killed when you are dead by doing `+tag [player]`. You can vote to kill with the other werewolves by doing `+vote [player]`, at night. Your aura is **Evil** and you belong to the **Werewolves** team.",
  "wolf shaman": "During the day, you can enchant another player by doing `+enchant [player]`. For seers, aura seers etc. this player will appear to be a wolf shaman at the next night. If you are the last werewolf, you cannot enchant anybody and can only vote to kill with the other werewolves by doing `+vote [player]`. Your aura is **Evil** and you belong to the **Werewolves** team.",
  "werewolf berserk": 'Once per game. you can activate a werewolves "frenzy" during the day by doing `+frenzy`. If during the night your selected victim is being protected, your victim and all protectors of your victim will die. The frenzy will only be announced to the werewolves. You can vote to kill with other werewolves by doing `+vote [player]`. Your aura is **Evil** and you belong to the **Werewolves** team.',
  "nightmare werewolf": 'Twice during the game, you can select a during the day to "fall asleep" for one night by doing `+nightmare [player]`. That player won\'t be able to use any abilities for one night. You can vote to kill with the werewolves by doing `+vote [player]`. Your aura is **Evil** and you belong to the **Werewolves** team.',
  "guardian wolf": "You are a werewolf who can once protect a player from being lynched by the village by doing `+protest [player]`. You can vote to kill with other werewolves by doing `+vote [player]`. Your aura is **Evil** and you belong to the **Werewolves** team.",
  "kitten wolf": "You are a werewolf. When you are killed, the next werewolf vote will convert a player to the werewolf team instead of killing them. You can vote with the werewolves by doing `+vote [player]`. Your aura is **Evil** and you belong to the **Werewolves** team.",
  "shadow wolf": "Once per game, you can double your team's vote during the day, while hiding all votes by doing `+shadow`. You can vote with the werewolves by doing `+vote [player]`. Your aura is **Evil** and you belong to the **Werewolves** team.",
  "wolf pacifist": "Once per game, you can reveal the role of a player to everybody and prevent anybody from voting during that day by doing `+reveal [player]`. You can vote with the werewolves by doing `+vote [player]`. Your aura is **Evil** and you belong to the Werewolves team.",
  sorcerer: "Each night, you can select a player to uncover their role by doing `+check [player]`. If another player checks your role, they will see the weakest information role in the current game instead of sorcerer. You will be converted to a regular werewolf when all werewolves have been killed. You cannot talk or vote with the werewolves at night. Your aura is **Evil** and you belong to the **Werewolves** team.",
  "alpha werewolf": "You are a regular werewolf, except your vote counts double when voting with the werewolves by doing `+vote [player]`. Once per day, you can send a private message to the other werewolves during the day that only they can see. Your aura is **Unknown** and you belong to the **Werewolves** team.",
  fool: "Your only goal is to get lynched by the village. You win if they lynch you. Your aura is **Unknown** and you are a **Solo** team player.",
  headhunter: "Your goal is to get your target lynched by the village during the day. Your target must be lynched before you die in order to win. If your target dies another way, you become a regular villager. Your aura is **Unknown** and you are a **Solo** team player until your target dies, at which point, you belong to the **Village** team.",
  "serial killer": "Each night, you can kill one player by doing `+stab [player]`. You cannot be killed by the werewolves. Your aura is **Unknown** and you are a **Solo** team player.",
  arsonist: "Every night, you can either select up to two players to douse with gasoline by doing `+douse [player1] [player2]`, or ignite all doused players which kills them by doing `+ignite`. You cannot be killed by the werewolves. Your aura is **Unknown** and you are a **Solo** team player.",
  "sect leader": "Each night, you can convert a player to join your sect by doing `+convert [player]`. All sect members flee from the village if the Sect Leader dies. You cannot converts werewolves and solo killers. Your aura is **Unknown** and you belong to the **Sect** team.",
  corruptor: 'Each night, you can select one player to "glitch" by doing `+corrupt [player]`. That player won\'t be able to use their role abilities, speak or vote the following day and will die at the end of the day. The role of that player will not be revealed when dying, The player cannot be revived by the medium. You cannot be killed by the werewolves. Your aura is **Unknown** and you are a **Solo** team player.',
  cannibal: "Each night, you can either kill a player by doing `+eat [players]` or save up your hunger to eat up to 5 players in one night. You cannot be killed by the werewolves. Your aura is **Unknown** and you are a **Solo** team player.",
  zombie: "Every night you can bite a player by doing `+convert [player]` which will turn that player into a zombie at the end of the next night. Bitten players will remain in their team for one day before converting. All zombies can select different targets. Only players from the village team, the headhunter and the fool can be converted. Players who were converted to zombies will decay and die after three nights as a zombie. They will also die if they attempt to bite a werewolf. You win if all players have been converted. Your aura is **Unknown** and you belong to the **Zombie** team.",
  bomber: "At night, you can place a bomb by doing `+bomb [players]` which will explode during the the following night. You cannot be killed by the werewolves. Your aura is **Unknown** and you are a **Solo** team player.",
  illusionist: "Each night, you can disguise a player by doing `+enchant [player]`. This player will appear to be an illusionist to seer roles. You can kill all disguised players during the discussion phase by doing `+snap`. You cannot be killed by the werewolves. Your aura is **Unknown** and you are a **Solo** team player.",
  bandit: "Find an accomplice by converting a player at night by doing `+convert [player]`. Together you can kill one player each night by doing `+stab [player]`. If your accomplice dies, you can select a new one. You cannot be killed by the werewolves. Your aura is **Unknown** and you belong to the **Bandits** team.\n\nFor more information about Accomplice, do `+roleinfo Accomplice`",
  accomplice: "The bandit can convert another player to be their accomplice at night. As an accomplice, you and the bandit can select a player to kill at night by doing `+stab [player]`. If the vote is draw, your vote wins. Your aura is **Unknown** and you belong to the **Bandits** team.\n\nFor more information about Bandit, do `+roleinfo Bandit`",
  alchemist: "You have two potions, red and black. Every night, you can give them to 2 different players by doing `+give [red/black] [player number]`. Both of them will be warned that they might die at the end of the day but only the player with the black potion will actually die as well as the red potion is only deadly if it is given second time. They don't know which potion they have. Your aura is **Unknown** and you are a **Solo** team player.",
  undertaker: "After Day 1, you may select a player using `+watch` to watch them. If that player is killed, you can know one of their teammates at the end of that game phase. You may only select one player per game. Your aura is **Good** and you are a **Village** team player.",
  hacker: "You can hack two players per night using `+hack [player 1] [player 2]` (you can use this command once per night so use carefully). If a player is hacked once, you will know their role. If a player is hacked twice, they will die. You can also mute a hacked player by using `+mute`, making them not able to talk or vote for the day. Your aura is **Unknown** and you are a **Solo** team player.",
  dreamcatcher: "You can select a player every day by using `+hypnotize`. At night, this person will be under your control, and you can use their abilities. At the end of the night, you attack the person that you are controlling. Your aura is **Unknown** and you are a **Solo** team player.",
  prognosticator: "At night, you can announce that no one will die the next night by using `+peace`. At day, you can announce that the chosen player's vote will be taken away the next day by using `+terror`. Your aura is **Unknown** and you are a **Village** team player.",
  jack: "During the day, you are able to select two people whether they would trick or treat and which option would kill them by using `+trickorteat <player1> <player2> <trick/treat>`. Your aura is **Unknown** and you are a **Solo** team player.",
  "pumpkin king": "Once per game, you can go trick or treating by giving your candy bucket to a dead player using `+bucket <player>`. That player will add a candy into the bucket and then either pass it on to another dead player, or give it back to you. Once the candy bucket has been returned, all players who have given candy will receive a small gift. Your aura is **Good** and you are a **Village** team player.",
  modded: "You are a modded role. When you receive this role, you will get further instructions from the narrator on what you are supposed to do.",
  "astral wolf": " You are the Astral Wolf. During the day, you can give any non-wolf a blessing with [command], granting them the ability to see someone else's role the next night. After you give your blessing, you may mark three players using [command]. If any one of those marked players dies, the remaining marked players will die with them. Your aura is **Evil** and you belong to the **Werewolves** team.",
  "evil detective": "Each night you can select two players including yourself. If the two players are in different teams, then they will both die. If you select yourself, only the other player dies. Your aura is **Unknown** and you are a **Solo** team player.", 
  "wolf trickster": "You can choose a player during the day. When that player dies by any means other than the werewolves, you steal their appearance: they will be seen as wolf trickster and you will be seen as their role when checked. Your aura is **Evil** and you belong to the **Werewolves** team.",
  "ghost lady": "At night you can visit another player. If that player gets attacked, they will be protected and your role will be revealed to them. You cannot visit after protecting once. Your aura is **Good** and you belong to the **Village** team.",
  baker: "Each night you can select a player to give them bread, giving them an extra vote for the next day. Your aura is **Good** and you belong to the **Village** team.",
  "split wolf": "During the first three nights, you can choose to bind yourself to another player. If you do this, you will count double to the werewolf win condition. However, if one of you is killed, the other will also die. Your aura is **Evil** and you belong to the **Werewolves** team.",
   vigilante: "During the day you can either shoot or reveal another player. Both actions can only be done once, but not during the same day. Your aura is **Unknown** and you belong to the **Village** team.",
   preacher: "When a villager is lynched, you gain one extra vote. Activate your ability to use the extra votes during the day. Once used, you lose your extra votes. Your aura is **Good** and you belong to the **Village** team.",
   "easter bunny": "You are a villager who only appears during the Easter time. Each night you automatically send a greeting to all players. Additionally you can gift a special item to a dead but still connected player. Give up to 4 gifts to dead players. These gifts have no further effect on the game! Your aura is **Good** and you belong to the **Village** team.",
   warden: "Select two players each day to put into jail the next night. At night, your targets can talk to each other while you listen. Your targets cannot act or be attacked, but if you find either one suspicious, you can give your targets a weapon. Villagers can use this weapon to kill the other player. If both of your targets are werewolves they can choose to kill you instead. Your aura is **Unknown** and you belong to the **Village** team.",
  "night watchman": "Two times per game, you can select a player to protect. That player cannot be killed that night. Additionally, you can see what players are being protected by other protectors. Your aura is **Good** and you belong to the **Village** team.",
   mortician: "Each night you can select a player killed by non-villagers and uncover two possible suspects who might have killed that player. Your aura is **Good** and you belong to the **Village** team.", 
   ritualist: "During the night you can talk anonymously with the dead. You can cast a spell on a player. When that player dies, they will be revived after a full phase, even if you are already dead. Your aura is **Unknown** and you belong to the **Village** team.", 
}
