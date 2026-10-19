StartupEvents.registry("item", (e) => {
    e.create("scrapped:redstone_coil");
    e.create("scrapped:basic_device_upgrade").unstackable().rarity("uncommon").tag("scrapped:device_upgrades");
    e.create("scrapped:double_device_upgrade").unstackable().rarity("uncommon").tag("scrapped:device_upgrades");
    e.create("scrapped:tower_key");
    e.create("scrapped:ominous_tower_key");
})