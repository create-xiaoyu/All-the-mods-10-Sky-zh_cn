// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips((allthemods) => {
  //AllTheModium
  allthemods.add("allthemodium:teleport_pad", [Text.of("采矿维度已禁用")])
  //Ars Controle
  allthemods.add("ars_controle:scryers_linkage", [
    Text.of(""),
    Text.of("§7假搜索别名:"),
    Text.of("§7- 纠缠"),
    Text.of("§7- 纠缠方块")
  ])

  //Forbidden Arcanus
  allthemods.add("forbidden_arcanus:hephaestus_forge_tier_1", [
    Text.of("§c手持§l洁净粉末对§c§l锻造台§r§c按住§c§lShift并点击右键"),
    Text.of("§c█ = 錾制磨制暗黑石（顶部放置锻造台）"),
    Text.of("§7█ = 磨制暗黑石"),
    Text.of("§5█§7 = 錾制磨制暗黑石"),
    Text.of("§6█§7 = 錾制神秘磨制暗黑石"),
    Text.of("§0███§7███§0███"),
    Text.of("§0█§7███§5█§7███§0█"),
    Text.of("§0█§7█§5█§7███§5█§7█§0█"),
    Text.of("§7████§6█§7████"),
    Text.of("§7█§5█§7█§6█§c█§6█§7█§5█§7█"),
    Text.of("§7████§6█§7████"),
    Text.of("§0█§7█§5█§7███§5█§7█§0█"),
    Text.of("§0█§7███§5█§7███§0█"),
    Text.of("§0███§7███§0███")
  ])
  allthemods.add("forbidden_arcanus:clibano_core", [
    Text.of("§c手持§l洁净粉末对§c§l炽炉核心§r§c按住§c§lShift并点击右键"),
    Text.of("§5█§7 = 磨制暗黑石"),
    Text.of("§7█ = 磨制暗黑石砖"),
    Text.of("§6█§7 = 炽炉核心"),
    Text.of("§7从右到左 -> 从下到上"),
    Text.of("§5█§7█§5█§0█§7███§0█§5█§7█§5█"),
    Text.of("§7███§0█§7█§0█§7█§0█§7███"),
    Text.of("§5█§7█§5█§0█§7█§6█§7█§0█§5█§7█§5█")
  ])
  allthemods.add("forbidden_arcanus:growing_edelwood", [
    Text.of("§4可从流浪商人处获得"),
    Text.of("§4或者对橡树树苗使用腐化灵魂")
  ])
  allthemods.add("forbidden_arcanus:magnetized_darkstone_pedestal", [
    Text.of("§7对暗黑石基座使用铁磁性混合物")
  ])
  allthemods.add("forbidden_arcanus:soul", [Text.of("§7对灵魂沙使用灵魂提取器")])
  allthemods.add("forbidden_arcanus:enchanted_soul", [Text.of("§7对普通灵魂使用喷溅型辉光瓶")])
  allthemods.add("forbidden_arcanus:corrupt_soul", [Text.of("§7击杀生物时有小概率生成")])
  allthemods.add("forbidden_arcanus:blood_test_tube", [
    Text.of("§7副手拿着试管时击杀生物")
  ])
  allthemods.add("forbidden_arcanus:xpetrified_orb", [
    Text.of("§7仅能通过黑洞获取"),
    Text.of("§7将暗物质和腐化粉末扔在地面以制作黑洞"),
    Text.of("§7给它足够的经验它会吐出一个石化经验球")
  ])
  allthemods.add("forbidden_arcanus:dragon_scale", [Text.of("§7由末影龙掉落")])
  allthemods.add("forbidden_arcanus:crescent_moon", [Text.of("§c无法获取")])
  allthemods.add("forbidden_arcanus:soul_crimson_stone", [Text.of("§c使用1次后将变为绯红之石")])

  //Mystical Agriculture
  allthemods.add(/mysticalagriculture:.*watering_can/, [
    Text.of("§c对假人禁用"),
    Text.of("§c(包括模块化路由器，连点器等方块)")
  ])
  //Occultism
  allthemods.add("kubejs:ritual_dummy/honeycomb", [Text.of("§7等阶：魔精")])
  allthemods.add("kubejs:ritual_dummy/upgrade_ritual_satchel_t1_to_t2", [
    Text.of(
      "§c警告：将删除学徒背包中的所有物品。请考虑先取出学徒背包中的所有物品。"
    ),
    Text.of("§7等阶：火灵")
  ])
  //Create
  allthemods.add("create:limestone", [Text.of("放置一个熔岩源方块并让它在机械动力的蜂蜜上方流动").gray()])

  allthemods.add("create:scoria", [Text.of("放置一个熔岩源方块并让它在机械动力的巧克力上方流动").gray()])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
