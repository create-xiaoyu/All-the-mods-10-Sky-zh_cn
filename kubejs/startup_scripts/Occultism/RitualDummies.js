// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry("item", (allthemods) => {
  allthemods
    .create("ritual_dummy/honeycomb", "occultism:ritual_dummy")
    .pentacleType("craft")
    .displayName("仪式：制作蜜脾")
    .ritualTooltip("魔精会像蜜蜂一样行动，产出蜜脾。")
  allthemods
    .create("ritual_dummy/upgrade_ritual_satchel_t1_to_t2", "occultism:ritual_dummy")
    .pentacleType("craft")
    .displayName("仪式：将学徒仪式挎包升级为匠心仪式挎包")
    .ritualTooltip(
      "通过将火灵绑定到学徒仪式挎包将其升级为匠心级，使召唤师能一次性建造五芒星。"
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
