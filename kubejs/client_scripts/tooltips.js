ItemEvents.tooltip( tooltip => {
    let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} Slots`])
    let main_assembly = (id, stage) => tooltip.add(id, [`§7Main Assembly: ${stage == "4" ? "§6Finale" : "§6Chapter " + stage}`, '§8Consider automating this item'])
    let bonus_assembly = (id, stage) => tooltip.add(id, [`§7Bonus Assembly: §6Chapter ${stage}`])
    let not_consumed = (id, stage) => tooltip.add(id, [`§7Not consumed in the`, `§7Assembly Process`])

    tooltip.add("minecraft:redstone_ore", [`§7Does not generate, crush Cinnabar to obtain Redstone.`]);
    tooltip.add("minecraft:deepslate_redstone_ore", [`§7Does not generate, crush Cinnabar to obtain Redstone.`]);
    tooltip.add('supplementaries:ash', ['Created by burning wooden materals in-world'])
	  tooltip.add('storagedrawers:controller', ['Allows automation to insert and extract from connected drawers'])
	  tooltip.add('storagedrawers:controller_slave', ['Serves as a extra point for automation to insert and extract items from if a drawer controller is present.'])

    holds('copper', 5 * 9)
    holds('iron', 6 * 9)
    holds('silver', 8 * 9)
    holds('gold', 9 * 9)
  
    main_assembly('kubejs:kinetic_mechanism', "1")
    bonus_assembly('kubejs:sealed_mechanism', "1A")
    bonus_assembly('kubejs:reinforced_mechanism', "1B")
    main_assembly('create:precision_mechanism', "2")
    bonus_assembly('kubejs:infernal_mechanism', "2A")
    bonus_assembly('kubejs:logistic_mechanism', "2B")
    main_assembly('kubejs:inductive_mechanism', "3")
    bonus_assembly('kubejs:abstruse_mechanism', "3A")
    main_assembly('kubejs:calculation_mechanism', "4")
  
    not_consumed('cb_microblock:stone_saw')
    not_consumed('cb_microblock:iron_saw')
    not_consumed('cb_microblock:diamond_saw')
    not_consumed('projectred-core:screwdriver')
    // not_consumed('create:super_glue')
    not_consumed('kubejs:chromatic_resonator')
    not_consumed('kubejs:flash_drive')
    // not_consumed('xreliquary:mercy_cross')
    // not_consumed('xreliquary:ender_staff')
  
    global.substrates[0].forEach(e => tooltip.add(e.id, [`§8Category: §7Igneous`]));
    global.substrates[1].forEach(e => tooltip.add(e.id, [`§8Category: §7Herbal`]));
    global.substrates[2].forEach(e => tooltip.add(e.id, [`§8Category: §7Volatile`]));
    global.substrates[3].forEach(e => tooltip.add(e.id, [`§8Category: §7Crystalline`]));
    global.substrates[4].forEach(e => tooltip.add(e.id, [`§8Category: §7Metallurgic`]));
    global.substrates[5].forEach(e => tooltip.add(e.id, [`§8Category: §7Gemstone`]));
    global.substrates[6].forEach(e => tooltip.add(e.id, [`§8Category: §7Catalyst`]));
  
    tooltip.add("structurescompass:structures_compass", [`§7Right-Click to Activate`]);
    tooltip.add("reliquary:alkahestry_tome", [`§6Cannot be used in Mechanical Crafting or Mixing`]);
  
    tooltip.add("kubejs:accellerator_redstone", ["§7When used in Alchemy Research:", "  §6One of the §ecorrect §6Reagents",
      "  §6in §eincorrect §6slots will not be consumed"]);
    tooltip.add("kubejs:accellerator_glowstone", ["§7When used in Alchemy Research:", "  §6One of the §ecorrect §6Reagents",
      "  §6in §ecorrect §6slots will not be consumed"]);
  
    for (let i = 0; i < 15; i++) {
      tooltip.add(`kubejs:failed_alchemy_${i}`, [
        "§7Place in Centrifugal Separator to analyse.",
        "",
        "§6Yields",
        "- Ash §7for each incorrect ingredient",
        "- Redstone §7for each correct ingredient",
        "   §7in an incorrect slot",
        "- Glowstone §7for each correct ingredient",
        "   §7in the correct slot"
      ])
    }
    const pureore = ['minecraft:raw_iron', 'minecraft:raw_copper', 'minecraft:raw_gold', 'thermal:raw_lead', 'thermal:raw_nickel', 'create:raw_zinc']
    pureore.forEach(pureore => {
    tooltip.add(pureore, [`§7A purer grade of ore.`,`§7Can only be found by exploring.`])
    })

    tooltip.addAdvanced(["/^kubejs:.+machine$/", "thermal:machine_frame", "ae2:controller"], (item, adv, text) => {
      if (!tooltip.shift) {
        text.add(1, Text.gray('Hold [Shift] for Summary'))
      } else {
        text.add(1, Text.gray('Hold [Shift] for Summary'))
        text.add(2, Text.gray(''))
        text.add(3, Text.gold('A machine, able to be transformed into a variety of useful gadgets and gizmos.' ))
        // Too hand-holdy?
        // text.add(4, Text.gold('Machine Transformation can be automated with a Deployer or a Filtered Saw.'))
    }
  })

  tooltip.addAdvanced(["/^kubejs:trial.+$/"], (item, adv, text) => {
    if (!tooltip.shift) {
      text.add(1, Text.gray('Hold [Shift] for Summary'))
    } else {
      text.add(1, Text.gray('Hold [Shift] for Summary'))
      text.add(2, Text.gray(''))
      text.add(3, Text.gold('An odd form of copper caused by a reaction between Copper and Lumisense, discovered by those that built the trial chambers.' ))
      text.add(4, Text.gold('Its far cheaper than regular copper, but is still able to fool the naked eye and does not oxidize. Perfect for base building!' ))
  }
})

  })