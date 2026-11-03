ServerEvents.recipes((e) => {
  e.forEachRecipe({ type: "minecraft:smelting", }, (recipe) => {
    if (recipe.originalRecipeResult.id == "malum:arcane_charcoal") return
    if (recipe.originalRecipeResult.id == "minecraft:charcoal") return

    e.recipes.custommachinery.custom_machine("scrapped:redstone_furnace", 200)
      .requireEnergyPerTick(20)
      .requireItemOnEnd(recipe.originalRecipeIngredients[0])
      .produceItem(Item.of(recipe.originalRecipeResult.id))
      .resetOnError();
  });
});
