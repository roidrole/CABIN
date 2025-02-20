// priority: 100

//Global blacklist for items that will be hidden from jei and removed from randomium ore
global.itemBlacklist = [

	//ftbquests
	'ftbquests:missing_item',
	'ftbquests:custom_icon',
	'ftbquests:barrier',
	'ftbquests:stage_barrier',
	'ftbquests:detector',
	'ftbquests:lootcrate',
	'ftbquests:loot_crate_opener',

	//itemfilters
	'itemfilters:always_true',
	'itemfilters:mod',
	'itemfilters:tag',
	'itemfilters:xor',
	'itemfilters:not',
	'itemfilters:and',
	'itemfilters:or',
	'itemfilters:always_false',
	'itemfilters:item_group',
	'itemfilters:id_regex',
	'itemfilters:damage',
	'itemfilters:block',
	'itemfilters:max_count',
	'itemfilters:strong_nbt',
	'itemfilters:weak_nbt',
	'itemfilters:custom',
	
	//ae2
	'ae2:inscriber',
	'ae2:vibration_chamber',
	'ae2:white_paint_ball',
	'ae2:light_blue_paint_ball',
	'ae2:lime_paint_ball',
	'ae2:pink_paint_ball',
	'ae2:gray_paint_ball',
	'ae2:light_gray_paint_ball',
	'ae2:cyan_paint_ball',
	'ae2:purple_paint_ball',
	'ae2:brown_paint_ball',
	'ae2:black_paint_ball',
	'ae2:white_lumen_paint_ball',
	'ae2:orange_lumen_paint_ball',
	'ae2:magenta_lumen_paint_ball',
	'ae2:light_blue_lumen_paint_ball',
	'ae2:purple_lumen_paint_ball',
	'ae2:cyan_lumen_paint_ball',
	'ae2:gray_lumen_paint_ball',
	'ae2:pink_lumen_paint_ball',
	'ae2:lime_lumen_paint_ball',
	'ae2:yellow_lumen_paint_ball',
	'ae2:light_gray_lumen_paint_ball',
	'ae2:orange_paint_ball',
	'ae2:blue_lumen_paint_ball',
	'ae2:brown_lumen_paint_ball',
	'ae2:red_lumen_paint_ball',
	'ae2:green_lumen_paint_ball',
	'ae2:black_lumen_paint_ball',

	//Architect's palette
	'architects_palette:withered_bone',

	//Beyond Earth
	'ad_astra:mars_globe',
	'ad_astra:mars_stone',
	'ad_astra:mars_stone_bricks',
	'ad_astra:cracked_mars_stone_bricks',
	'ad_astra:mars_stone_brick_slab',
	'ad_astra:mars_stone_brick_stairs',
	'ad_astra:mars_sand',
	'ad_astra:mars_iron_ore',
	'ad_astra:mars_diamond_ore',
	'ad_astra:mars_ostrum_ore',
	'ad_astra:mars_ice_shard_ore',
	'ad_astra:venus_globe',
	'ad_astra:venus_stone',
	'ad_astra:venus_stone_bricks',
	'ad_astra:cracked_venus_stone_bricks',
	'ad_astra:venus_stone_brick_slab',
	'ad_astra:venus_stone_brick_stairs',
	'ad_astra:venus_sandstone',
	'ad_astra:venus_sandstone_bricks',
	'ad_astra:cracked_venus_sandstone_bricks',
	'ad_astra:venus_sandstone_brick_slab',
	'ad_astra:venus_sandstone_brick_stairs',
	'ad_astra:venus_sand',
	'ad_astra:venus_coal_ore',
	'ad_astra:venus_gold_ore',
	'ad_astra:venus_diamond_ore',
	'ad_astra:venus_calorite_ore',
	'ad_astra:mercury_globe',
	'ad_astra:mercury_stone',
	'ad_astra:mercury_stone_bricks',
	'ad_astra:cracked_mercury_stone_bricks',
	'ad_astra:mercury_stone_brick_slab',
	'ad_astra:mercury_stone_brick_stairs',
	'ad_astra:mercury_iron_ore',
	'ad_astra:glacio_globe',
	'ad_astra:glacio_stone',
	'ad_astra:glacio_stone_bricks',
	'ad_astra:cracked_glacio_stone_bricks',
	'ad_astra:glacio_stone_brick_slab',
	'ad_astra:glacio_stone_brick_stairs',
	'ad_astra:glacio_ice_shard_ore',
	'ad_astra:glacio_coal_ore',
	'ad_astra:glacio_copper_ore',
	'ad_astra:glacio_iron_ore',
	'ad_astra:glacio_lapis_ore',
	"ad_astra:steel_ingot",
	"ad_astra:steel_nugget",
	"ad_astra:steel_tank",
	"ad_astra:steel_engine",
	'ad_astra:ostrum_ingot',
	'ad_astra:ostrum_nugget',
	'ad_astra:raw_ostrum',
	'ad_astra:ostrum_block',
	'ad_astra:raw_ostrum_block',
	'ad_astra:molten_ostrum_bucket',
	'ad_astra:calorite_ingot',
	'ad_astra:calorite_nugget',
	'ad_astra:raw_calorite',
	'ad_astra:calorite_block',
	'ad_astra:raw_calorite_block',
	'ad_astra:molten_calorite_bucket',
	'ad_astra:steel_plate',
	'ad_astra:desh_plate',
	'ad_astra:ostrum_plate',
	'ad_astra:calorite_plate',
	'ad_astra:engine_frame',
	'ad_astra:engine_fan',
	'ad_astra:desh_engine',
	'ad_astra:ostrum_engine',
	'ad_astra:calorite_engine',
	'ad_astra:desh_tank',
	'ad_astra:ostrum_tank',
	'ad_astra:calorite_tank',
	'ad_astra:infernal_spire_block',
	'ad_astra:sky_stone',
	'ad_astra:permafrost',
	'ad_astra:wheel',
	'ad_astra:rocket_fin',
	'ad_astra:rocket_nose_cone',
	'ad_astra:oxygen_tank',
	'ad_astra:oxygen_gear',
	'ad_astra:hammer',
	'ad_astra:iron_plate',
	'ad_astra:coal_generator',
	'ad_astra:compressor',
	'ad_astra:fuel_refinery',
	'ad_astra:solar_panel',
	'ad_astra:water_pump',
	'ad_astra:nasa_workbench',
	'ad_astra:rover',
	'ad_astra:tier_2_rocket',
	'ad_astra:tier_3_rocket',
	'ad_astra:tier_4_rocket',

	//Biomes O' Plenty
	'biomesoplenty:blood', /* Not the fluid but the item. Use buckets to place this instead */

	//Create
	'create:crushed_raw_tin',
	'create:crushed_raw_osmium',
	'create:crushed_raw_platinum',
	'create:crushed_raw_silver',
	'create:crushed_raw_quicksilver',
	'create:crushed_raw_aluminum',
	'create:crushed_raw_uranium',
	'create:sturdy_sheet',
	'create:unprocessed_obsidian_sheet',

	//Create Central Kitchen
	'create_central_kitchen:creative_tab_icon',

	//Create Deco
	'createdeco:copper_coin',
	'createdeco:copper_coinstack',
	'createdeco:zinc_coin',
	'createdeco:zinc_coinstack',
	'createdeco:brass_coin',
	'createdeco:brass_coinstack',
	'createdeco:iron_coin',
	'createdeco:iron_coinstack',
	'createdeco:cast_iron_coin',
	'createdeco:cast_iron_coinstack',
	'createdeco:gold_coin',
	'createdeco:gold_coinstack',
	'createdeco:netherite_coin',
	'createdeco:netherite_coinstack',

	//Incomplete assemblies
	'railways:white_incomplete_conductor_cap',
	'railways:orange_incomplete_conductor_cap',
	'railways:magenta_incomplete_conductor_cap',
	'railways:light_blue_incomplete_conductor_cap',
	'railways:yellow_incomplete_conductor_cap',
	'railways:lime_incomplete_conductor_cap',
	'railways:pink_incomplete_conductor_cap',
	'railways:gray_incomplete_conductor_cap',
	'railways:light_gray_incomplete_conductor_cap',
	'railways:cyan_incomplete_conductor_cap',
	'railways:purple_incomplete_conductor_cap',
	'railways:blue_incomplete_conductor_cap',
	'railways:brown_incomplete_conductor_cap',
	'railways:green_incomplete_conductor_cap',
	'railways:red_incomplete_conductor_cap',
	'railways:black_incomplete_conductor_cap',
	'railways:track_incomplete_acacia',
	'railways:track_incomplete_jungle',
	'railways:track_incomplete_oak',
	'railways:track_incomplete_crimson',
	'railways:track_incomplete_monorail',
	'railways:track_incomplete_blackstone',
	'railways:track_incomplete_phantom',
	'railways:track_incomplete_birch',
	'railways:track_incomplete_warped',
	'railways:track_incomplete_ender',
	'railways:track_incomplete_dark_oak',
	'railways:track_incomplete_spruce',
	'railways:track_incomplete_tieless',
	'railways:track_incomplete_biomesoplenty_cherry',
	'railways:track_incomplete_biomesoplenty_dead',
	'railways:track_incomplete_biomesoplenty_fir',
	'railways:track_incomplete_biomesoplenty_hellbark',
	'railways:track_incomplete_biomesoplenty_jacaranda',
	'railways:track_incomplete_biomesoplenty_magic',
	'railways:track_incomplete_biomesoplenty_mahogany',
	'railways:track_incomplete_biomesoplenty_palm',
	'railways:track_incomplete_biomesoplenty_redwood',
	'railways:track_incomplete_biomesoplenty_umbran',
	'railways:track_incomplete_biomesoplenty_willow',
	'kubejs:growing_certus_seed',
	'kubejs:growing_tiny_certus_crystal',
	'kubejs:growing_small_certus_crystal',
	'kubejs:growing_fluix_seed',
	'kubejs:growing_tiny_fluix_crystal',
	'kubejs:growing_small_fluix_crystal',
	'kubejs:incomplete_calculation_processor',
	'kubejs:incomplete_logic_processor',
	'kubejs:incomplete_engineering_processor',
	'kubejs:incomplete_kinetic_mechanism',
	'kubejs:incomplete_sealed_mechanism',
	'kubejs:incomplete_reinforced_mechanism',
	'kubejs:incomplete_infernal_mechanism',
	'kubejs:incomplete_inductive_mechanism',
	'kubejs:incomplete_abstruse_mechanism',
	'kubejs:incomplete_calculation_mechanism',
	'kubejs:incomplete_coke_chunk',
	'create:incomplete_precision_mechanism',
	'create:incomplete_track',
	'create_central_kitchen:incomplete_egg_sandwich',
	'create_central_kitchen:incomplete_chicken_sandwich',
	'create_central_kitchen:incomplete_hamburger',
	'create_central_kitchen:incomplete_bacon_sandwich',
	'create_central_kitchen:incomplete_mutton_wrap',
	'create_central_kitchen:incomplete_apple_pie',
	'create_central_kitchen:incomplete_sweet_berry_cheesecake',
	'create_central_kitchen:incomplete_pumpkin_pie',
	'create_central_kitchen:incomplete_cherry_pie',
	'create_central_kitchen:incomplete_truffle_pie',
	'create_central_kitchen:incomplete_mulberry_pie',

	//Decorative Blocks
	'decorative_blocks:blockstate_copy_item',

	//everycomp
	'everycomp:q/forbidden_arcanus/mysterywood_chest',
	'everycomp:q/forbidden_arcanus/mysterywood_trapped_chest',

	//Forbidden Arcanus
	'forbidden_arcanus:edelwood_bucket',
	'forbidden_arcanus:edelwood_tropical_fish_bucket',
	'forbidden_arcanus:edelwood_magma_cube_bucket',
	'forbidden_arcanus:edelwood_slime_bucket',
	'forbidden_arcanus:edelwood_lava_bucket',
	'forbidden_arcanus:edelwood_suspicious_stew_bucket',
	'forbidden_arcanus:edelwood_chicken_bucket',
	'forbidden_arcanus:edelwood_mushroom_stew_bucket',
	'forbidden_arcanus:edelwood_water_bucket',
	'forbidden_arcanus:edelwood_milk_bucket',
	'forbidden_arcanus:edelwood_beetroot_soup_bucket',
	'forbidden_arcanus:edelwood_bat_soup_bucket',
	'forbidden_arcanus:edelwood_pufferfish_bucket',
	'forbidden_arcanus:edelwood_salmon_bucket',
	'forbidden_arcanus:edelwood_bat_bucket',
	'forbidden_arcanus:edelwood_squid_bucket',
	'forbidden_arcanus:edelwood_cod_bucket',

	//Grapple Mod
	'grapplemod:rocketupgradeitem',
	'grapplemod:forcefieldupgradeitem',
	'grapplemod:repeller',

	//kubejs
	'kubejs:failed_alchemy_1',
	'kubejs:failed_alchemy_2',
	'kubejs:failed_alchemy_3',
	'kubejs:failed_alchemy_4',
	'kubejs:failed_alchemy_5',
	'kubejs:failed_alchemy_6',
	'kubejs:failed_alchemy_7',
	'kubejs:failed_alchemy_8',
	'kubejs:failed_alchemy_9',
	'kubejs:failed_alchemy_10',
	'kubejs:failed_alchemy_11',
	'kubejs:failed_alchemy_12',
	'kubejs:failed_alchemy_13',
	'kubejs:failed_alchemy_14',
	'kubejs:ponder_laser_lamp',
	'kubejs:ponder_laser_lamp_on',
	'kubejs:silver_coin',
	'kubejs:gold_coin',

	//metal barrels
	'metalbarrels:wood_to_diamond',
	'metalbarrels:wood_to_obsidian',
	'metalbarrels:wood_to_netherite',
	'metalbarrels:copper_to_iron',
	'metalbarrels:copper_to_silver',
	'metalbarrels:copper_to_gold',
	'metalbarrels:copper_to_diamond',
	'metalbarrels:copper_to_obsidian',
	'metalbarrels:iron_to_silver',
	'metalbarrels:iron_to_gold',
	'metalbarrels:iron_to_diamond',
	'metalbarrels:iron_to_obsidian',
	'metalbarrels:wood_to_crystal',
	'metalbarrels:diamond_to_obsidian',
	'metalbarrels:gold_to_obsidian',
	'metalbarrels:gold_to_diamond',
	'metalbarrels:silver_to_obsidian',
	'metalbarrels:silver_to_diamond',
	'metalbarrels:silver_to_gold',
	'metalbarrels:copper_to_crystal',
	'metalbarrels:iron_to_crystal',
	'metalbarrels:silver_to_crystal',
	'metalbarrels:gold_to_crystal',
	'metalbarrels:diamond_to_crystal',
	'metalbarrels:crystal_barrel',
	'metalbarrels:diamond_barrel',
	'metalbarrels:obsidian_barrel',
	'metalbarrels:netherite_barrel',
	'metalbarrels:obsidian_to_netherite',

	//moonlight
	'moonlight:placeable_item',

	//Occultism
	'occultism:obsidian_dust',
	'occultism:raw_silver',
	'occultism:silver_ingot',
	'occultism:silver_nugget',
	'occultism:silver_ore',
	'occultism:silver_ore_deepslate',
	'occultism:iron_dust',
	'occultism:gold_dust',
	'occultism:copper_dust',
	'occultism:silver_dust',
	'occultism:debug_foliot_lumberjack',
	'occultism:debug_foliot_transport_items',
	'occultism:debug_foliot_cleaner',
	'occultism:debug_foliot_trader',
	'occultism:debug_djinni_manage_machine',
	'occultism:debug_djinni_test',
	'occultism:lighted_air',
	'occultism:jei_dummy/none',
	'occultism:jei_dummy/require_sacrifice',
	'occultism:jei_dummy/require_item_use',

	//Pretty Pipes
	'prettypipes:blank_module',

	//projectred core
	'projectred_core:ruby',
	'projectred_core:sapphire',
	'projectred_core:peridot',
	'projectred_core:electrotine_ingot',
	'projectred_core:electrotine_dust',
	'projectred_core:electrotine_iron_comp',
	'projectred_core:conductive_plate',
	'projectred_core:wired_plate',
	'projectred_core:bundled_plate',
	'projectred_core:anode',
	'projectred_core:cathode',
	'projectred_core:pointer',
	'projectred_core:silicon_chip',
	'projectred_core:energized_silicon_chip',
	'projectred_core:red_iron_comp',
	'projectred_core:sand_coal_comp',
	'projectred_core:boule',
	'projectred_core:silicon',
	'projectred_core:red_silicon_comp',
	'projectred_core:glow_silicon_comp',
	'projectred_core:electrotine_silicon_comp',
	'projectred_core:infused_silicon',
	'projectred_core:energized_silicon',
	'projectred_core:electrotine_silicon',
	'projectred_core:copper_coil',
	'projectred_core:iron_coil',
	'projectred_core:gold_coil',
	'projectred_core:motor',
	'projectred_core:woven_cloth',
	'projectred_core:sail',
	'projectred_core:draw_plate',
	'projectred_core:multimeter',

	//Project red Transmission
	'projectred_transmission:low_load_power_wire',
	'projectred_transmission:low_load_framed_power_wire',

	//Quark
	'quark:backpack',
	'quark:chute',
	'quark:clear_shard',
	'quark:red_shard',
	'quark:orange_shard',
	'quark:yellow_shard',
	'quark:green_shard',
	'quark:blue_shard',
	'quark:purple_shard',
	'quark:white_shard',
	'quark:black_shard',
	'quark:brown_shard',
	'quark:lime_shard',
	'quark:cyan_shard',
	'quark:light_blue_shard',
	'quark:magenta_shard',
	'quark:pink_shard',
	'quark:gray_shard',
	'quark:light_gray_shard',
	'quark:dirty_shard',
	'quark:cloud',
	'quark:gravisand',
	'quark:iron_rod',
	'quark:monster_box',
	'quark:pickarang',
	'quark:redstone_randomizer',
	'quark:seed_pouch',
	'quark:bonded_ravager_hide',
	'quark:crate',
	'quark:magnet',
	'quark:magnetized_block',
	'quark:matrix_enchanter',
	'quark:pipe',
	'quark:ravager_hide',
	'quark:tiny_potato',
	'quark:forgotten_hat',
	'quark:diamond_heart',

	'quark:red_stool',
	'quark:orange_stool',
	'quark:yellow_stool',
	'quark:green_stool',
	'quark:blue_stool',
	'quark:purple_stool',
	'quark:white_stool',
	'quark:black_stool',
	'quark:brown_stool',
	'quark:gray_stool',
	'quark:light_gray_stool',
	'quark:lime_stool',
	'quark:cyan_stool',
	'quark:light_blue_stool',
	'quark:pink_stool',
	'quark:magenta_stool',

	'quark:dirty_glass',
	'quark:dirty_glass_pane',
	'quark:dusky_myalite',
	'quark:myalite_crystal',

	'quark:red_corundum',
	'quark:red_corundum_pane',
	'quark:waxed_red_corundum',
	'quark:red_corundum_cluster',
	'quark:orange_corundum',
	'quark:orange_corundum_pane',
	'quark:waxed_orange_corundum',
	'quark:orange_corundum_cluster',
	'quark:yellow_corundum',
	'quark:yellow_corundum_pane',
	'quark:waxed_yellow_corundum',
	'quark:yellow_corundum_cluster',
	'quark:green_corundum',
	'quark:green_corundum_pane',
	'quark:waxed_green_corundum',
	'quark:green_corundum_cluster',
	'quark:blue_corundum',
	'quark:blue_corundum_pane',
	'quark:waxed_blue_corundum',
	'quark:blue_corundum_cluster',
	'quark:indigo_corundum',
	'quark:indigo_corundum_pane',
	'quark:waxed_indigo_corundum',
	'quark:indigo_corundum_cluster',
	'quark:violet_corundum',
	'quark:violet_corundum_pane',
	'quark:waxed_violet_corundum',
	'quark:violet_corundum_cluster',
	'quark:white_corundum',
	'quark:white_corundum_pane',
	'quark:waxed_white_corundum',
	'quark:white_corundum_cluster',
	'quark:black_corundum',
	'quark:black_corundum_pane',
	'quark:waxed_black_corundum',
	'quark:black_corundum_cluster',

	//randomium
	'randomium:randomium',

	//strainers
	'waterstrainer:string_mesh',
	'waterstrainer:iron_mesh',
	'waterstrainer:obsidian_mesh',
	'waterstrainer:strainer_survivalist_solid',
	'waterstrainer:strainer_fisherman_solid',
	'waterstrainer:strainer_survivalist_reinforced',

	//Tconstruct
	'tconstruct:coin_cast',
	'tconstruct:netherite_nugget',
	'tconstruct:copper_nugget',
	'tconstruct:molten_tin_bucket',
	'tconstruct:cheese_ingot',
	'tconstruct:cheese_block',

	//thermal
	'thermal:laser_diode', //I don't even know what this thing it
	'thermal:rs_control_augment',
	'thermal:side_config_augment',
	'thermal:press_coin_die',
	'thermal:press_gear_die',
	'thermal:press_packing_2x2_die',
	'thermal:press_packing_3x3_die',
	'thermal:press_unpacking_die',
	'thermal:iron_coin',
	'thermal:copper_coin',
	'thermal:tin_coin',
	'thermal:lead_coin',
	'thermal:nickel_coin',
	'thermal:netherite_coin',
	'thermal:bronze_coin',
	'thermal:constantan_coin',
	'thermal:invar_coin',
	'thermal:electrum_coin',
	'thermal:signalum_coin',
	'thermal:lumium_coin',
	'thermal:enderium_coin',
	'thermal:gold_plate',
	'thermal:iron_plate',
	'thermal:copper_plate',
	'thermal:netherite_plate',
	'thermal:silver_ore',
	'thermal:deepslate_silver_ore',
	'thermal:tin_ore',
	'thermal:deepslate_tin_ore',
	'thermal:tin_nugget',
	'thermal:tin_ingot',
	'thermal:tin_block',
	'thermal:tin_dust',
	'thermal:tin_plate',
	'thermal:tin_gear',
	'thermal:raw_tin',
	'thermal:raw_tin_block',
	'thermal:invar_plate',
	'thermal:bronze_nugget',
	'thermal:bronze_ingot',
	'thermal:bronze_plate',
	'thermal:netherite_nugget',
	'thermal:copper_nugget',
	'thermal:ender_pearl_dust',
	'thermal:servo_attachment',
	'thermal:device_hive_extractor',

	//Titanium
	'titanium:machine_test',
	'titanium:block_test',
	'titanium:block_twenty_four_test',
	'titanium:block_asset_test',
	'titanium:creative_generator'
]

global.jeiItemBlacklist = [
	//Beyond earth adds 2 sets of these which means we have to blacklist them twice
	'ad_astra:rover',
	'ad_astra:rocket_t2',
	'ad_astra:rocket_t3',
	'ad_astra:rocket_t4',
	"cb_microblock:microblock",
	"ae2:facade",
	'chiselsandbits:block_bit'
]

//Items blacklisted from randomium for balance reasons or otherwise
global.randomiumBlacklist = [
	//Stuff that bugs out without nbt
	'chiselsandbits:pattern_single_use',
	'chiselsandbits:pattern_multi_use',
	'ae2:facade',
	'cb_microblock:microblock',
	'culinaryconstruct:sandwich',
	'culinaryconstruct:food_bowl',

	//not supposed to have in survival items
	'occultism:spirit_fire',
	'thermal:nuke_grenade',
	'thermal:nuke_tnt',
	'thermal:nuke_tnt_minecart',
	'tconstruct:modifier_crystal',
	'tconstruct:creative_slot',
	'minecraft:budding_amethyst',
	'tconstruct:budding_earth_slime_crystal',
	'tconstruct:budding_sky_slime_crystal',
	'tconstruct:budding_ichor_slime_crystal',
	'tconstruct:budding_ender_slime_crystal',
	'ad_astra:earth_globe', //might be added to the pack later but unobtainable at the moment
	'expcaves:treasure_pot',
	'expcaves:small_treasure_pot',
	'expcaves:treasure_amphora',
	'expcaves:small_quartz_treasure_pot',
	'expcaves:quartz_treasure_amphora',
	'occultism:miner_debug_unspecialized',
	'trials:trial_spawner',
	'trials:trial_vault',
	'trials:trial_vault_ominous',


	//Tconstruct molten fluid buckets
	'tconstruct:molten_aluminum_bucket',
	'tconstruct:molten_osmium_bucket',
	'tconstruct:molten_pewter_bucket',
	'tconstruct:molten_porcelain_bucket',
	'tconstruct:molten_refined_glowstone_bucket',
	'tconstruct:molten_refined_obsidian_bucket',
	'tconstruct:molten_tungsten_bucket',
	'tconstruct:molten_uranium_bucket',

	//ritual dummys
	'occultism:ritual_dummy/summon_demonic_wife',
	'occultism:ritual_dummy/summon_demonic_husband',
	'occultism:ritual_dummy/resurrect_familiar',
	'occultism:ritual_dummy/custom_ritual',
	'occultism:ritual_dummy/craft_dimensional_matrix',
	'occultism:ritual_dummy/craft_dimensional_mineshaft',
	'occultism:ritual_dummy/craft_infused_lenses',
	'occultism:ritual_dummy/craft_infused_pickaxe',
	'occultism:ritual_dummy/craft_miner_afrit_deeps',
	'occultism:ritual_dummy/craft_miner_djinni_ores',
	'occultism:ritual_dummy/craft_miner_foliot_unspecialized',
	'occultism:ritual_dummy/craft_miner_marid_master',
	'occultism:ritual_dummy/craft_satchel',
	'occultism:ritual_dummy/craft_soul_gem',
	'occultism:ritual_dummy/craft_familiar_ring',
	'occultism:ritual_dummy/craft_stabilizer_tier1',
	'occultism:ritual_dummy/craft_stabilizer_tier2',
	'occultism:ritual_dummy/craft_stabilizer_tier3',
	'occultism:ritual_dummy/craft_stabilizer_tier4',
	'occultism:ritual_dummy/craft_stable_wormhole',
	'occultism:ritual_dummy/craft_storage_controller_base',
	'occultism:ritual_dummy/craft_storage_remote',
	'occultism:ritual_dummy/familiar_otherworld_bird',
	'occultism:ritual_dummy/familiar_parrot',
	'occultism:ritual_dummy/familiar_greedy',
	'occultism:ritual_dummy/familiar_bat',
	'occultism:ritual_dummy/familiar_deer',
	'occultism:ritual_dummy/familiar_cthulhu',
	'occultism:ritual_dummy/familiar_devil',
	'occultism:ritual_dummy/familiar_dragon',
	'occultism:ritual_dummy/familiar_blacksmith',
	'occultism:ritual_dummy/familiar_guardian',
	'occultism:ritual_dummy/familiar_headless',
	'occultism:ritual_dummy/familiar_chimera',
	'occultism:ritual_dummy/familiar_beholder',
	'occultism:ritual_dummy/familiar_fairy',
	'occultism:ritual_dummy/familiar_mummy',
	'occultism:ritual_dummy/familiar_beaver',
	'occultism:ritual_dummy/possess_enderman',
	'occultism:ritual_dummy/possess_endermite',
	'occultism:ritual_dummy/possess_skeleton',
	'occultism:ritual_dummy/possess_ghast',
	'occultism:ritual_dummy/possess_phantom',
	'occultism:ritual_dummy/possess_weak_shulker',
	'occultism:ritual_dummy/possess_shulker',
	'occultism:ritual_dummy/possess_elder_guardian',
	'occultism:ritual_dummy/possess_warden',
	'occultism:ritual_dummy/possess_hoglin',
	'occultism:ritual_dummy/summon_afrit_rain_weather',
	'occultism:ritual_dummy/summon_afrit_thunder_weather',
	'occultism:ritual_dummy/summon_djinni_clear_weather',
	'occultism:ritual_dummy/summon_djinni_day_time',
	'occultism:ritual_dummy/summon_djinni_manage_machine',
	'occultism:ritual_dummy/summon_djinni_night_time',
	'occultism:ritual_dummy/summon_foliot_lumberjack',
	'occultism:ritual_dummy/summon_foliot_otherstone_trader',
	'occultism:ritual_dummy/summon_foliot_sapling_trader',
	'occultism:ritual_dummy/summon_foliot_transport_items',
	'occultism:ritual_dummy/summon_foliot_cleaner',
	'occultism:ritual_dummy/summon_wild_afrit',
	'occultism:ritual_dummy/summon_wild_hunt',
	'occultism:ritual_dummy/summon_wild_otherworld_bird',
	'occultism:ritual_dummy/summon_wild_parrot',
	'occultism:ritual_dummy/summon_foliot_crusher',
	'occultism:ritual_dummy/summon_djinni_crusher',
	'occultism:ritual_dummy/summon_afrit_crusher',
	'occultism:ritual_dummy/summon_marid_crusher',

	// Chapter 3
	'kubejs:inductive_mechanism',
	'thermal:dynamo_compression',
	'thermal:dynamo_disenchantment',
	'kubejs:pipe_module_tier_2',
	'prettypipes:medium_crafting_module',
	'prettypipes:medium_filter_module',
	'prettypipes:medium_retrieval_module',
	'prettypipes:medium_extraction_module',
	'prettypipes:medium_speed_module',
	'thermal:machine_frame',
	'thermal:machine_smelter',
	'thermal:machine_sawmill',
	'thermal:machine_refinery',
	'thermal:machine_pyrolyzer',
	'thermal:machine_pulverizer',
	'thermal:machine_insolator',
	'thermal:machine_furnace',
	'thermal:machine_crystallizer',
	'thermal:machine_crucible',
	'thermal:machine_crafter',
	'thermal:machine_chiller',
	'thermal:machine_centrifuge',
	'thermal:machine_brewer',
	'thermal:machine_bottler',
	// Chapter 3A
	'thermal:enderium_ingot',
	'thermal:enderium_nugget',
	'thermal:enderium_block',
	'thermal:enderium_dust',
	'thermal:enderium_plate',
	'thermal:enderium_gear',
	'thermal:enderium_glass',
	'tconstruct:molten_enderium_bucket',
	'exchangers:resonant_exchanger',
	'kubejs:abstruse_mechanism',
	'kubejs:enderium_machine',
	'ae2:quantum_ring',
	'enderstorage:ender_tank',
	'ae2:quantum_link',
	'portality:controller',
	'thermal:fluid_duct',
	'thermal:fluid_duct_windowed',
	'thermal:fluid_cell_frame',
	'thermal:fluid_cell',
	'enderstorage:ender_chest',
	'thermal:upgrade_augment_3',
	'kubejs:pipe_module_tier_3',
	'prettypipes:high_crafting_module',
	'prettypipes:high_filter_module',
	'prettypipes:high_retrieval_module',
	'prettypipes:high_extraction_module',
	'prettypipes:high_speed_module',
	'functionalstorage:fluid_1',
	'functionalstorage:fluid_2',
	'functionalstorage:fluid_4',
	'functionalstorage:ender_drawer',
	// Chapter 4
	'ae2:silicon',
	'ae2:printed_silicon',
	'ae2:logic_processor',
	'ae2:calculation_processor',
	'ae2:engineering_processor',
	'kubejs:flash_drive',
	'kubejs:calculation_mechanism',

	//AE2 items
	'ae2:controller',
	'ae2:blank_pattern',
	'ae2:crafting_pattern',
	'ae2:processing_pattern',
	'ae2:smithing_table_pattern',
	'ae2:stonecutting_pattern',
	'ae2:spatial_cell_component_2',
	'ae2:spatial_cell_component_16',
	'ae2:spatial_cell_component_128',
	'ae2:annihilation_core',
	'ae2:formation_core',
	'ae2:condenser',
	'ae2:chest',
	'ae2:drive',
	'ae2:io_port',
	'ae2:spatial_io_port',
	'ae2:terminal',
	'ae2:crafting_terminal',
	'ae2:pattern_encoding_terminal',
	'ae2:pattern_access_terminal',
	'ae2:import_bus',
	'ae2:annihilation_plane',
	'ae2:export_bus',
	'ae2:formation_plane',
	'ae2:molecular_assembler',
	'ae2:pattern_provider',
	'ae2:cable_pattern_provider',
	'ae2:interface',
	'ae2:cable_interface',
	'ae2:storage_bus',
	'ae2:wireless_access_point',
	'ae2:level_emitter',
	'ae2:energy_level_emitter',
	'ae2:storage_monitor',
	'ae2:conversion_monitor',
	'ae2:dense_energy_cell',
	'ae2:cell_workbench',
	'ae2:me_p2p_tunnel',
	'ae2:redstone_p2p_tunnel',
	'ae2:item_p2p_tunnel',
	'ae2:fluid_p2p_tunnel',
	'ae2:fe_p2p_tunnel',
	'ae2:light_p2p_tunnel',
	'ae2:spatial_anchor',
	'ae2:crafting_unit',
	'ae2:crafting_accelerator',
	'ae2:crafting_monitor',
	'ae2:1k_crafting_storage',
	'ae2:4k_crafting_storage',
	'ae2:16k_crafting_storage',
	'ae2:64k_crafting_storage',
	'ae2:256k_crafting_storage',
	'ae2:cell_component_1k',
	'ae2:cell_component_4k',
	'ae2:cell_component_16k',
	'ae2:cell_component_64k',
	'ae2:cell_component_256k',
	'ae2:basic_card',
	'ae2:redstone_card',
	'ae2:capacity_card',
	'ae2:void_card',
	'ae2:advanced_card',
	'ae2:fuzzy_card',
	'ae2:speed_card',
	'ae2:inverter_card',
	'ae2:crafting_card',
	'ae2:energy_card',
	'ae2:equal_distribution_card',
	'ae2:item_storage_cell_1k',
	'ae2:item_storage_cell_4k',
	'ae2:item_storage_cell_16k',
	'ae2:item_storage_cell_64k',
	'ae2:item_storage_cell_256k',
	'ae2:fluid_storage_cell_1k',
	'ae2:fluid_storage_cell_4k',
	'ae2:fluid_storage_cell_16k',
	'ae2:fluid_storage_cell_64k',
	'ae2:fluid_storage_cell_256k',
	'ae2:portable_item_cell_1k',
	'ae2:portable_item_cell_4k',
	'ae2:portable_item_cell_16k',
	'ae2:portable_item_cell_64k',
	'ae2:portable_fluid_cell_256k',
	'ae2:portable_fluid_cell_1k',
	'ae2:portable_fluid_cell_4k',
	'ae2:portable_fluid_cell_16k',
	'ae2:portable_fluid_cell_64k',
	'ae2:portable_fluid_cell_256k',
	'ae2:spatial_storage_cell_2',
	'ae2:spatial_storage_cell_16',
	'ae2:spatial_storage_cell_128',
	'ae2:wireless_terminal',
	'ae2:wireless_crafting_terminal',
	'ae2:color_applicator',
	'ae2:matter_cannon',
	'ae2:network_tool',
	'ae2:memory_card',
	
	// Chapter 4A
	'kubejs:substrate_igneous',
	'kubejs:substrate_herbal',
	'kubejs:substrate_volatile',
	'kubejs:substrate_crystal',
	'kubejs:substrate_metal',
	'kubejs:substrate_gem',
	'kubejs:substrate_chaos',
	'kubejs:substrate_silicon',
	'kubejs:substrate_silver',
	// Chapter 5
	'kubejs:raw_logic_bucket',
	'kubejs:number_0_bucket',
	'kubejs:number_1_bucket',
	'kubejs:number_2_bucket',
	'kubejs:number_3_bucket',
	'kubejs:number_4_bucket',
	'kubejs:number_5_bucket',
	'kubejs:number_6_bucket',
	'kubejs:number_7_bucket',
	'kubejs:number_8_bucket',
	'kubejs:number_9_bucket',
	'kubejs:matrix_bucket',
	'kubejs:plus',
	'kubejs:minus',
	'kubejs:multiply',
	'kubejs:divide',
	'kubejs:one',
	'kubejs:two',
	'kubejs:three',
	'kubejs:four',
	'kubejs:five',
	'kubejs:six',
	'kubejs:seven',
	'kubejs:eight',
	'kubejs:nine',
	'kubejs:zero',
	'ae2:matter_ball',
	'kubejs:matter_plastics',
	'kubejs:lander_deployer',
	'kubejs:computation_matrix',
	'kubejs:navigation_computer',
	'ad_astra:tier_1_rocket',
	'ad_astra:rocket_launch_pad',
	'ad_astra:oxygen_mask',
	'ad_astra:space_suit',
	'ad_astra:space_pants',
	'ad_astra:space_boots',
	'ad_astra:netherite_oxygen_mask',
	'ad_astra:netherite_space_suit',
	'ad_astra:netherite_space_pants',
	'ad_astra:netherite_space_boots',
	'ad_astra:oxygen_loader',
	'ad_astra:oxygen_bubble_distributor',
	'ad_astra:fuel_bucket',

	// Moon Items
	'ad_astra:moon_globe',
	'ad_astra:cheese',
	'ad_astra:desh_ingot',
	'ad_astra:ice_shard',
	'ad_astra:desh_plate',
	'ad_astra:desh_nugget',
	'ad_astra:raw_desh',
	'ad_astra:desh_block',
	'ad_astra:raw_desh_block',
	'ad_astra:moon_stone',
	'ad_astra:moon_stone_bricks',
	'ad_astra:cracked_moon_stone_bricks',
	'ad_astra:moon_stone_brick_slab',
	'ad_astra:moon_stone_brick_stairs',
	'ad_astra:moon_sand',
	'ad_astra:moon_cheese_ore',
	'ad_astra:moon_desh_ore',
	'ad_astra:moon_iron_ore',
	'ad_astra:moon_ice_shard_ore',
	'ad_astra:molten_desh_bucket',

	//Creative items
	'waterstrainer:super_worm',
	'thermal:rf_coil_creative_augment',
	'thermal:fluid_tank_creative_augment',
	'thermal:machine_efficiency_creative_augment',
	'thermal:machine_catalyst_creative_augment',
	'ae2:creative_energy_cell',
	'ae2:creative_item_cell',
	'ae2:creative_fluid_cell',
	'ae2:debug_eraser',
	'ae2:debug_meteorite_placer',
	'ae2:debug_card',
	'ae2:debug_replicator_card',
	'exchangers:creative_exchanger',
	'create:creative_motor',
	'create:creative_fluid_tank',
	'create:creative_crate',
	'create:creative_blaze_cake',
	'create:handheld_worldshaper',
	'storagedrawers:creative_storage_upgrade',
	'storagedrawers:creative_vending_upgrade',
	'computercraft:computer_command',
	'modonomicon:modonomicon',
	'functionalstorage:max_storage_upgrade',
	'functionalstorage:creative_vending_upgrade'
]

global.jeiFluidBlacklist = [
	//Most of this blacklist if filled with flowing fluid variants that sometimes show in rei when using tags
	
	'minecraft:flowing_water',
	'minecraft:flowing_lava',

	//Beyond Earth
	'ad_astra:molten_ostrum',
	'ad_astra:molten_calorite',

	'ad_astra:flowing_fuel',
	'ad_astra:flowing_oil',
	'ad_astra:flowing_molten_desh',
	'ad_astra:flowing_molten_ostrum',
	'ad_astra:flowing_molten_calorite',

	//biomes o plenty
	'biomesoplenty:flowing_blood',

	//decorative_blocks
	'decorative_blocks:flowing_thatch',

	//Tconstruct
	'tconstruct:molten_tin',

	'tconstruct:flowing_blood',
	'tconstruct:flowing_venom',
	'tconstruct:flowing_earth_slime',
	'tconstruct:flowing_sky_slime',
	'tconstruct:flowing_ender_slime',
	'tconstruct:flowing_magma',
	'tconstruct:flowing_honey',
	'tconstruct:flowing_beetroot_soup',
	'tconstruct:flowing_mushroom_stew',
	'tconstruct:flowing_rabbit_stew',
	'tconstruct:flowing_seared_stone',
	'tconstruct:flowing_scorched_stone',
	'tconstruct:flowing_molten_clay',
	'tconstruct:flowing_molten_glass',
	'tconstruct:flowing_liquid_soul',
	'tconstruct:flowing_molten_obsidian',
	'tconstruct:flowing_molten_ender',
	'tconstruct:flowing_blazing_blood',
	'tconstruct:flowing_molten_emerald',
	'tconstruct:flowing_molten_quartz',
	'tconstruct:flowing_molten_amethyst',
	'tconstruct:flowing_molten_diamond',
	'tconstruct:flowing_molten_debris',
	'tconstruct:flowing_molten_iron',
	'tconstruct:flowing_molten_gold',
	'tconstruct:flowing_molten_copper',
	'tconstruct:flowing_molten_cobalt',
	'tconstruct:flowing_molten_slimesteel',
	'tconstruct:flowing_molten_amethyst_bronze',
	'tconstruct:flowing_molten_rose_gold',
	'tconstruct:flowing_molten_pig_iron',
	'tconstruct:flowing_molten_manyullyn',
	'tconstruct:flowing_molten_hepatizon',
	'tconstruct:flowing_molten_queens_slime',
	'tconstruct:flowing_molten_netherite',
	'tconstruct:flowing_molten_tin',
	'tconstruct:flowing_molten_lead',
	'tconstruct:flowing_molten_silver',
	'tconstruct:flowing_molten_nickel',
	'tconstruct:flowing_molten_zinc',
	'tconstruct:flowing_molten_bronze',
	'tconstruct:flowing_molten_brass',
	'tconstruct:flowing_molten_electrum',
	'tconstruct:flowing_molten_invar',
	'tconstruct:flowing_molten_constantan',
	'tconstruct:flowing_molten_steel',
	'tconstruct:flowing_molten_enderium',
	'tconstruct:flowing_molten_lumium',
	'tconstruct:flowing_molten_signalum',

	//other tinker's fluids that don't show up in the main pack
	'tconstruct:flowing_molten_aluminum',
	'tconstruct:flowing_molten_osmium',
	'tconstruct:flowing_molten_pewter',
	'tconstruct:flowing_molten_porcelain',
	'tconstruct:flowing_molten_refined_glowstone',
	'tconstruct:flowing_molten_refined_obsidian',
	'tconstruct:flowing_molten_tungsten',
	'tconstruct:flowing_molten_uranium',

	//kubejs fluids
	'kubejs:flowing_raw_logic',
	'kubejs:flowing_number_0',
	'kubejs:flowing_number_1',
	'kubejs:flowing_number_2',
	'kubejs:flowing_number_3',
	'kubejs:flowing_number_4',
	'kubejs:flowing_number_5',
	'kubejs:flowing_number_6',
	'kubejs:flowing_number_7',
	'kubejs:flowing_number_8',
	'kubejs:flowing_number_9',
	'kubejs:flowing_matrix',
	'kubejs:flowing_fine_sand',
	'kubejs:flowing_crude_oil',
	'kubejs:flowing_volatile_sky_solution',
	'kubejs:flowing_chromatic_waste',

	//Create fluids
	'create:flowing_honey',
	'create:flowing_chocolate',
	//Central Kitchen
	'create_central_kitchen:flowing_tomato_sauce',

]