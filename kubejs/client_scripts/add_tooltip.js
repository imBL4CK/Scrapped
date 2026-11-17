ItemEvents.modifyTooltips((e) => {
  e.modify(
    [
      "scrapped:redstone_energy_cell",
      "scrapped:steam_dynamo",
      "scrapped:magmatic_dynamo",
      "scrapped:bronze_drum",
      "scrapped:redstone_furnace",
      "scrapped:fluid_encapsulator",
      "scrapped:fractionating_still",
      "scrapped:magma_crucible",
      "scrapped:node_stabilizer",
      "scrapped:alchemists_vision",
      "scrapped:rift_staff",
      "scrapped:quartz_sliver",
    ],
    { shift: false },
    (info) => {
      info.insert(1, Text.translate("info.scrapped.hold_shift.0"));
    },
  );
  e.modify("scrapped:redstone_energy_cell", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.redstone_energy_cell.0"));
  });
  e.modify("scrapped:steam_dynamo", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.steam_dynamo.0"));
  });
  e.modify("scrapped:magmatic_dynamo", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.magmatic_dynamo.0"));
  });
  e.modify("scrapped:bronze_drum", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.bronze_drum.0"));
  });
  e.modify("scrapped:fractionating_still", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.fractionating_still.0"));
  });
  e.modify("scrapped:magma_crucible", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.magma_crucible.0"));
  });
  e.modify("scrapped:redstone_furnace", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.redstone_furnace.0"));
  });
  e.modify("scrapped:node_stabilizer", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.node_stabilizer.0"));
  });
  e.modify("scrapped:alchemists_vision", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.alchemists_vision.0"));
  });
  e.modify("scrapped:rift_staff", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.rift_staff.0"));
  });
  e.modify("scrapped:quartz_sliver", { shift: true }, (info) => {
    info.insert(1, Text.translate("info.scrapped.quartz_sliver.0"));
  });
});
