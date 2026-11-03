ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("scrapped:magma_crucible", 1200)
    .requireEnergyPerTick(40)
    .requireItemOnEnd("#c:cobblestones")
    .produceFluid("1000x minecraft:lava")
    .resetOnError()

  e.recipes.custommachinery.custom_machine("scrapped:magma_crucible", 1200)
    .requireEnergyPerTick(40)
    .requireItemOnEnd("minecraft:magma_block")
    .produceFluid("1000x minecraft:lava")
    .resetOnError()

  e.recipes.custommachinery.custom_machine("scrapped:magma_crucible", 1200)
    .requireEnergyPerTick(40)
    .requireItemOnEnd("minecraft:obsidian")
    .produceFluid("1000x minecraft:lava")
    .resetOnError()
});
