BlockEvents.rightClicked("scrapped:aspect_node", e => {
  let { level, player, block, server } = e;
  let { x, y, z } = block;
  let keyItem = "scrapped:rift_staff";
  let extractionConditions = !player.cooldowns.isOnCooldown(player.mainHandItem) && !player.crouching && player.offHandItem.id == "scrapped:quartz_sliver" && player.mainHandItem.id == keyItem;
  let breakConditions = !player.cooldowns.isOnCooldown(player.mainHandItem) && player.crouching && player.mainHandItem.id == keyItem;

  function extractSpirit() {
    server.runCommandSilent(`execute as @a at @s run title @s actionbar "§5you feel energies being released"`)
    server.runCommandSilent(`execute as @a at @s run playsound malum:spirit_picked_up block @a ~ ~ ~`)
    e.player.addItemCooldown(keyItem, 1200);
    if (block.properties.get('aspect') == 0) {
      player.give("malum:sacred_spirit")
      server.runCommandSilent(`execute as @a at @s run clear @s scrapped:quartz_sliver 1`)
    } else if (block.properties.get('aspect') == 1) {
      player.give("malum:wicked_spirit")
      server.runCommandSilent(`execute as @a at @s run clear @s scrapped:quartz_sliver 1`)
    } else if (block.properties.get('aspect') == 2) {
      player.give("malum:arcane_spirit")
      server.runCommandSilent(`execute as @a at @s run clear @s scrapped:quartz_sliver 1`)
    } else if (block.properties.get('aspect') == 3) {
      player.give("malum:eldritch_spirit")
      server.runCommandSilent(`execute as @a at @s run clear @s scrapped:quartz_sliver 1`)
    } else if (block.properties.get('aspect') == 4) {
      player.give("malum:aerial_spirit")
      server.runCommandSilent(`execute as @a at @s run clear @s scrapped:quartz_sliver 1`)
    } else if (block.properties.get('aspect') == 5) {
      player.give("malum:infernal_spirit")
      server.runCommandSilent(`execute as @a at @s run clear @s scrapped:quartz_sliver 1`)
    } else if (block.properties.get('aspect') == 6) {
      player.give("malum:aqueous_spirit")
      server.runCommandSilent(`execute as @a at @s run clear @s scrapped:quartz_sliver 1`)
    } else if (block.properties.get('aspect') == 7) {
      player.give("malum:earthen_spirit")
      server.runCommandSilent(`execute as @a at @s run clear @s scrapped:quartz_sliver 1`)
    }
    e.cancel();
  }
  function breakNode() {
    level.destroyBlock(block.pos, true)
    server.runCommandSilent(`execute as @a at @s run title @s actionbar "§5You feel a magical force break..."`)
    server.runCommandSilent(`execute as @a at @s run playsound malum:spark_unwoven block @a ~ ~ ~`)
    e.player.addItemCooldown(keyItem, 200);
    e.cancel();
  }

  if (extractionConditions) {
    extractSpirit()
  }
  if (breakConditions) {
    breakNode()
  }
})