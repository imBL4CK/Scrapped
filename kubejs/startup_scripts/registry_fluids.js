StartupEvents.registry("fluid", (e) => {
    //Molten Lumium
    e.create("scrapped:molten_lumium", "thick")
        .tag("c:molten_lumium")
        .tag("c:molten/lumium")
        .tag("slag:molten_metals")
        .tag("slag:hot_fluids")
        .stillTexture("scrapped:fluid/molten_lumium_still")
        .flowingTexture("scrapped:fluid/molten_lumium_flow")
        .tint(0xffffff)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
            fluidType.canSwim(false);
            fluidType.canDrown(false);
        })
    //Molten Signalum
    e.create("scrapped:molten_signalum", "thick")
        .tag("c:molten_signalum")
        .tag("c:molten/signalum")
        .tag("slag:molten_metals")
        .tag("slag:hot_fluids")
        .stillTexture("scrapped:fluid/molten_signalum_still")
        .flowingTexture("scrapped:fluid/molten_signalum_flow")
        .tint(0xffffff)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
            fluidType.canSwim(false);
            fluidType.canDrown(false);
        })
    //Molten Soul Stained Steel
    e.create("scrapped:molten_soul_stained_steel", "thick")
        .tag("c:molten_soul_stained_steel")
        .tag("c:molten/soul_stained_steel")
        .tag("slag:molten_metals")
        .tag("slag:hot_fluids")
        .stillTexture("scrapped:fluid/molten_soul_stained_steel_still")
        .flowingTexture("scrapped:fluid/molten_soul_stained_steel_flow")
        .tint(0xffffff)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
            fluidType.canSwim(false);
            fluidType.canDrown(false);
        })

    //Steam
    e.create("scrapped:steam")
        .stillTexture("scrapped:fluid/steam_still")
        .flowingTexture("scrapped:fluid/steam_flow")
        .tag("c:steam")
        .type(fluidType => {
            fluidType.density(0);
            fluidType.viscosity(0);
            fluidType.temperature(473); 
            fluidType.canSwim(false);
            fluidType.canDrown(true);
        })
    
    //Crude Oil
    e.create("scrapped:crude_oil", "thick")
        .stillTexture("scrapped:fluid/crude_oil_still")
        .flowingTexture("scrapped:fluid/crude_oil_flow")
        .tag("c:crude_oil")
        .tint(0x332635)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Heavy Fuel
    e.create("scrapped:heavy_fuel", "thin")
        .stillTexture("scrapped:fluid/waterbobbu_fluid_still")
        .flowingTexture("scrapped:fluid/waterbobbu_fluid_flow")
        .tag("c:heavy_fuel")
        .tint(0xb83145)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Light Fuel
    e.create("scrapped:light_fuel", "thin")
        .stillTexture("scrapped:fluid/waterbobbu_fluid_still")
        .flowingTexture("scrapped:fluid/waterbobbu_fluid_flow")
        .tag("c:light_fuel")
        .tint(0xc77142)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Refined Fuel
    e.create("scrapped:refined_fuel", "thin")
        .stillTexture("scrapped:fluid/waterbobbu_fluid_still")
        .flowingTexture("scrapped:fluid/waterbobbu_fluid_flow")
        .tag("c:refined_fuel")
        .tint(0xf7c431)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
});