// priority: 1
ServerEvents.recipes(event => {
	//Obsidian pane crafting
	//Not sure where the original recipe went
	event.shaped(TC('obsidian_pane', 8), [
		'SSS',
		'SSS'
	], {
		S: MC('obsidian')
	})
	//melt blaze rods into blazing blood
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "tag": "forge:rods/blaze"	},
		"result": { "fluid": "tconstruct:blazing_blood", "amount": 100 },
		"temperature": 790,
		"time": 40
	})
	//Melt redstone into destabilized redstone
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": MC('redstone') },
		"result": { "fluid": TE('redstone'), "amount": 100 },
		"temperature": 300,
		"time": 10
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "item": MC('redstone_block') },
		"result": { "fluid": TE('redstone'), "amount": 900 },
		"temperature": 500,
		"time": 90
	});
	//Remove coin cast
	event.remove({ id: TC('smeltery/casts/sand_casts/coins') })
	event.remove({ id: TC('smeltery/casts/red_sand_casts/coins') })
	event.remove({ id: TC('smeltery/casts/gold_casts/coins') })

	let coinMaterials = [
		'iron',
		'gold',
		'copper',
		'netherite',
		'tin',
		'lead',
		'silver',
		'nickel',
		'bronze',
		'electrum',
		'invar',
		'constantan',
		'signalum',
		'lumium',
		'enderium'
	];
	coinMaterials.forEach(material=>{
		event.remove({ id:TC(`smeltery/casting/metal/${material}/coin_gold_cast`) })
		event.remove({ id:TC(`smeltery/casting/metal/${material}/coin_sand_cast`) })
	})
	//Remove enchanted apple melting recipe
	event.remove({ id: TC('smeltery/melting/metal/gold/enchanted_apple') })
	//Remove Tconstruct cheese since it only costs milk to craft and cheese already exists on the moon.
	event.remove({ id: TC('smeltery/casting/cheese_block')})
	event.remove({ id: TC('smeltery/casting/cheese_ingot_gold_cast')})
	event.remove({ id: TC('smeltery/casting/cheese_ingot_sand_cast')})

	//Broken cake recipe in 1.20.1
	event.remove({"id":"tconstruct:gadgets/cake/blood"})
	event.shaped('tconstruct:blood_cake', [
		"FFF",
		"GEG",
		"WWW"
	], {
		"F":'tconstruct:meat_soup_bucket',
		"G":"minecraft:glowstone_dust",
		"E":"minecraft:egg",
		"W":'tconstruct:blood_slime_tall_grass'
	})

	//Buffs melting of beetroots into soup
	event.remove({id:'tconstruct:smeltery/melting/slime/beetroot_soup'})
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {"item": "minecraft:beetroot"},
		"result": {"fluid": "tconstruct:beetroot_soup", "amount": 75},
		"temperature": 100,
		"time": 32
	})
	//Ink
	event.custom({"type": "tconstruct:melting",
		ingredient: {item:'minecraft:ink_sac'},
		result: {
			"fluid":'kubejs:ink',
			"amount":250
		},
		temperature: 100,
		time: 32
	})

	//More specific Mob Melting meat soup
	event.remove({"id":"tconstruct:smeltery/entity_melting/meat_soup"})
	event.remove({"id":"tconstruct:smeltery/casting/soup/meat"})
	function createStew(fluid, entityList, ingredient){
		event.custom({"type":"tconstruct:entity_melting",
			"damage":2,
			"entity":entityList,
			"result":{
				"amount":50,
				"fluid":fluid
			}
		})
		if (arguments.length == 3){
			event.custom({"type": "tconstruct:melting",
				ingredient: Ingredient.of(ingredient).toJson(),
				result: {
					"fluid":fluid,
					"amount":250
				},
				temperature: 100,
				time: 32
			})
			event.recipes.createMixing(Fluid.of(fluid, 250), [ingredient]).heated()
		}
	}
	createStew("kubejs:beef_soup", {"types":["minecraft:cow","minecraft:mooshroom"]}, 'minecraft:beef')
	createStew("kubejs:chicken_soup", {"type":"minecraft:chicken"}, 'minecraft:chicken')
	createStew("kubejs:pork_soup", {"types":["minecraft:pig","minecraft:hoglin"]}, 'minecraft:porkchop')
	createStew("kubejs:rabbit_soup", {"type":"minecraft:rabbit"}, 'minecraft:rabbit')
	createStew("kubejs:cod_soup", {"type":"minecraft:cod"}, 'minecraft:cod')
	createStew("kubejs:fish_soup", {"types":["minecraft:salmon","minecraft:tropical_fish"]}, "#forge:raw_fishes")
	createStew("tonstruct:meat_soup", {"types":["minecraft:sheep","minecraft:goat"]})
	event.recipes.createEmptying(["minecraft:bowl", Fluid.of("tconstruct:meat_soup", 250)], "tconstruct:meat_soup")
	event.custom({"type":"tconstruct:casting_table",
		"cast":{"item":"minecraft:bowl"},
		"cast_consumed":true,
		"cooling_time":1,
		"fluid":{"tag":"forge:soups/meat","amount":250},
		"result":"tconstruct:meat_soup"
	})
	event.custom({"type": "create:filling",
		"ingredients": [
		  {"item": "minecraft:bowl"},
		  {
			"amount": 250,
			"fluidTag": "forge:soups/meat"
		  }
		],
		"results": [{"item": "tconstruct:meat_soup"}]
	})
})

ServerEvents.tags('item', event => {
	//zinc anvils
	event.get('tconstruct:anvil_metal').add(CR('zinc_block'))

	//Necrotic bones are bones
	event.get('forge:bones').add('tconstruct:necrotic_bone')
})

ServerEvents.tags('block', event => {
	event.add('minecraft:mineable/shovel','tconstruct:mud_bricks_slab')
	event.add('minecraft:mineable/shovel','tconstruct:mud_bricks_stairs')
})