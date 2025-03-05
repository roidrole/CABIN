if(Platform.isLoaded("sophisticatedbackpacks")) {
	ServerEvents.recipes(event => {
		//This replacement does not work for some reason
		//event.replaceInput({ mod: 'sophisticatedbackpacks' }, MC('redstone'), MC('copper_ingot'))

		event.replaceInput({ id: 'sophisticatedbackpacks:stack_upgrade_starter_tier'}, 'minecraft:copper_block', 'create:andesite_alloy')
		event.replaceInput({ id: 'sophisticatedbackpacks:stack_upgrade_tier_1'}, 'minecraft:iron_block', '#forge:ingots/brass')
		event.replaceInput({ id: 'sophisticatedbackpacks:stack_upgrade_tier_1_from_starter'}, 'minecraft:iron_block', '#forge:ingots/brass')
		event.replaceInput({ id: 'sophisticatedbackpacks:stack_upgrade_tier_2'}, 'minecraft:gold_block', '#forge:ingots/invar')
		event.replaceInput({ id: 'sophisticatedbackpacks:stack_upgrade_tier_3'}, 'minecraft:diamond_block', '#forge:ingots/enderium')

		event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_4'})
		event.shaped('sophisticatedbackpacks:stack_upgrade_tier_4', [
			'MPM',
			'MUM',
			'MPM'
		], {
			M: 'kubejs:calculation_mechanism',
			P: 'ae2:cell_component_1k',
			U: 'sophisticatedbackpacks:stack_upgrade_tier_3'
		})

		//no
		event.remove({ id: 'sophisticatedbackpacks:inception_upgrade'})
	})
}