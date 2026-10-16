// Original code by Minimaxi28, see https://github.com/Minimaxi28/Minimaxi-s-KubeJS-Things/wiki/1.21.1#pushreaction

StartupEvents.registry('block', event => {
  const $SoundType = Java.loadClass("net.minecraft.world.level.block.SoundType")
  const $AmethystClusterBlock = Java.loadClass("net.minecraft.world.level.block.AmethystClusterBlock")
  const $BlockBehaviourProperties = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour$Properties")
  const $PushReaction = Java.loadClass("net.minecraft.world.level.material.PushReaction")
    
  event.createCustom("scrapped:cinnabar_cluster", () => new $AmethystClusterBlock(7.0, 3.0, $BlockBehaviourProperties.of()
    .forceSolidOn().noOcclusion().sound($SoundType.AMETHYST_CLUSTER).destroyTime(1.5).explosionResistance(1.5).lightLevel(blockState => 0).pushReaction($PushReaction.DESTROY)
  )).tag("minecraft:mineable/pickaxe")
})

StartupEvents.registry("item", event => {
  const $BlockItem = Java.loadClass("net.minecraft.world.item.BlockItem")
  const $IProperties = Java.loadClass("net.minecraft.world.item.Item$Properties")

  event.createCustom("scrapped:cinnabar_shard", () => new $BlockItem(Block.getBlock("scrapped:cinnabar_cluster"),new $IProperties())).tag("c:cinnabar").displayName("item.scrapped.cinnabar_shard")
})
