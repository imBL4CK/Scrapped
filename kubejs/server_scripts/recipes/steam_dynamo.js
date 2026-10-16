ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("scrapped:steam_dynamo", 20)
    .requireFluidPerTick("1x #c:steam")
    .produceEnergyPerTick(40)
    .resetOnError()
    
  e.recipes.custommachinery.custom_machine("scrapped:steam_dynamo", 20)
    .requireFluidPerTick("2x minecraft:water")
    .requireFuel()
    .produceEnergyPerTick(40)
    .resetOnError()
});
