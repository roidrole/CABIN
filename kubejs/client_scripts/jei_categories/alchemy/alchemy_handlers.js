if (!global.jeiCategories.alchemy) global.jeiCategories.alchemy = {
    recipeType: null,
    resources: {
        energyEmpty: null,
        energyFull: null,
        alchemyArrow: null
    },
    handlers: {
        verifyRecipe: undefined,
        setRecipe: undefined,
        draw: undefined,
        tooltips: undefined
    },
    loadResources: undefined
};

global.jeiCategories.alchemy.loadResources = function(guiHelper) {
    this.resources.energyEmpty = guiHelper.createDrawable(
        new ResourceLocation("cabin:textures/gui/jei/widgets.png"),
        0,
        0,
        14,
        18
    );
    this.resources.energyFull = guiHelper.createAnimatedDrawable(
        guiHelper.createDrawable(new ResourceLocation("cabin:textures/gui/jei/widgets.png"), 14, 0, 14, 18),
        40,
        JEIIDrawableAnimated.StartDirection.BOTTOM,
        false
    );
    this.resources.alchemyArrow = guiHelper.createDrawable(
        new ResourceLocation("cabin:textures/gui/jei/widgets.png"),
        28,
        0,
        42,
        18
    );
}

global.jeiCategories.alchemy.handlers.verifyRecipe = (jeiHelpers, recipe) => {
    // IMPORTANT: Always return true or false. If you do not, it could crash the game or cause JEI to not work properly.
    if (!recipe) return false;
    if (!recipe.data) return false;
    if (!recipe.data.input) return false;
    if (!recipe.data.output) return false;

    return true;
}

global.jeiCategories.alchemy.handlers.setRecipe = (jeiHelpers, builder, recipe, focuses) => {
    let guiHelper = jeiHelpers.getGuiHelper()
    let inputItems = recipe.data.input;

    for(let i=0;i<inputItems.length;++i) {
        builder.addSlot("INPUT", 20+(20*i), 45)
            .addItemStack(Item.of(inputItems[i]))
            .setStandardSlotBackground()
            .setBackground(guiHelper.getSlotDrawable(), -1, -1);
    }
    builder.addSlot("CATALYST", 75, 45)
        .addItemStack(Item.of('minecraft:hopper_minecart'));

    builder.addSlot("OUTPUT", 114, 45)
        .addItemStack(Item.of(recipe.data.output))
        .setOutputSlotBackground()
        .setBackground(guiHelper.getOutputSlot(), -1, -1);

}

global.jeiCategories.alchemy.handlers.draw = (jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
    global.jeiCategories.alchemy.resources.energyEmpty.draw(guiGraphics, 5, 44);
    global.jeiCategories.alchemy.resources.energyFull.draw(guiGraphics, 5, 44);
    global.jeiCategories.alchemy.resources.alchemyArrow.draw(guiGraphics, 60, 44);

    //I don't fully understand this matrix stuff, most of it is copied from Create
    let matrixStack = guiGraphics.pose();
    matrixStack.pushPose();
    matrixStack.translate(2, 22, 200);
    matrixStack.translate(75, 5, 0);
    matrixStack.mulPose(Axis.XP.rotationDegrees(-15.5));
    matrixStack.mulPose(Axis.YP.rotationDegrees(22.5 + 90));

    AnimatedKinetics.defaultBlockElement(Block.getBlock('thermal:machine_frame').defaultBlockState())
        .rotateBlock(0, 0, 0)
        .scale(20)
        .render(guiGraphics);
        
    matrixStack.translate(0, 20, 0);

    AnimatedKinetics.defaultBlockElement(Block.getBlock('ad_astra:small_orange_industrial_lamp').defaultBlockState())
    .rotateBlock(270, 0, 0)
    .scale(20)
    .render(guiGraphics);

    matrixStack.popPose();
}

global.jeiCategories.alchemy.handlers.tooltips = (jeiHelpers, recipe, recipeSlotsView, mouseX, mouseY) => {
    if (mouseX>5&&mouseX<18&&mouseY>44&&mouseY<61) {
        return [ThermalStringHelper.getTextComponent("info.cofh.energy").append(": " + ThermalStringHelper.format(recipe.data.energy) + " " + ThermalStringHelper.localize("info.cofh.unit_rf"))];
    }
    return [];
}