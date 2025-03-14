JEIEvents.hideItems(event => {
	event.hide(/^sophisticatedstorage:limited.+barrel.+$/)
	event.hide("sophisticatedstorage:copper_barrel")
	event.hide("sophisticatedstorage:copper_chest")
	event.hide("sophisticatedstorage:copper_shulker_box")
	event.hide(/^sophisticatedstorage:.*copper.*tier_upgrade$/)
	event.hide("sophisticatedstorage:stack_upgrade_tier_1_plus")
	event.hide("sophisticatedbackpacks:stack_upgrade_starter_tier")
	event.hide(/xp_pump_upgrade/)

	event.hide(/itemfilters/)

	event.hide(['ae2:inscriber', 'ae2:vibration_chamber'])
	event.hide(/ae2:.*_budding_quartz/)
	event.hide('architects_palette:withered_bone')

	event.hide(/ad_astra:.*mars/)
	event.hide(/ad_astra:.*venus/)
	event.hide(/ad_astra:.*mercury/)
	event.hide(/ad_astra:.*glacio/)
	event.hide(/^ad_astra:(steel|ostrum|calorite|desh)_(ingot|nugget|block|plate|tank|engine|fan)$/)
	event.hide(["ad_astra:infernal_spire_block", "ad_astra:sky_stone", "ad_astra:permafrost", "ad_astra:wheel", "ad_astra:rocket_fin", "ad_astra:rocket_nose_cone", "ad_astra:oxygen_tank", "ad_astra:oxygen_gear", "ad_astra:hammer", "ad_astra:iron_plate", "ad_astra:coal_generator", "ad_astra:compressor", "ad_astra:fuel_refinery", "ad_astra:solar_panel", "ad_astra:water_pump", "ad_astra:nasa_workbench", "ad_astra:rover", "ad_astra:tier_2_rocket", "ad_astra:tier_3_rocket", "ad_astra:tier_4_rocket"])

	event.hide('biomesoplenty:blood')

	event.hide('create:crushed_raw_tin')
	event.hide('create:crushed_raw_osmium')
	event.hide('create:crushed_raw_platinum')
	event.hide('create:crushed_raw_silver')
	event.hide('create:crushed_raw_quicksilver')
	event.hide('create:crushed_raw_aluminum')
	event.hide('create:crushed_raw_uranium')
	event.hide('create:sturdy_sheet')
	event.hide('create:unprocessed_obsidian_sheet')
	event.hide('create_central_kitchen:creative_tab_icon')

	event.hide(/^createdeco:.*coin/)

	event.hide(/incomplete/)
	event.hide(/kubejs:growing/)
	event.hide(/kubejs:failed/)

	event.hide('decorative_blocks:blockstate_copy_item')

	event.hide('occultism:obsidian_dust')
	event.hide('occultism:raw_silver')
	event.hide('occultism:silver_ingot')
	event.hide('occultism:silver_nugget')
	event.hide('occultism:silver_ore')
	event.hide('occultism:silver_ore_deepslate')
	event.hide('occultism:iron_dust')
	event.hide('occultism:gold_dust')
	event.hide('occultism:copper_dust')
	event.hide('occultism:silver_dust')
	event.hide('occultism:debug_foliot_lumberjack')
	event.hide('occultism:debug_foliot_transport_items')
	event.hide('occultism:debug_foliot_cleaner')
	event.hide('occultism:debug_foliot_trader')
	event.hide('occultism:debug_djinni_manage_machine')
	event.hide('occultism:debug_djinni_test')
	event.hide('occultism:lighted_air')
	event.hide('occultism:jei_dummy/none')
	event.hide('occultism:jei_dummy/require_sacrifice')
	event.hide('occultism:jei_dummy/require_item_use')

	event.hide('prettypipes:blank_module')

	event.hide('projectred_core:ruby')
	event.hide('projectred_core:sapphire')
	event.hide('projectred_core:peridot')
	event.hide('projectred_core:electrotine_ingot')
	event.hide('projectred_core:electrotine_dust')
	event.hide('projectred_core:electrotine_iron_comp')
	event.hide('projectred_core:conductive_plate')
	event.hide('projectred_core:wired_plate')
	event.hide('projectred_core:bundled_plate')
	event.hide('projectred_core:anode')
	event.hide('projectred_core:cathode')
	event.hide('projectred_core:pointer')
	event.hide('projectred_core:silicon_chip')
	event.hide('projectred_core:energized_silicon_chip')
	event.hide('projectred_core:red_iron_comp')
	event.hide('projectred_core:sand_coal_comp')
	event.hide('projectred_core:boule')
	event.hide('projectred_core:silicon')
	event.hide('projectred_core:red_silicon_comp')
	event.hide('projectred_core:glow_silicon_comp')
	event.hide('projectred_core:electrotine_silicon_comp')
	event.hide('projectred_core:infused_silicon')
	event.hide('projectred_core:energized_silicon')
	event.hide('projectred_core:electrotine_silicon')
	event.hide('projectred_core:copper_coil')
	event.hide('projectred_core:iron_coil')
	event.hide('projectred_core:gold_coil')
	event.hide('projectred_core:motor')
	event.hide('projectred_core:woven_cloth')
	event.hide('projectred_core:sail')
	event.hide('projectred_core:draw_plate')
	event.hide('projectred_core:multimeter')

	event.hide('projectred_transmission:low_load_power_wire')
	event.hide('projectred_transmission:low_load_framed_power_wire')

	event.hide('thermal:rs_control_augment')
	event.hide('thermal:side_config_augment')
	event.hide('thermal:press_coin_die')
	event.hide('thermal:press_gear_die')
	event.hide('thermal:press_packing_2x2_die')
	event.hide('thermal:press_packing_3x3_die')
	event.hide('thermal:press_unpacking_die')
	event.hide('thermal:iron_coin')
	event.hide('thermal:gold_coin')
	event.hide('thermal:copper_coin')
	event.hide('thermal:tin_coin')
	event.hide('thermal:lead_coin')
	event.hide('thermal:nickel_coin')
	event.hide('thermal:netherite_coin')
	event.hide('thermal:bronze_coin')
	event.hide('thermal:constantan_coin')
	event.hide('thermal:invar_coin')
	event.hide('thermal:electrum_coin')
	event.hide('thermal:signalum_coin')
	event.hide('thermal:lumium_coin')
	event.hide('thermal:enderium_coin')
	event.hide('thermal:gold_plate')
	event.hide('thermal:iron_plate')
	event.hide('thermal:copper_plate')
	event.hide('thermal:netherite_plate')
	event.hide('thermal:silver_ore')
	event.hide('thermal:deepslate_silver_ore')
	event.hide('thermal:tin_ore')
	event.hide('thermal:deepslate_tin_ore')
	event.hide('thermal:tin_nugget')
	event.hide('thermal:tin_ingot')
	event.hide('thermal:tin_block')
	event.hide('thermal:tin_dust')
	event.hide('thermal:tin_plate')
	event.hide('thermal:tin_gear')
	event.hide('thermal:raw_tin')
	event.hide('thermal:raw_tin_block')
	event.hide('thermal:netherite_nugget')
	event.hide('thermal:copper_nugget')
	event.hide('thermal:ender_pearl_dust')
	event.hide('thermal:servo_attachment')
	event.hide('thermal:device_hive_extractor')

	event.hide("cb_microblock:microblock")
	event.hide("ae2:facade")
	event.hide('chiselsandbits:block_bit')

})

JEIEvents.hideFluids(event => {
	event.hide('tconstruct:molten_tin')
})