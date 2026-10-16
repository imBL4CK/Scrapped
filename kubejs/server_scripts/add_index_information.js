RecipeViewerEvents.addInformation("item", (e) => {
  const information = [
    {
      item: ["omni_util:withered_tear", "omni_util:hex_sigil"],
      info: "Its obtained by killing Wither boss.",
    },
  ];
  information.forEach((jei) => {
    e.add(jei.item, [jei.info]);
  });
});
