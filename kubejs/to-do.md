# Ligas/Materiais
- Unobtanium
- Vibranium
- Adamantium

# Misc
- Trinkets de compatibilidade
- Compatibilidade da wrench com maquinas (assembling laser, dynamic ducts, etc)
- Bronze nos fundos do oceano (pequenas manchas de sucata de bronze)
- Variantes das celulas de redstone
- Incone da rosa dos ventos
- Gargolas
- Receita de itens pelo cauldron (Vanilla)
- Descobrir o shaders do carinha do vídeo 
- Loot boxes
- Resourpack Modifiers
- waterlog nos blocos com builder customizado
- minerios do modpack com versao no grimspiral
- colocar tooltips na: Fractionary still, fluid encapsulator, magma crucible, disc engraver

const $DataComponents = Java.loadClass("net.minecraft.core.component.DataComponents")

const ASPECT_COLORS = {
  type: "sacred",
  col
  wicked
  eldritch
  arcane
  earthen
  aqueous
  infernal
  aerial
}

ItemEvents.modifyTooltips(e => {
  e.modify("scrapped:aspect_node", tooltip => {tooltip.dynamic("scrapped_aspect_type")})
})

ItemEvents.dynamicTooltips("scrapped_aspect_type", e => {
  const state = e.item.get($DataComponents.BLOCK_STATE)
  const aspect = String((state && state.properties().get("aspect")) || "Sacred")

  switch (aspect) {
    case 0:
        e.add(Text.gray("Aspect: ").append(Text.of(aspect).color(ASPECT_COLORS[aspect] || 0xFFFFFF)))
    break 
})

--

const $DataComponents = Java.loadClass("net.minecraft.core.component.DataComponents")
const ASPECT_COLORS = {
  sacred: 0xFFE9A8,
  wicked: 0x7A1F5C,
  eldritch: 0x5B3FA0,
  arcane: 0x4FA3FF,
  earthen: 0x8B6B3E,
  aqueous: 0x3FD0D0,
  infernal: 0xFF5A1F,
  aerial: 0xC8E6F5
}

ItemEvents.modifyTooltips(e => {
  e.modify("scrapped:aspect_node", tooltip => {tooltip.dynamic("scrapped_aspect_type")})
})

ItemEvents.dynamicTooltips("scrapped_aspect_type", e => {
  const state = e.item.get($DataComponents.BLOCK_STATE)
  const aspect = String((state && state.properties().get("aspect")) || "sacred")

  switch (aspect) {
    case 0:
      e.add(Text.gray("Aspect Type: ").append(Text.of("Sacred").color(ASPECT_COLORS[aspect] || 0xFFFFFF)))
    case 1:
      e.add(Text.gray("Aspect Type: ").append(Text.of("Wicked").color(ASPECT_COLORS[aspect] || 0xFFFFFF)))
    case 2:
      e.add(Text.gray("Aspect Type: ").append(Text.of("Eldritch").color(ASPECT_COLORS[aspect] || 0xFFFFFF)))
    case 3:
      e.add(Text.gray("Aspect Type: ").append(Text.of("Arcane").color(ASPECT_COLORS[aspect] || 0xFFFFFF)))
    case 4:
      e.add(Text.gray("Aspect Type: ").append(Text.of("Earthen").color(ASPECT_COLORS[aspect] || 0xFFFFFF)))
    case 5:
      e.add(Text.gray("Aspect Type: ").append(Text.of("Aqueous").color(ASPECT_COLORS[aspect] || 0xFFFFFF)))
    case 6:
      e.add(Text.gray("Aspect Type: ").append(Text.of("Infernal").color(ASPECT_COLORS[aspect] || 0xFFFFFF)))
    case 7:
      e.add(Text.gray("Aspect Type: ").append(Text.of("Aerial").color(ASPECT_COLORS[aspect] || 0xFFFFFF)))
  }
})