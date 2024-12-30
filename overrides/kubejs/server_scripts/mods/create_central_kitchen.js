if(Platform.isLoaded("create_central_kitchen")) {
	onEvent('recipes', event => {
		//fix cooking guide recipe since sturdy sheets are removed in CABIN
		event.remove({ id: 'create_central_kitchen:crafting/cooking_guide' })
		event.shapeless('create_central_kitchen:cooking_guide', [CR("schedule"), FD("canvas")])
		
		//Doesn't support Tconstruct
		let slice = [KJ('earthslime_cake_slice'),KJ('skyslime_cake_slice'),KJ('blood_cake_slice'),KJ('enderslime_cake_slice'),KJ('magma_cake_slice')]
		let cakes = [TC('earth_cake'),TC('sky_cake'),TC('blood_cake'),TC('ender_cake'),TC('magma_cake')]
		for (let i = 0; i < cakes.length; i++) {
			event.shapeless(cakes[i], ['7x '+slice[i]])
			event.custom({
				"type": "farmersdelight:cutting",
				"ingredients": [{"item":cakes[i]}],
				"tool": { "tag": "forge:tools/knives" },
				"result": [{ "item": slice[i], "count":7}]
			})
		}

		//FD had an update, Central Kitchen didn't
		let meal = (event, output, input, dish, loop) => {
			var transitional = KJ("incomplete_"+dish.split(":")[1]+"_meal")
			event.recipes.createSequencedAssembly([output], dish,
				input.map(element => event.recipes.createDeploying(transitional, [transitional, element]))
			).loops(loop)
		}
		
		let bowl = (event, output, input, loop) => meal(event, output, input, MC('bowl'), loop)
		let rice = (event, output, input, loop) => meal(event, output, input, FD('cooked_rice'), loop)
		bowl(event, FD('fruit_salad'), [MC('apple'),F('#berries'),KJ('#fruit_slices')],2)
		bowl(event, FD('nether_salad'), [MC('crimson_fungus'),MC('warped_fungus')],1)
		bowl(event, FD('mixed_salad'), [F('#crops/cabbage'),FD('tomato'),MC('beetroot')],1)
		meal(event, FD('barbecue_stick'), [F('#crops/onion'),F('#crops/tomato'),KJ('#barbecue_stick_ingredient')],MC('stick'),1)
		rice(event, FD('salmon_roll', 2), [FD('salmon_slice')], 2)
		rice(event, FD('cod_roll', 2), [FD('cod_slice')], 2)
		meal(event, FD('kelp_roll'), [FD('cooked_rice'), MC('dried_kelp')],MC('carrot'),2)
		bowl(event, FD('bacon_and_eggs'), [F('#cooked_bacon'), F('#cooked_eggs')], 2)
		rice(event, FD('roasted_mutton_chops'), [FD('cooked_mutton_chops'),MC('beetroot'),FD('tomato')],1)
		rice(event, FD('steak_and_potatoes'),[MC('cooked_beef'),FD('onion'),MC('baked_potato')],1)
		bowl(event, FD('grilled_salmon'),[F('#cooked_fishes/salmon'),MC('sweet_berries'),F('#crops/cabbage'),FD('onion')],1)
		bowl(event, FD('roast_chicken_block'),[MC('carrot'),MC('carrot'),MC('baked_potato'),MC('baked_potato'),FD('onion'),F('#eggs'),MC('bread'),MC('cooked_chicken')],1)
		bowl(event, FD('rice_roll_medley_block'),[FD('kelp_roll_slice'),FD('salmon_roll'),FD('cod_roll'),FD('kelp_roll_slice'),FD('salmon_roll'),FD('cod_roll'),FD('kelp_roll_slice'),FD('salmon_roll')],1)
		event.recipes.createSequencedAssembly([FD('stuffed_potato')], MC('baked_potato'), [
			event.recipes.createDeploying(KJ('incomplete_baked_potato_meal'), [KJ('incomplete_baked_potato_meal'), F('#cooked_beef')]),
			event.recipes.createFilling(KJ('incomplete_baked_potato_meal'), [KJ('incomplete_baked_potato_meal'), Fluid.of('minecraft:milk', 250)])
		]).loops(1)
		event.recipes.createSequencedAssembly([FD('honey_glazed_ham_block')], FD('smoked_ham'), [
			event.recipes.createDeploying(KJ('incomplete_smoked_ham_meal'), [KJ('incomplete_smoked_ham_meal'), FD('cooked_rice')]),
			event.recipes.createDeploying(KJ('incomplete_smoked_ham_meal'), [KJ('incomplete_smoked_ham_meal'), MC('sweet_berries')]),
			event.recipes.createDeploying(KJ('incomplete_smoked_ham_meal'), [KJ('incomplete_smoked_ham_meal'), MC('sweet_berries')]),
			event.recipes.createFilling(KJ('incomplete_smoked_ham_meal'), [KJ('incomplete_smoked_ham_meal'), Fluid.of('create:honey',125)])
		]).loops(2)
		event.recipes.createSequencedAssembly([FD('shepherds_pie_block')], MC('bowl'), [
			event.recipes.createDeploying(KJ('incomplete_bowl_meal'), [KJ('incomplete_bowl_meal'), MC('baked_potato')]),
			event.recipes.createDeploying(KJ('incomplete_bowl_meal'), [KJ('incomplete_bowl_meal'), F('#cooked_mutton')]),
			event.recipes.createDeploying(KJ('incomplete_bowl_meal'), [KJ('incomplete_bowl_meal'), FD('onion')]),
			event.recipes.createFilling(KJ('incomplete_bowl_meal'), [KJ('incomplete_bowl_meal'), Fluid.of('minecraft:milk',125)])
		]).loops(2)
		if(Platform.isLoaded('buddycardsexp')){
			meal(event, 'buddycardsexp:buddybean_pie', ['buddycardsexp:buddybean_paste', 'buddycardsexp:buddygummies', MC('sugar')], FD('pie_crust'), 2)
			event.recipes.createCompacting('8x buddycardsexp:buddycookie', ['2x #forge:flour', 'buddycardsexp:buddybean_paste'])
		}
	})

	onEvent('item.tags', event => {
		event.get('kubejs:cake_slices')
			.add(KJ('earthslime_cake_slice'))
			.add(KJ('skyslime_cake_slice'))
			.add(KJ('blood_cake_slice'))
			.add(KJ('enderslime_cake_slice'))
			.add(KJ('magma_cake_slice'))
	})
}
