StartupEvents.registry("block", (e) => {
    e.create("scrapped:tin_ore")
        .tagBoth("minecraft:mineable/pickaxe")
        .tagBoth("minecraft:needs_iron_stone")
        .tagBoth("c:ores")
        .tagBoth("c:ores/tin")
        .requiresTool(true)
        .soundType("stone")
        .hardness(3)
        .resistance(3)
        .mapColor(11)

    e.create("scrapped:deepslate_tin_ore")
        .tagBoth("minecraft:mineable/pickaxe")
        .tagBoth("minecraft:needs_iron_stone")
        .tagBoth("c:ores")
        .tagBoth("c:ores/tin")
        .requiresTool(true)
        .soundType("deepslate")
        .hardness(4.5)
        .resistance(3)
        .mapColor(59)

    e.create("scrapped:redstone_energy_cell_frame")
        .tagBoth("minecraft:mineable/pickaxe")
        .tagBoth("minecraft:needs_iron_tool")
        .requiresTool(true)
        .soundType("metal")
        .hardness(5)
        .resistance(6)
        .mapColor(25)
        .waterlogged()
        .notSolid()
        .noValidSpawns(true)
        .suffocating(false)
        .box(0, 0, 0, 0.25, 1, 0.25, false)
        .box(0.75, 0, 0, 1, 1, 0.25, false)
        .box(0.75, 0, 0.75, 1, 1, 1, false)
        .box(0, 0, 0.75, 0.25, 1, 1, false)
        .box(0.25, 0, 0, 0.75, 0.25, 0.25, false)
        .box(0.25, 0.75, 0, 0.75, 1, 0.25, false)
        .box(0.25, 0, 0.75, 0.75, 0.25, 1, false)
        .box(0.25, 0.75, 0.75, 0.75, 1, 1, false)
        .box(0, 0, 0.25, 0.25, 0.25, 0.75, false)
        .box(0, 0.75, 0.25, 0.25, 1, 0.75, false)
        .box(0.75, 0, 0.25, 1, 0.25, 0.75, false)
        .box(0.75, 0.75, 0.25, 1, 1, 0.75, false)

    e.create("scrapped:redstone_energy_cell", "custommachinery:custom_machine");

    e.create("scrapped:dynamo_frame")
        .tagBoth("minecraft:mineable/pickaxe")
        .tagBoth("minecraft:needs_iron_tool")
        .requiresTool(true)
        .soundType("metal")
        .hardness(5)
        .resistance(6)
        .mapColor(6)
        .waterlogged()
        .notSolid()
        .noValidSpawns(true)
        .suffocating(false)
        .box(0, 0, 0, 1, 0.625, 1, false)
        .box(0.25, 0.625, 0.25, 0.75, 1, 0.75, false)
        
    e.create("scrapped:steam_dynamo", "custommachinery:custom_machine");
    e.create("scrapped:magmatic_dynamo", "custommachinery:custom_machine");
    e.create("scrapped:bronze_drum", "custommachinery:custom_machine");
    e.create("scrapped:disc_engraver", "custommachinery:custom_machine");
    
    e.create("scrapped:machine_frame")
        .tagBoth("minecraft:mineable/pickaxe")
        .tagBoth("minecraft:needs_iron_tool")
        .requiresTool(true)
        .soundType("metal")
        .hardness(5)
        .resistance(6)
        .mapColor(6)

    e.create("scrapped:redstone_furnace", "custommachinery:custom_machine");
    e.create("scrapped:fluid_encapsulator", "custommachinery:custom_machine");
    e.create("scrapped:magma_crucible", "custommachinery:custom_machine");
    e.create("scrapped:fractionating_still", "custommachinery:custom_machine");
    e.create("scrapped:storage_crate", "custommachinery:custom_machine");
})