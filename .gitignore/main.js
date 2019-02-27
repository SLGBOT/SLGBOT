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
            .addField("Besoin d'aide ?", "Dirige toi vers le salon #【aide】et fais la commande ``+new``")
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
	
    if (message.content === prefix + `zts`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .setTitle("__ZTS | Réseaux Sociaux__")
            .setDescription("Vous avez effectué la commande zts.")
            .addField("__Youtube__", "[ | Clic | ](https://www.youtube.com/channel/UCWQ_PiGziCV1uAIb6ZdGahA?view_as=subscriber)")
            .setFooter("Abonne toi ! :)")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

    if (message.content === prefix + `soutien`){
        var help_embed = new Discord.RichEmbed()
            .setColor("#D31E34")
            .addField(":cyclone: Mise à jour (Code Créateur) :", "``Mise à jour des soutiens en cours ...``")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

    
    if (message.content === prefix + `soutien`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .setTitle("__SLG | Soutiens__")
            .setDescription("Vous avez effectué la commande soutiens.")
            .addField("__Nombre de soutiens__", "``18 Soutiens | Approximativement $6.49``")
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
            .setColor("#35CEB1")
            .addField(":computer: Commandes :", "  \n   \n **;invite** : Sert à inviter le bot sur votre discord ! \n   \n **;soutien** : Sert à voir en temps réel le nombre de soutiens ! \n   \n **;aide** : Sert à t'aider,tu as juste à créer un ticket : ``+new`` ! \n   \n **;slg** ! Sert à te donner les réseauc sociaux de slg ! \n   \n **;info** : Sert à voir le nombres d'utilisateurs connecté sur le discord !")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
	}
	
	    if (message.content === prefix + `commandes`){
        var help_embed = new Discord.RichEmbed()
            .setColor("#D31E34")
            .addField(":computer: Commandes Staff :", "  \n   \n **;ban** : Sert à bannir les personnes ! \n   \n **;kick** : Sert à expulser des personnes ! \n   \n **;warn** : Sert à avertir des personnes !")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
	}

	    if (message.content === prefix + `ban`){
        var help_embed = new Discord.RichEmbed()
            .setColor("#D31E34")
            .addField(":computer: Ban (Staff) :", "``Vous navez pas les autorisations nécessaire !``")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
	}
	
           if (message.content === prefix + `kick`){
        var help_embed = new Discord.RichEmbed()
            .setColor("#D31E34")
            .addField(":computer: Kick (Staff) :", "``Vous navez pas les autorisations nécessaire !``")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
	}
	
	   if (message.content === prefix + `warn`){
        if (!messag)
        var help_embed = new Discord.RichEmbed()
            .setColor("#D31E34")
            .addField(":computer: Warn (Staff) :", "``Vous navez pas les autorisations nécessaire !``")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    
    }

    


});

Client.login(process.env.TOKEN);
