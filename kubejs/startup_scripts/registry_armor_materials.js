StartupEvents.registry("armor_material", (e) => {
  e.create("scrapped:alchemists_vision")
    .defense({
      helmet: 3,
      chestplate: 0,
      leggings: 0,
      boots: 0
    })
    .enchantmentValue(15)
    .equipSound("minecraft:item.armor.equip_netherite")
    .repairIngredient(() => Ingredient.of("malum:soul_stained_steel_ingot"))
    .toughness(2)
    .knockbackResistance(0)
});