const $DataComponents = Java.loadClass("net.minecraft.core.component.DataComponents")

ItemEvents.modifyTooltips(e => {
  e.modify("scrapped:aspect_node", tooltip => {tooltip.dynamic("scrapped_aspect_type")})
})
ItemEvents.dynamicTooltips("scrapped_aspect_type", e => {
  const state = e.item.get($DataComponents.BLOCK_STATE)
  const aspect = String((state && state.properties().get("aspect")) || "sacred")
 
  if (aspect == 0) {
    e.add(Text.gray("⭐ Aspect: ").append(Text.of("Sacred")).color(0xEE2C88))
  } else if (aspect == 1) {
    e.add(Text.gray("⭐ Aspect: ").append(Text.of("Wicked")).color(0x792CEC))
  } else if (aspect == 2) {
    e.add(Text.gray("⭐ Aspect: ").append(Text.of("Arcane")).color(0xEA63FF))
  } else if (aspect == 3) {
    e.add(Text.gray("⭐ Aspect: ").append(Text.of("Eldritch")).color(0xC10BEB))
  } else if (aspect == 4) {
    e.add(Text.gray("⭐ Aspect: ").append(Text.of("Aerial")).color(0x4BF3DA))
  } else if (aspect == 5) {
    e.add(Text.gray("⭐ Aspect: ").append(Text.of("Infernal")).color(0xFA9A1F))
  } else if (aspect == 6) {
    e.add(Text.gray("⭐ Aspect: ").append(Text.of("Aqueous")).color(0x1D64E8))
  } else if (aspect == 7) {
    e.add(Text.gray("⭐ Aspect: ").append(Text.of("Earthen")).color(0x48EE19))
  } else {
    e.add(Text.gray("⭐ Aspect: ").append(Text.of("Unknown")).color(0xb8b8b8))
  }
})