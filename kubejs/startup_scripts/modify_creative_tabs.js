StartupEvents.modifyCreativeTab("kubejs:tab", (e) => {
  e.icon = "scrapped:logic_mechanism";
  e.displayName = "Scrapped";
  e.add("custommachinery:configuration_card")
});
StartupEvents.modifyCreativeTab("custommachinery:custom_machine", (e) => {
  e.remove("*")
})
StartupEvents.modifyCreativeTab("phosphophyllite:creative_tab", (e) => {
  e.remove("*")
})
StartupEvents.modifyCreativeTab("quartz:creative_tab", (e) => {
  e.remove("*")
})