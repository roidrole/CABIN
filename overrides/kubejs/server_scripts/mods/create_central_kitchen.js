if(Platform.isLoaded("create_central_kitchen")) {
	let slice = [KJ('earthslime_cake_slice'),KJ('skyslime_cake_slice'),KJ('blood_cake_slice'),KJ('enderslime_cake_slice'),KJ('magma_cake_slice')]
	onEvent('recipes', event => {
		//fix cooking guide recipe since sturdy sheets are removed in CABIN
		event.remove({ id: 'create_central_kitchen:crafting/cooking_guide' })
		event.shapeless('create_central_kitchen:cooking_guide', [CR("schedule"), FD("canvas")])

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
	})
}