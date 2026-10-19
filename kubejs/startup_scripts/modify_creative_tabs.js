StartupEvents.modifyCreativeTab("kubejs:tab", (e) => {
  e.icon = "scrapped:redstone_coil";
  e.displayName = "Scrapped";
  e.add("custommachinery:configuration_card")
});
StartupEvents.modifyCreativeTab("custommachinery:custom_machine", (e) => {
    e.remove("*")
})