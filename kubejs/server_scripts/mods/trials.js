//Trial Chamber backport
if (Platform.isLoaded('trials')) {
    ServerEvents.lowPriorityData(event => {
        
        //Make a Trial Processor using IntegratedAPI and Lithostitched
        //Integrated API's waterlog fix processor is used to fix blocks being waterlogged when the structure generates over water
        //Lithostitched is used to swap blocks while copying over properties. (without it this processor would be almost 3000 lines long)
        event.addJson("trials:worldgen/processor_list/generic", {
            "processors": [
            {
                "processor_type": "integrated_api:waterlogging_fix_processor"
            },
            {
                "processor_type": "lithostitched:block_swap",
                "blocks": {
                    "minecraft:waxed_copper_block": "kubejs:trial_copper_block",
                    "minecraft:waxed_cut_copper": "kubejs:trial_cut_copper",
                    "trials:waxed_chiseled_copper": "kubejs:trial_chiseled_copper",
                    "trials:waxed_copper_grate": "kubejs:trial_copper_grate",
                    "minecraft:waxed_cut_copper_stairs": "kubejs:trial_cut_copper_stairs",
                    "minecraft:waxed_cut_copper_slab": "kubejs:trial_cut_copper_slab",
                    "minecraft:waxed_oxidized_copper": "kubejs:trial_oxidized_copper_block",
                    "minecraft:waxed_oxidized_cut_copper": "kubejs:trial_oxidized_cut_copper",
                    "trials:waxed_chiseled_copper_oxidized": "kubejs:trial_oxidized_chiseled_copper",
                    "trials:waxed_copper_grate_oxidized": "kubejs:trial_oxidized_copper_grate",
                    "minecraft:waxed_oxidized_cut_copper_stairs": "kubejs:trial_oxidized_cut_copper_stairs",
                    "minecraft:waxed_oxidized_cut_copper_slab":"kubejs:trial_oxidized_cut_copper_slab" 
                }
            }
            ]
        })

        //Replace the food reward in ominous spawners with ore instead
        event.addJson('trials:loot_tables/gameplay/spawner_special_loot', {
            "type": "minecraft:generic",
            "pools": [
              {
                "rolls": 1,
                "entries": [
                  {
                    "type": "minecraft:item",
                    "name": "trials:trial_key_ominous",
                    "weight": 1
                  },
                  {
                    "type": "minecraft:loot_table",
                    "name": "kubejs:gameplay/trials/ore_loot",
                    "weight": 1
                  }
                ]
              }
            ]
          })


        //First we'll set the array as the default loot tables. This makes it more clear what exactly we're changing about them.
        //If LootJS didn't suck in this version, then we could have used that instead
        const normalVaultLoot = [
            {
                "type": "minecraft:item",
                "name": "minecraft:emerald",
                "weight": 15,
                "functions": [
                    { "function": "set_count", "count": { "min": 2, "max": 6 } }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:golden_carrot",
                "weight": 12,
                "functions": [
                    { "function": "set_count", "count": { "min": 2, "max": 4 } }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:iron_ingot",
                "weight": 12,
                "functions": [
                    { "function": "set_count", "count": { "min": 2, "max": 4 } }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "trials:breeze_rod",
                "weight": 8,
                "functions": [
                    { "function": "set_count", "count": { "min": 2, "max": 6 } }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:ender_pearl",
                "weight": 8,
                "functions": [
                    { "function": "set_count", "count": { "min": 1, "max": 2 } }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "trials:ominous_bottle",
                "weight": 8
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:arrow",
                "weight": 8,
                "functions": [
                    { "function": "set_count", "count": { "min": 6, "max": 12 } }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:golden_apple",
                "weight": 8
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:book",
                "weight": 6,
                "functions": [
                    {
                        "function": "minecraft:enchant_randomly",
                        "enchantments": ["minecraft:mending", "minecraft:riptide", "minecraft:loyalty", "minecraft:channeling", "minecraft:impaling"]
                    }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:book",
                "weight": 6,
                "functions": [
                    {
                        "function": "minecraft:enchant_randomly",
                        "enchantments": ["minecraft:sharpness", "minecraft:smite", "minecraft:efficiency", "minecraft:fortune", "minecraft:silk_touch", "minecraft:feather_falling"]
                    }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:diamond",
                "weight": 4,
                "functions": [
                    { "function": "set_count", "count": { "min": 1, "max": 2 } }
                ]
            },
            {
                "type": "minecraft:loot_table",
                "name": "trials:gameplay/iron_armor",
                "weight": 4
            },
            {
                "type": "minecraft:item",
                "name": "trials:bolt_template",
                "weight": 2
            },
            {
                "type": "minecraft:item",
                "name": "trials:music_disc_precipice",
                "weight": 2
            }
        ]

        const ominousVaultLoot = [
            {
                "type": "minecraft:item",
                "name": "minecraft:emerald",
                "weight": 15,
                "functions": [
                    { "function": "set_count", "count": { "min": 2, "max": 6 } }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:golden_carrot",
                "weight": 12,
                "functions": [
                    { "function": "set_count", "count": { "min": 2, "max": 4 } }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:iron_ingot",
                "weight": 12,
                "functions": [
                    { "function": "set_count", "count": { "min": 2, "max": 4 } }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:ender_pearl",
                "weight": 8,
                "functions": [
                    { "function": "set_count", "count": { "min": 1, "max": 2 } }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:golden_apple",
                "weight": 8
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:book",
                "weight": 6,
                "functions": [
                    { "function": "minecraft:enchant_randomly", "enchantments": ["trials:density", "trials:breach", "trials:wind_burst"] }
                ]
            },
            {
                "type": "minecraft:item",
                "name": "trials:ominous_bottle",
                "weight": 6
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:emerald_block",
                "weight": 6
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:iron_block",
                "weight": 4
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:diamond",
                "weight": 4,
                "functions": [
                    { "function": "set_count", "count": { "min": 1, "max": 2 } }
                ]
            },
            {
                "type": "minecraft:loot_table",
                "name": "trials:gameplay/diamond_armor",
                "weight": 4
            },
            {
                "type": "minecraft:item",
                "name": "trials:flow_template",
                "weight": 2
            },
            {
                "type": "minecraft:item",
                "name": "trials:music_disc_creator",
                "weight": 2
            },
            {
                "type": "minecraft:item",
                "name": "minecraft:diamond_block",
                "weight": 1
            }
        ]

        

        //Now we add our own loot

        //Gives way too many emeralds
        normalVaultLoot.splice(normalVaultLoot.findIndex(loot=>loot.name=='minecraft:emerald'),1)
        normalVaultLoot.push({
            "type": "minecraft:item",
            "name": "minecraft:emerald",
            "weight": 5,
            "functions": [{ "function": "set_count", "count": { "min": 2, "max": 6 } }]
        })
        normalVaultLoot.push({
            "type": "minecraft:item",
            "name": "thermal:cinnabar",
            "weight": 3,
            "functions": [{ "function": "set_count", "count": { "min": 2, "max": 6 } }]
        })

        normalVaultLoot.push({
            "type": "minecraft:item",
            "name": "create:andesite_alloy_block",
            "weight": 12,
            "functions": [{ "function": "set_count", "count": { "min": 1, "max": 2 } }]
        })
        normalVaultLoot.push({
            "type": "minecraft:item",
            "name": "create:brass_ingot",
            "weight": 4,
            "functions": [{ "function": "set_count", "count": { "min": 2, "max": 6 } }]
        })



        //Gives way too many emeralds
        ominousVaultLoot.splice(normalVaultLoot.findIndex(loot=>loot.name=='minecraft:emerald'),1)
        ominousVaultLoot.push({
            "type": "minecraft:item",
            "name": "minecraft:emerald",
            "weight": 3,
            "functions": [{ "function": "set_count", "count": { "min": 2, "max": 6 } }]
        })
        ominousVaultLoot.push({
            "type": "minecraft:item",
            "name": "thermal:ruby",
            "weight": 3,
            "functions": [{ "function": "set_count", "count": { "min": 1, "max": 2 } }]
        })
        ominousVaultLoot.push({
            "type": "minecraft:item",
            "name": "thermal:sapphire",
            "weight": 3,
            "functions": [{ "function": "set_count", "count": { "min": 1, "max": 2 } }]
        })
        ominousVaultLoot.push({
            "type": "minecraft:item",
            "name": "thermal:cinnabar",
            "weight": 6,
            "functions": [{ "function": "set_count", "count": { "min": 2, "max": 6 } }]
        })

        ominousVaultLoot.push({
            "type": "minecraft:item",
            "name": "create:brass_ingot",
            "weight": 12,
            "functions": [{ "function": "set_count", "count": { "min": 2, "max": 4 } }]
        })
        ominousVaultLoot.push({
            "type": "minecraft:item",
            "name": "create:brass_block",
            "weight": 4,
        })



        event.addJson('trials:loot_tables/gameplay/vault_loot', {
            "type": "minecraft:generic",
            "pools": [
                {
                    "rolls": 1,
                    "entries": normalVaultLoot
                }
            ]
        })

        event.addJson('trials:loot_tables/gameplay/vault_special_loot', {
            "type": "minecraft:generic",
            "pools": [
                {
                    "rolls": 1,
                    "entries": ominousVaultLoot
                }
            ]
        })
    })
}