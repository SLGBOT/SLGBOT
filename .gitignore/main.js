const Discord = require('discord.js');
const Client = new Discord.Client();

const prefix = ";"


Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `;commandes | SLG`, type: 0} });
});


Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);

	if (command === "say") {
	if (message.member.hasPermission("MANAGE_MESSAGES"))
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(args.join(" "));
		message.channel.send({embed})
	} else

	if (message.content === prefix + `efef`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("")
            .setFooter("Copyright 2018 © SLG")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }
    
    if (message.content === prefix + `invite`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .setTitle("__SLG | invite__")
            .setDescription("Vous avez effectué la commande invite.")
            .addField("Invite", "[Cliquez ici pour inviter SLG | BOT](https://discordapp.com/oauth2/authorize?client_id=547454260988870686&scope=bot&permissions=8)")
            .setFooter("Soutien nous : SUPERLEAGUEGAME")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }
    
    if (message.content === prefix + `aide`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .setTitle("__SLG | Aide__")
            .setDescription("Vous avez effectué la commande aide.")
            .addField("Besoin d'aide ?", "Dirige toi vers le salon 【aide】et fais la commande ``+new``")
            .setFooter("Soutien nous : SUPERLEAGUEGAME")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }
    
    if (message.content === prefix + `slg`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .setTitle("__SLG | Réseaux Sociaux__")
            .setDescription("Vous avez effectué la commande slg.")
            .addField("__Youtube__", "[ | Clic | ](https://www.youtube.com/channel/UC0Kk_3WM0wCuMkvBkOl8K1A?view_as=subscriber)")
            .setFooter("Soutien nous : SUPERLEAGUEGAME")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }
    
    if (message.content === prefix + `soutien`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .setTitle("__SLG | Soutiens__")
            .setDescription("Vous avez effectué la commande soutiens.")
            .addField("__Nombre de soutiens__", "``16 Soutiens ~ Approximativement $3.00~``")
            .setFooter("Soutien nous : SUPERLEAGUEGAME")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }
    
    if (message.content === prefix + `info`){
        var help_embed = new Discord.RichEmbed()
            .setDescription("Informations du Discord")
            .addField("Nom du discord", message.guild.name)
            .addField("Utilisateurs sur le discord", message.guild.memberCount)
            .setColor("RANDOM")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }
    
    if (message.content === prefix + `commandes`){
        var help_embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("__Listes des commandes - (5)__")
            .setDescription("Pour pouvoir effectué la commande, veuillez mètre avant la commande ``;<commande>``")
            .addField("Général - (5)", "``invite``, ``aide``, ``slg``, ``soutien``, ``info``")
            .setFooter("Créateur du bot  : Néo#0486")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
	}
	 
	 

});

Client.login(process.env.TOKEN);
