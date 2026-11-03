ItemEvents.modification((e) => {
  e.modify("scrapped:alchemists_vision", item => {
      const entry = Item.of(item.item().id).attributeModifiers;
      const attributes = entry.withModifierAdded(
        "malum:soul_ward_capacity",
        { amount: 3, id: "identifier", operation: "add_value", }, 
        "head"
      ).withModifierAdded(
        "minecraft:player.entity_interaction_range",
        { amount: 1, id: "identifier", operation: "add_value", }, 
        "head"
      ).withModifierAdded(
        "malum:soul_ward_recovery_rate",
        { amount: 0.15, id: "identifier", operation: "add_multiplied_base", }, 
        "head"
      )
      item.setAttributeModifiersWithTooltip(attributes.modifiers())
    }
  )
});