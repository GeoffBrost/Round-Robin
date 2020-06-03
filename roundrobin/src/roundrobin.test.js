import Player from "./player.js"

test ( "player name", () => {
    let player = new Player("steve");
    expect(player.getName()).toBe("steve");
});
    
