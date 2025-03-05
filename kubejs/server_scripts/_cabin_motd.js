PlayerEvents.loggedIn(event => {
    event.player.tell(['Welcome to ', Text.gold('CABIN'), ` on 1.20`]); // force recast to string
    event.player.tell(['Report pack issues to ', Text.gold('the Github').underlined().clickOpenUrl('https://github.com/ThePansmith/CABIN').hover('Click to open'), '.']);
})