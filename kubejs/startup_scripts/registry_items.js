StartupEvents.registry("item", (e) => {
    e.create("scrapped:raw_tin").tag("c:raw_materials").tag("c:raw_materials/tin");
    e.create("scrapped:redstone_coil");
    e.create("scrapped:shiny_tubes");
    e.create("scrapped:logic_mechanism");
    e.create("scrapped:plastic_sheet").tag("c:plastics");
    e.create("scrapped:tower_key");
    e.create("scrapped:ominous_tower_key");
    e.create("scrapped:recipe_speed_augment").rarity("uncommon");
    e.create("scrapped:energy_production_augment").rarity("uncommon");
    e.create("scrapped:energy_transfer_augment").rarity("uncommon");
    e.create("scrapped:energy_capacity_augment").rarity("uncommon");
    e.create("scrapped:basic_device_upgrade").unstackable().rarity("uncommon").tag("scrapped:device_upgrades");
    e.create("scrapped:double_device_upgrade").unstackable().rarity("uncommon").tag("scrapped:device_upgrades");
})