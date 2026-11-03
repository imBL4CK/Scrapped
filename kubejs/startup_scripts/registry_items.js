StartupEvents.registry("item", (e) => {
    e.create("scrapped:raw_tin").tag("c:raw_materials").tag("c:raw_materials/tin");
    e.create("scrapped:redstone_coil");
    e.create("scrapped:shiny_tubes");
    e.create("scrapped:incomplete_logic_mechanism").tag("c:hide_from_recipe_viewers");
    e.create("scrapped:logic_mechanism");
    e.create("scrapped:plastic_sheet").tag("c:plastics");
    e.create("scrapped:tower_key");
    e.create("scrapped:ominous_tower_key");
    e.create("scrapped:alchemists_vision", "anim_helmet").rarity("uncommon").material("scrapped:alchemists_vision").geoModel((geo) => {
      geo.setSimpleModel("scrapped:geo/item/alchemists_vision.geo.json");
      geo.setSimpleTexture("scrapped:textures/item/alchemists_vision_model.png");
    })
    e.create("scrapped:recipe_speed_augment").rarity("uncommon");
    e.create("scrapped:energy_production_augment").rarity("uncommon");
    e.create("scrapped:energy_transfer_augment").rarity("uncommon");
    e.create("scrapped:energy_capacity_augment").rarity("uncommon");
    e.create("scrapped:basic_device_upgrade").unstackable().rarity("uncommon").tag("scrapped:device_upgrades");
    e.create("scrapped:double_device_upgrade").unstackable().rarity("uncommon").tag("scrapped:device_upgrades");
})
    