if (Platform.isLoaded('expcaves')){
    onEvent('recipes', event => {
        let stews = [EXP('sticky_stew'),EXP('fluorescent_stew'),EXP('hard_stew')]
        let shrooms = [
            [EXP('goldishroom'),EXP('shinyshroom')],
            [EXP('lumishroom'),EXP('fluoshroom')],
            [EXP('rockshroom'),EXP('#stone_pebbles')]
        ]
        for (let i = 0; i < stews.length; i++){event.custom({
            type: "farmersdelight:cooking",
            recipe_book_tab: "meals",
            ingredients: [
                Ingredient.of(shrooms[i][0]).toJson(),
                Ingredient.of(shrooms[i][1]).toJson()
            ],
            result: Ingredient.of(stews[i]).toJson(),
            experience: 1.0,
            cookingtime: 200,
            container:Ingredient.of(MC('bowl')).toJson()
      })}
    })
}