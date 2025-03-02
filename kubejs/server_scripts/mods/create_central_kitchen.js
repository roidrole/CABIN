if(Platform.isLoaded("create_central_kitchen")) {
	ServerEvents.recipes(event => {
		//fix cooking guide recipe since sturdy sheets are removed in CABIN
		event.remove({ id: 'create_central_kitchen:crafting/cooking_guide' })
		event.shapeless('create_central_kitchen:cooking_guide', [CR("schedule"), "farmersdelight:canvas"])
		
		//Cakes don't support Tconstruct
		let slimes = ["earth", "sky", "blood", "ender", "magma"]
		slimes.forEach(slime => {
			event.shapeless(`tconstruct:${slime}_cake`, [`7x kubejs:${slime}_cake_slice`])
			event.custom({
				"type": "farmersdelight:cutting",
				"ingredients": [{"item":`tconstruct:${slime}_cake`}],
				"tool": { "tag": "forge:tools/knives" },
				"result": [{ "item": `kubejs:${slime}_cake_slice`, "count":7}]
			})
		})

		//Uses soup fluid
		event.remove({id:'create_central_kitchen:mixing/tomato_sauce'})
		event.recipes.createMixing(Fluid.of("create_central_kitchen:tomato_sauce", 125), ["farmersdelight:tomato"]).heated()

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
					"amount":25*Math.floor(amountMade/(25*Item.of(ingredients[0]).getCount()))
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
			CreateSoup(event, soup, fluid, ingredients, amountMade, "minecraft:bowl")
			TCSoup(event, soup, fluid, ingredients, amountMade, "minecraft:bowl")
		}
		let KJDrink = (event, soup, fluid, ingredients, amountMade) => {
			CreateSoup(event, soup, fluid, ingredients, amountMade, "minecraft:glass_bottle")
			TCSoup(event, soup, fluid, ingredients, amountMade, "minecraft:glass_bottle")
		}
		CreateSoup(event, "minecraft:mushroom_stew","tconstruct:mushroom_stew", ["2x #forge:mushrooms"], 250, "minecraft:bowl")
		CreateSoup(event, "minecraft:rabbit_stew","tconstruct:rabbit_stew",["#forgemushrooms","minecraft:baked_potato","minecraft:rabbit","minecraft:carrot"], 250, "minecraft:bowl")
		CreateSoup(event, "minecraft:beetroot_soup", "tconstruct:beetroot_soup", ["3x minecraft:beetroot"], 250, "minecraft:bowl")
		TCSoup(event, "farmersdelight:tomato_sauce", "create_central_kitchen:tomato_sauce", ["farmersdelight:tomato"], 125, "minecraft:bowl")
		
		//Dishes
		event.recipes.createDeploying("kubejs:pasta",["minecraft:bowl","farmersdelight:raw_pasta"])

		//Sequenced Assembly
		let meal = (event, output, input, dish, loop) => {
			var trans = KJ("incomplete_"+dish.split(":")[1]+"_meal")
			event.recipes.createSequencedAssembly([output], dish, input.map(element => {
				switch(true){
					case(element == "press"):
						return event.recipes.createPressing(trans, trans);
					case (element.toString().startsWith("Fluid")):
						return event.recipes.createFilling(trans, [trans, element]);
					case (element.toString().startsWith("fluidTag")):
						return event.custom({
							"type": "create:filling",
							"ingredients": [
								{item:trans},
								{
									fluidTag:element.split("'")[1],
									amount:parseInt(element.match(/\d+/))
								}
							],
							"results": [{item:trans}]
						});
					default:
						return event.recipes.createDeploying(trans, [trans, element]);
				}
			})).transitionalItem(trans).loops(loop)
		}
		let bowl = (event, output, input, loop) => meal(event, output, input, "minecraft:bowl", loop)
		let rice = (event, output, input, loop) => meal(event, output, input, "farmersdelight:cooked_rice", loop)
		let nood = (event, output, input, loop) => meal(event, output, input, "kubejs:pasta", loop)

		//All farmers delight foods
		if(Platform.isLoaded("thermal")){event.custom({"result":[{"item":"farmersdelight:melon_popsicle"}],
				"type":"thermal:chiller",
				"ingredients":[
					{
						"fluid":"create_central_kitchen:melon_juice",
						"amount":250
					},
					{"item":"minecraft:stick"}
				],
				
				"energy":4000
			})
		}
		KJDrink(event, "farmersdelight:glow_berry_custard", "kubejs:glow_berry_custard", ["minecraft:sugar", "#forge:eggs","minecraft:glow_berries",Fluid.of("minecraft:milk",250)],250)
		bowl(event, "farmersdelight:fruit_salad", ["minecraft:apple","#forge:berries","#kubejs:fruit_slices"],2)
		bowl(event, "farmersdelight:mixed_salad", ["#forge:crops/cabbage","farmersdelight:tomato","minecraft:beetroot"],1)
		bowl(event, "farmersdelight:nether_salad", ["minecraft:crimson_fungus","minecraft:warped_fungus"],1)
		meal(event, "farmersdelight:barbecue_stick", ["farmersdelight:onion","farmersdelight:tomato","#kubejs:barbecue_stick_ingredient"],"minecraft:stick",1) 
		meal(event, 'farmersdelight:mutton_wrap', ["press","#forge:cooked_mutton","#forge:crops/cabbage","farmersdelight:onion"],"minecraft:bread",1)
		event.recipes.createMixing("2x farmersdelight:dumplings", ["#kubejs:dumpling_ingredients", "#forge:dough","#forge:salad_ingredients/cabbage","farmersdelight:onion"]).heated()
		meal(event, "farmersdelight:stuffed_potato", ["#forge:cooked_beef",Fluid.of('minecraft:milk',250)],"minecraft:baked_potato",1)
		event.recipes.createMixing("farmersdelight:cabbage_rolls", ["#forge:salad_ingredients/cabbage", "#farmersdelight:cabbage_roll_ingredients"]).heated()
		rice(event, "2x farmersdelight:salmon_roll", ["farmersdelight:salmon_slice"], 2); 
		rice(event, "2x farmersdelight:cod_roll", ["farmersdelight:cod_slice"], 2); 
		meal(event, "farmersdelight:kelp_roll", ["farmersdelight:cooked_rice", "minecraft:dried_kelp"],"minecraft:carrot",2) 

		event.recipes.createMixing("farmersdelight:cooked_rice", ["minecraft:bowl", "farmersdelight:rice"]).heated()
		bowl(event, "farmersdelight:bone_broth", ['#kubejs:broth_ingredients', 'press', '#forge:bones'],1)
		bowl(event, "farmersdelight:beef_stew",["#forge:raw_beef","minecraft:potato","minecraft:carrot"],1); 
		bowl(event, "farmersdelight:chicken_soup", [Fluid.of("minecraft:milk",250),"#forge:vegetables","#forge:raw_chicken","minecraft:carrot","#forge:crops/cabbage"],1)
		bowl(event, "farmersdelight:vegetable_soup", ["minecraft:beetroot", "minecraft:potato", "#forge:crops/cabbage", 'press', "minecraft:carrot"],1)
		bowl(event, "farmersdelight:fish_stew", ["farmersdelight:tomato", "farmersdelight:onion", 'press', "#forge:raw_fishes"],1)
		rice(event, "farmersdelight:fried_rice",["#forge:eggs","minecraft:carrot","farmersdelight:onion"],1);
		bowl(event, "farmersdelight:pumpkin_soup", [Fluid.of("minecraft:milk",250),"farmersdelight:pumpkin_slice","#forge:raw_pork","#forge:crops/cabbage"],1)
		bowl(event, "farmersdelight:baked_cod_stew",["farmersdelight:tomato","#forge:eggs","minecraft:potato","#forge:raw_fishes/cod"],1);
		nood(event, "farmersdelight:noodle_soup",["minecraft:dried_kelp","#forge:raw_pork","farmersdelight:fried_egg"],1)
		bowl(event, "farmersdelight:bacon_and_eggs", ["#forge:cooked_bacon", "#forge:cooked_eggs"], 2); 
		nood(event, "farmersdelight:pasta_with_meatballs", ["farmersdelight:minced_beef",Fluid.of("create_central_kitchen:tomato_sauce", 250)],1)
		nood(event, "farmersdelight:pasta_with_mutton_chop",["#forge:raw_mutton",Fluid.of("create_central_kitchen:tomato_sauce", 250)],1)
		rice(event, "farmersdelight:mushroom_rice", ["#forge:vegetables", Fluid.of("tconstruct:mushroom_stew",250)],1)
		rice(event, "farmersdelight:roasted_mutton_chops", ["farmersdelight:cooked_mutton_chops","minecraft:beetroot","farmersdelight:tomato"],1)
		nood(event, "farmersdelight:vegetable_noodles", ["#forge:crops/cabbage","#forge:vegetables","minecraft:carrot","minecraft:brown_mushroom"],1)
		rice(event, "farmersdelight:steak_and_potatoes",["minecraft:cooked_beef","farmersdelight:onion","minecraft:baked_potato"],1) 
		bowl(event, "farmersdelight:ratatouille", ["#forge:vegetables", "farmersdelight:tomato", "farmersdelight:onion", "minecraft:beetroot","#forge:tools/knives"],1)
		nood(event, "farmersdelight:squid_ink_pasta", ["#forge:raw_fishes","farmersdelight:tomato","fluidTag:'forge:ink',125"],1)
		bowl(event, "farmersdelight:grilled_salmon",["#forge:cooked_fishes/salmon","minecraft:sweet_berries","#forge:crops/cabbage","farmersdelight:onion"],1)
		bowl(event, "farmersdelight:roast_chicken_block",["minecraft:carrot","minecraft:carrot","minecraft:baked_potato","minecraft:baked_potato","farmersdelight:onion","#forge:eggs","minecraft:bread","minecraft:cooked_chicken"],1)
		event.recipes.createMixing("farmersdelight:stuffed_pumpkin_block", ["minecraft:pumpkin","minecraft:potato","farmersdelight:rice","farmersdelight:onion","minecraft:brown_mushroom","#forge:vegetables","#forge:berries"]).heated()
		meal(event, "farmersdelight:honey_glazed_ham_block", ["farmersdelight:cooked_rice","minecraft:sweet_berries","minecraft:sweet_berries",Fluid.of('create:honey',125)],"farmersdelight:smoked_ham",2)
		bowl(event, "farmersdelight:shepherds_pie_block",["minecraft:baked_potato","#forge:cooked_mutton","farmersdelight:onion",Fluid.of('minecraft:milk',125)],2)
		bowl(event, "farmersdelight:rice_roll_medley_block",["farmersdelight:kelp_roll_slice","farmersdelight:salmon_roll","farmersdelight:cod_roll","farmersdelight:kelp_roll_slice","farmersdelight:salmon_roll","farmersdelight:cod_roll","farmersdelight:kelp_roll_slice","farmersdelight:salmon_roll"],1)
		bowl(event, "farmersdelight:dog_food",["farmersdelight:rice","#farmersdelight:wolf_prey","minecraft:bone_meal","minecraft:rotten_flesh"],1)
		meal(event, "farmersdelight:horse_feed",["minecraft:apple","minecraft:apple","minecraft:golden_carrot"],"minecraft:hay_block",1); 
		
		if(Platform.isLoaded("forbidden_arcanus")){bowl(event, "forbidden_arcanus:bat_soup", ["minecraft:nether_wart",Fluid.of("tconstruct:mushroom_stew",125),"forbidden_arcanus:bat_wing"],1)}
		if(Platform.isLoaded("aquaculture")){bowl(event,'aquaculture:turtle_soup',[Fluid.of("minecraft:water",250),'#aquaculture:turtle'],1)}
		
		if(Platform.isLoaded("buddycardsexp")){
			event.recipes.createCompacting('8x buddycardsexp:buddycookie', ['2x #forge:flour', Fluid.of("kubejs:buddybean_paste",250)])
			KJSoup(event, "buddycardsexp:buddybean_paste", "kubejs:buddybean_paste", ['2x buddycardsexp:diced_buddybeans'], 125)
			meal(event,'buddycardsexp:buddybean_pie',[Fluid.of("kubejs:buddybean_paste",250),'buddycardsexp:buddygummies',"minecraft:sugar"],"farmersdelight:pie_crust",2)
			meal(event,'buddycardsexp:buddycard_pack_farmers',["minecraft:sugar",Fluid.of("kubejs:buddybean_paste", 250),'buddycardsexp:shredded_buddycard'],"farmersdelight:canvas",2)
		}
	})
}