import { World, Commands } from "Minecraft"

//Prefix for all custom commands
const commandPrefix = "!"

//The function that will handle all custom command inputs and outputs
function customCommand(command, msg) {
    if (command.split(" ")[0] == "spawn") {
        Commands.run(`execute "${msg.sender.name}" ~~~ tp 1399 67 1656`)
    } else if (command.split(" ")[0] == "help") {
        Commands.run(`tellraw "${msg.sender.name}" {"rawtext":[{"text":"§7- ${commandPrefix}help: §aLists all custom commands available.\\n§7- ${commandPrefix}spawn: Teleports the player to spawn/hub.\\n§7- ${commandPrefix}version: §aShows the Behaviour Pack version.\\n§7- ${commandPrefix}credits: §aLists credits."}]}`)
    } else if (command.split(" ")[0] == "credits") {
        Commands.run(`tellraw "${msg.sender.name}" {"rawtext":[{"text":"Resource Pack created by LeRabbitKing. Custom Command Library created by Sammster 10 on Youtube."}]}`)
    } else if (command.split(" ")[0] == "version") {
        Commands.run(`tellraw "${msg.sender.name}" {"rawtext":[{"text":"BP Version: 1.2.0"}]}`)
    } else {
        Commands.run(`tellraw "${msg.sender.name}" {"rawtext":[{"text":"§cCustom command not found! Please type §7${commandPrefix}help §cfor a list of all avalible commands"}]}`)
    }
}

//Checks if a command was run (checks for the prefix)
World.events.beforeChat.subscribe(msg => {
    if (msg.message.substr(0, commandPrefix.length) == commandPrefix) {
        msg.canceled = true
        customCommand(`${msg.message.substr(commandPrefix.length, msg.message.length - 1)}`, msg)
    }
})
