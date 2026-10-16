ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("scrapped:magmatic_dynamo", 20)
    .requireFluidPerTick("1x #c:lava", "lava_tank")
    .produceEnergyPerTick(40)
    .resetOnError()
});
