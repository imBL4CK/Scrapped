const $CreateGoggles = Java.loadClass("com.simibubi.create.content.equipment.goggles.GogglesItem");
const $IntegerProperty = Java.loadClass('net.minecraft.world.level.block.state.properties.IntegerProperty')

global.ASPECT_NODE_STATE = $IntegerProperty.create('aspect', 0, 7)

$CreateGoggles.addIsWearingPredicate((player) =>
  Ingredient.of("scrapped:alchemists_vision").testItem(player.headArmorItem),
);
