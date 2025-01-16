if(Platform.isLoaded("create_central_kitchen")) {
	onEvent('recipes', event => {
		//fix cooking guide recipe since sturdy sheets are removed in CABIN
		event.remove({ id: 'create_central_kitchen:crafting/cooking_guide' })
		event.shapeless('create_central_kitchen:cooking_guide', [CR("schedule"), FD("canvas")])
		
		//Cakes don't support Tconstruct
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

		//Uses soup fluid
		event.remove({id:CK('mixing/tomato_sauce')})
		event.recipes.createMixing(Fluid.of(CK('tomato_sauce'), 125), [FD('tomato')]).heated()

		let CreateSoup = (event, soup, fluid, ingredients, amountMade, dish) => {
			event.recipes.createMixing(Fluid.of(fluid, amountMade), ingredients).heated()
			event.recipes.createEmptying([dish, Fluid.of(fluid, 250)], soup)
			event.recipes.createFilling(soup, [Fluid.of(fluid, 250), dish])
		}
		let TCSoup = (event, soup, fluid, ingredients, amountMade, dish) => {
			if(ingredients.length == 1){event.custom({"type": "tconstruct:melting",
				ingredient: Ingredient.of(ingredients[0]).withCount(1).toJson(),
				result: {
					"fluid":fluid,
					"amount":25*Math.floor(amountMade/(25*Ingredient.of(ingredients[0]).getCount()))
				},
				temperature: 100,
				time: 32
			})}
			event.custom({type: TC("casting_table"),
				cast: Ingredient.of(dish).toJson(),
				cast_consumed: true,
				"fluid": {
					name:fluid,
					amount:amountMade
				},
				result: Ingredient.of(soup).toJson(),
				cooling_time: 1
			})
		}
		let KJSoup = (event, soup, fluid, ingredients, amountMade) => {
			CreateSoup(event, soup, fluid, ingredients, amountMade, MC('bowl'))
			TCSoup(event, soup, fluid, ingredients, amountMade, MC('bowl'))
		}
		let KJDrink = (event, soup, fluid, ingredients, amountMade) => {
			CreateSoup(event, soup, fluid, ingredients, amountMade, MC('glass_bottle'))
			TCSoup(event, soup, fluid, ingredients, amountMade, MC('glass_bottle'))
		}
		CreateSoup(event, MC('mushroom_stew'),TC('mushroom_stew'), [F('#mushrooms',2)], 250, MC('bowl'))
		CreateSoup(event, MC('rabbit_stew'),TC('rabbit_stew'),[F('#mushrooms'),MC('baked_potato'),MC('rabbit'),MC('carrot')], 250, MC('bowl'))
		CreateSoup(event, MC('beetroot_soup'), TC('beetroot_soup'), [MC('beetroot',3)], 250, MC('bowl'))
		TCSoup(event, FD('tomato_sauce'), CK('tomato_sauce'), [FD('tomato')], 125, MC('bowl'))
		KJSoup(event, EXP('hard_stew'), KJ('hard_stew'), [EXP('rockshroom'), EXP('#stone_pebbles')], 250)
		KJSoup(event, EXP('sticky_stew'), KJ('sticky_stew'), [EXP('goldishroom'), EXP('shinyshroom')], 250)
		KJSoup(event, EXP('fluorescent_stew'), KJ('fluorescent_stew'), [EXP('lumishroom'), EXP('fluoshroom')], 250)
		KJDrink(event, FD('glow_berry_custard'), KJ('glow_berry_custard'), [MC('sugar'), F('#eggs'),MC('glow_berries'),Fluid.of(MC('milk'),250)],250)
		

		//Sequenced Assembly Galore - Broken because REI can only show 100 sequenced assembly recipes
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
		bowl(event, FD('grilled_salmon'),[F('#cooked_fishes/salmon'),MC('sweet_berries'),F('#crops/cabbage'),FD('onion')],1)
		bowl(event, FD('roast_chicken_block'),[MC('carrot'),MC('carrot'),MC('baked_potato'),MC('baked_potato'),FD('onion'),F('#eggs'),MC('bread'),MC('cooked_chicken')],1)
		bowl(event, FD('rice_roll_medley_block'),[FD('kelp_roll_slice'),FD('salmon_roll'),FD('cod_roll'),FD('kelp_roll_slice'),FD('salmon_roll'),FD('cod_roll'),FD('kelp_roll_slice'),FD('salmon_roll')],1)
		bowl(event, FD('vegetable_noodles'), [FD('raw_pasta'),F('#crops/cabbage'),F('#vegetables'),MC('carrot'),MC('brown_mushroom')],1)
		bowl(event, FD('noodle_soup'),[MC('dried_kelp'),F('#raw_pork'),FD('raw_pasta'),FD('fried_egg')],1)
		bowl(event, FD('dog_food'),[FD('rice'),FD('#wolf_prey'),MC('bone_meal'),MC('rotten_flesh')],1)
		bowl(event, FD('bacon_and_eggs'), [F('#cooked_bacon'), F('#cooked_eggs')], 2); 
		bowl(event, FD('beef_stew'),[F('#raw_beef'),MC('potato'),MC('carrot')],1); 
		bowl(event, FD('baked_cod_stew'),[FD('tomato'),F('#eggs'),MC('potato'),F('#raw_fishes/cod')],1);
		bowl(event, FD('ratatouille'), [F('#vegetables'), FD('tomato'), FD('onion'), MC('beetroot'),F('#tools/knives')],1)
		rice(event, FD('salmon_roll', 2), [FD('salmon_slice')], 2); 
		rice(event, FD('cod_roll', 2), [FD('cod_slice')], 2); 
		rice(event, FD('roasted_mutton_chops'), [FD('cooked_mutton_chops'),MC('beetroot'),FD('tomato')],1)
		rice(event, FD('steak_and_potatoes'),[MC('cooked_beef'),FD('onion'),MC('baked_potato')],1) 
		rice(event, FD('fried_rice'),[F('#eggs'),MC('carrot'),FD('onion')],1);
		meal(event, FD('horse_feed'),[MC('apple'),MC('apple'),MC('golden_carrot')],MC('hay_block'),1); 
		meal(event, FD('barbecue_stick'), [FD('onion'),FD('tomato'),KJ('#barbecue_stick_ingredient')],MC('stick'),1) 
		meal(event, FD('kelp_roll'), [FD('cooked_rice'), MC('dried_kelp')],MC('carrot'),2) 
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
		var transitional = KJ('incomplete_bowl_meal')
		event.recipes.createSequencedAssembly([FD('shepherds_pie_block')], MC('bowl'), [
			event.recipes.createDeploying(transitional, [transitional, MC('baked_potato')]),
			event.recipes.createDeploying(transitional, [transitional, F('#cooked_mutton')]),
			event.recipes.createDeploying(transitional, [transitional, FD('onion')]),
			event.recipes.createFilling(transitional, [transitional, Fluid.of('minecraft:milk',125)])
		]).loops(2)
		event.recipes.createSequencedAssembly([FD('pasta_with_mutton_chop')], MC('bowl'), [
			event.recipes.createDeploying(transitional, [transitional, FD('raw_pasta')]),
			event.recipes.createDeploying(transitional, [transitional, F('#raw_mutton')]),
			event.recipes.createFilling(transitional, [transitional, Fluid.of(CK('tomato_sauce'), 250)])
		]).loops(1)
		event.recipes.createSequencedAssembly([FD('pasta_with_meatballs')], MC('bowl'), [
			event.recipes.createDeploying(transitional, [transitional, FD('raw_pasta')]),
			event.recipes.createDeploying(transitional, [transitional, FD('minced_beef')]),
			event.recipes.createFilling(transitional, [transitional, Fluid.of(CK('tomato_sauce'), 250)])
		]).loops(1)
		event.recipes.createSequencedAssembly([FD('squid_ink_pasta')], MC('bowl'), [
			event.recipes.createDeploying(transitional, [transitional, F('#raw_fishes')]),
			event.recipes.createDeploying(transitional, [transitional, FD('tomato')]),
			event.custom({"type":"create:filling",
				"ingredients":[
					{"item":"kubejs:incomplete_bowl_meal"},
					{"fluidTag":"forge:ink","amount":125}
				],
				"results":[{"item":"kubejs:incomplete_bowl_meal"}]
			})
		]).loops(1)
		event.recipes.createSequencedAssembly([FD('mushroom_rice')], FD('cooked_rice'), [
			event.recipes.createDeploying(KJ('incomplete_cooked_rice_meal'), [KJ('incomplete_cooked_rice_meal'), F('#vegetables')]),
			event.custom({"type":"create:filling",
				"ingredients":[
					{"item":"kubejs:incomplete_cooked_rice_meal"},
					{"fluidTag":"kubejs:mushroom_stews","amount":250}
				],
				"results":[{"item":"kubejs:incomplete_cooked_rice_meal"}]
			})
		]).loops(1)
		event.recipes.createSequencedAssembly([FD('bone_broth')], MC('bowl'), [
			event.custom({"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_bowl_meal"},
					{"tag": "kubejs:broth_ingredients"}
				],
				"results": [{"item":"kubejs:incomplete_bowl_meal"}]
			}),
			event.custom({"type": "create:pressing",
				"ingredients": [{"item": "kubejs:incomplete_bowl_meal"}],
				"results": [{"item": "kubejs:incomplete_bowl_meal"}]
			}),
			event.custom({"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_bowl_meal"},
					{"tag": "forge:bones"}
				],
				"results": [{"item":"kubejs:incomplete_bowl_meal"}]
			})
		]).loops(1)
		event.recipes.createSequencedAssembly([FD('fish_stew')], MC('bowl'), [
			event.recipes.createDeploying(transitional, [transitional, FD('tomato')]),
			event.recipes.createDeploying(transitional, [transitional, FD('onion')]),
			event.recipes.createPressing(transitional, transitional),
			event.recipes.createDeploying(transitional, [transitional, F('#raw_fishes')])
		]).loops(1)
		event.recipes.createSequencedAssembly([FD('vegetable_soup')], MC('bowl'), [
			event.recipes.createDeploying(transitional, [transitional, MC('beetroot')]),
			event.recipes.createDeploying(transitional, [transitional, MC('potato')]),
			event.recipes.createDeploying(transitional, [transitional, F('#crops/cabbage')]),
			event.recipes.createPressing(transitional, transitional),
			event.recipes.createDeploying(transitional, [transitional, MC('carrot')])
		]).loops(1)
		event.recipes.createSequencedAssembly([FD('pumpkin_soup')], MC('bowl'), [
			event.recipes.createFilling(transitional, [transitional, Fluid.of(MC('milk'),250)]),
			event.recipes.createDeploying(transitional, [transitional, FD('pumpkin_slice')]),
			event.recipes.createDeploying(transitional, [transitional, F('#raw_pork')]),
			event.recipes.createDeploying(transitional, [transitional, F('#crops/cabbage')])
		]).loops(1)
		event.recipes.createSequencedAssembly([FD('chicken_soup')], MC('bowl'), [
			event.recipes.createFilling(transitional, [transitional, Fluid.of(MC('milk'),250)]),
			event.recipes.createDeploying(transitional, [transitional, F('#vegetables')]),
			event.recipes.createDeploying(transitional, [transitional, F('#raw_chicken')]),
			event.recipes.createDeploying(transitional, [transitional, MC('carrot')]),
			event.recipes.createDeploying(transitional, [transitional, F('#crops/cabbage')])
		]).loops(1)
		
		if(Platform.isLoaded('forbidden_arcanus')){
			event.recipes.createSequencedAssembly([FA('bat_soup')], MC('bowl'), [
				event.custom({"type": "create:deploying",
					"ingredients": [
						{"item": "kubejs:incomplete_bowl_meal"},
						{"item": "minecraft:nether_wart"}
					],
					"results": [{"item":"kubejs:incomplete_bowl_meal"}]
				}),
				event.custom({"type":"create:filling",
					"ingredients":[
						{"item":"kubejs:incomplete_bowl_meal"},
						{"fluidTag":"kubejs:mushroom_stews","amount":125}
					],
					"results":[{"item":"kubejs:incomplete_bowl_meal"}]
				}),
				event.custom({"type": "create:deploying",
					"ingredients": [
						{"item": "kubejs:incomplete_bowl_meal"},
						{"item": FA('bat_wing')}
					],
					"results": [{"item":"kubejs:incomplete_bowl_meal"}]
				})
			]).loops(1)
		}
		if(Platform.isLoaded('buddycardsexp')){
			event.recipes.createSequencedAssembly(['buddycardsexp:buddybean_pie'], FD('pie_crust'), [
				event.recipes.createFilling(KJ('incomplete_pie_crust_meal'), [KJ('incomplete_pie_crust_meal'), Fluid.of(KJ('buddybean_paste'),250)]),
				event.recipes.createDeploying(KJ('incomplete_pie_crust_meal'), [KJ('incomplete_pie_crust_meal'), 'buddycardsexp:buddygummies']),
				event.recipes.createDeploying(KJ('incomplete_pie_crust_meal'), [KJ('incomplete_pie_crust_meal'), MC('sugar')])
			]).loops(2)
			event.recipes.createCompacting('8x buddycardsexp:buddycookie', ['2x #forge:flour', Fluid.of(KJ('buddybean_paste'),250)])
			KJSoup(event, 'buddycardsexp:buddybean_paste', KJ('buddybean_paste'), ['2x buddycardsexp:diced_buddybeans'], 125)
			event.recipes.createSequencedAssembly(['buddycardsexp:buddycard_pack_farmers'], FD('canvas'), [
				event.recipes.createDeploying(KJ('incomplete_canvas_meal'), [KJ('incomplete_canvas_meal'), MC('sugar')]),
				event.recipes.createFilling(KJ('incomplete_canvas_meal'), [KJ('incomplete_canvas_meal'), Fluid.of(KJ('buddybean_paste'), 250)]),
				event.recipes.createDeploying(KJ('incomplete_canvas_meal'), [KJ('incomplete_canvas_meal'), 'buddycardsexp:shredded_buddycard'])
			]).loops(2)
		}
		if(Platform.isLoaded('aquaculture')){
			event.recipes.createSequencedAssembly(['aquaculture:turtle_soup'], MC('bowl'), [
				event.recipes.createFilling(transitional, [transitional, Fluid.of(MC('water'), 250)]),
				event.recipes.createDeploying(transitional, [transitional, '#aquaculture:turtle'])
			]).loops(1)
		}

		//A few cooking recipes missing - Slice and Dice no longer needed (disable mixer recipes in the config)
		event.recipes.createMixing(FD('cabbage_rolls'), [F('#salad_ingredients/cabbage'), FD('#cabbage_roll_ingredients')]).heated()
		event.recipes.createMixing(FD('dumplings', 2), [KJ('#dumpling_ingredients'), F('#dough'),F('#salad_ingredients/cabbage'),FD('onion')]).heated()
		event.recipes.createMixing(FD('stuffed_pumpkin_block'), [MC('pumpkin'),MC('potato'),FD('rice'),FD('onion'),MC('brown_mushroom'),F('#vegetables'),F('#berries')]).heated()
		event.recipes.createMixing(FD('cooked_rice'), [MC('bowl'), FD('rice')]).heated()
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
