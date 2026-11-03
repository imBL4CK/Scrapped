// Original code by Minimaxi28, see https://github.com/Minimaxi28/Minimaxi-s-KubeJS-Things/wiki/1.21.1#pushreaction

StartupEvents.registry('block', (e) => {
  const $SoundType = Java.loadClass("net.minecraft.world.level.block.SoundType")
  const $AmethystClusterBlock = Java.loadClass("net.minecraft.world.level.block.AmethystClusterBlock")
  const $SnowLayerBlock = Java.loadClass('net.minecraft.world.level.block.SnowLayerBlock')
  const $BlockBehaviourProperties = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour$Properties")
  const $PushReaction = Java.loadClass("net.minecraft.world.level.material.PushReaction")
    
  e.createCustom("scrapped:cinnabar_cluster", () => new $AmethystClusterBlock(7.0, 3.0, $BlockBehaviourProperties.of()
    .forceSolidOn().noOcclusion().sound($SoundType.AMETHYST_CLUSTER).destroyTime(1.5).explosionResistance(1.5).pushReaction($PushReaction.DESTROY)
  )).tag("minecraft:mineable/pickaxe").tag("minecraft:needs_iron_tool")

  e.createCustom("scrapped:bronze_pile", () => new $SnowLayerBlock($BlockBehaviourProperties.of()
   .forceSolidOff().noOcclusion().sound($SoundType.CHAIN).destroyTime(0.3).explosionResistance(1.5).pushReaction($PushReaction.DESTROY)
  )).tag("minecraft:mineable/pickaxe").tag("minecraft:needs_stone_tool")

  e.createCustom("scrapped:silver_pile", () => new $SnowLayerBlock($BlockBehaviourProperties.of()
   .forceSolidOff().noOcclusion().sound($SoundType.CHAIN).destroyTime(0.3).explosionResistance(1.5).pushReaction($PushReaction.DESTROY)
  )).tag("minecraft:mineable/pickaxe").tag("minecraft:needs_stone_tool")
})

StartupEvents.registry("item", (e) => {
  const $BlockItem = Java.loadClass("net.minecraft.world.item.BlockItem")
  const $ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties")

  e.createCustom("scrapped:cinnabar_cluster", () => new $BlockItem(Block.getBlock("scrapped:cinnabar_cluster"),new $ItemProperties())).tag("c:cinnabar")
  e.createCustom("scrapped:bronze_pile", () => new $BlockItem(Block.getBlock("scrapped:bronze_pile"),new $ItemProperties()))
  e.createCustom("scrapped:silver_pile", () => new $BlockItem(Block.getBlock("scrapped:silver_pile"),new $ItemProperties()))
})
