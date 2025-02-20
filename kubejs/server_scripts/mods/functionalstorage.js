if(Platform.isLoaded("functionalstorage")) {
	ServerEvents.recipes(event => {
		// let drawer_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'warped', 'crimson']
		// let drawer_sizes = ['1', '2', '4']
		// event.replaceInput({ id: SD('compacting_drawers_3') }, MC('iron_ingot'), F('#ingots/zinc'))
		// event.remove({ output: SD("upgrade_template") })

		// drawer_types.forEach(e => {

		// 	let trim = SD(`${e}_trim`)
		// 	let plank = MC(`${e}_planks`)
		// 	event.remove({ id: trim })
		// 	event.shaped(Item.of(trim, 4), [
		// 		'SSS',
		// 		'PMP',
		// 		'SSS'
		// 	], {
		// 		P: CR('zinc_ingot'),
		// 		M: '#forge:chests/wooden',
		// 		S: plank
		// 	})

		// 	event.stonecutting(SD("upgrade_template"), trim)

		// 	drawer_sizes.forEach(size => {
		// 		let full = SD(`${e}_full_drawers_${size}`)
		// 		let half = SD(`${e}_half_drawers_${size}`)
		// 		event.remove({ id: full })
		// 		event.remove({ id: half })
		// 		event.stonecutting(full, trim)
		// 		event.stonecutting(Item.of(half, 2), trim)
		// 	})
		// })

		//drawer controller and controller_slave
		zincMachine(event, Item.of('functionalstorage:storage_controller', 1), MC('diamond'))
		zincMachine(event, Item.of('functionalstorage:controller_extension', 1), MC('gold_ingot'))
		zincMachine(event, Item.of('functionalstorage:simple_compacting_drawer', 1), CR('mechanical_piston'))
		zincMachine(event, Item.of('functionalstorage:compacting_drawer', 1), CR('sticky_mechanical_piston'))
		enderiumMachine(event, Item.of('functionalstorage:fluid_1', 4))
		enderiumMachine(event, Item.of('functionalstorage:fluid_2', 4))
		enderiumMachine(event, Item.of('functionalstorage:fluid_4', 4))
		enderiumMachine(event, Item.of('functionalstorage:ender_drawer', 1))

		//framed drawers
		event.remove({id:'functionalstorage:compacting_framed_drawer'})
		event.remove({id:'functionalstorage:framed_storage_controller'})
		event.remove({id:'functionalstorage:framed_controller_extension'})
		event.remove({id:'functionalstorage:framed_simple_compacting_drawer'})
		let pattern = ['III','IDI','III']
		event.shaped(Item.of("functionalstorage:compacting_framed_drawer", 1), pattern,
			{I:'#forge:nuggets/iron', D:'functionalstorage:compacting_drawer'})
		event.shaped(Item.of("functionalstorage:framed_storage_controller", 1), pattern,
			{I:'#forge:nuggets/iron', D:'functionalstorage:storage_controller'})
		event.shaped(Item.of("functionalstorage:framed_controller_extension", 1), pattern,
			{I:'#forge:nuggets/iron', D:'functionalstorage:controller_extension'})
		event.shaped(Item.of("functionalstorage:framed_simple_compacting_drawer", 1), pattern,
			{I:'#forge:nuggets/iron', D:'functionalstorage:simple_compacting_drawer'})
	})

	ServerEvents.tags('block', event => {
		event.add("create:wrench_pickup", /functionalstorage/)
		event.add("create:wrench_pickup", /everycomp:fs\//)
	})
}