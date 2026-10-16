ItemEvents.modifyTooltips((e) => {
  e.modify(
    [
      "scrapped:redstone_energy_cell",
      "scrapped:steam_dynamo",
      "scrapped:magmatic_dynamo",
      "scrapped:bronze_drum",
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
});
