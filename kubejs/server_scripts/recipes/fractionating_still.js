ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("scrapped:fractionating_still", 200)
    .requireEnergyPerTick(100)
    .requireFluidPerTick("1x #c:crude_oil")
    .produceFluidPerTick("1x scrapped:light_fuel")
    .produceFluidPerTick("1x scrapped:heavy_fuel")
    .produceItem("8x blocksabound:tar").chance(0.5)
    .resetOnError()

  e.recipes.custommachinery.custom_machine("scrapped:fractionating_still", 200)
    .requireEnergyPerTick(100)
    .requireFluidPerTick("1x #c:water")
    .produceFluidPerTick("1x scrapped:steam")
    .resetOnError()
});
