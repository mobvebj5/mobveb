// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000101010000000601020101010101010101000202000000000200000000000000000002020000000002000000000000000202020200000000020200020202020202020200000000000002000000000002000202000000020207020200000000020002000000000000000200000000000200020000000000000002000000000002000200000000000000030202020202040002000000000000000000020202000000020000000000000000000202050000000200000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 
. . . . . . . . . . . 2 . . 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 . . 2 2 
2 2 . 2 2 2 2 2 2 2 . . . . 2 2 
2 2 . . 2 . . . . . . . . 2 2 2 
2 2 2 . 2 2 2 2 2 . 2 . . 2 2 2 
. . . . . 2 2 2 2 . 2 . 2 2 2 2 
2 2 2 . 2 2 2 2 2 . 2 . 2 2 2 2 
2 2 2 . 2 2 2 2 2 . 2 . 2 2 2 2 
2 2 2 . . . . . . . 2 . 2 2 2 2 
2 2 2 2 2 . . . 2 2 2 . 2 2 2 2 
2 2 2 2 2 . . . 2 2 2 . 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.swamp.swampTile9,sprites.swamp.swampTile12,sprites.swamp.swampTile14,sprites.dungeon.stairLarge,sprites.dungeon.stairEast,sprites.builtin.forestTiles0], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000100000001010101000000000000000001000000000100010101000201010100010000000101000001010100000001010101010101000001010000010101010101010000000001010000000000000001010100000000010000000000000000000001000000000101000000000000000000010000000000010000000000040000000101000000000101010001010501010501010101010101000101000000000000010000000001010000000000000000010100010101010100000000000001010101010101000100000000010101010001010001000101000000000000000100000000010001000000000000000000000000000300000000000000`, img`
2 2 2 2 2 . 2 2 2 . . . . 2 2 2 
2 2 2 2 2 . 2 2 2 2 . 2 . . . 2 
. . . . 2 . 2 2 2 . . 2 2 . . . 
2 2 2 . . . . . . . 2 2 . . 2 2 
. . . . . . . 2 2 2 2 . . 2 2 2 
2 2 2 2 . . . 2 2 2 2 . 2 2 2 2 
2 2 2 2 2 2 . 2 2 2 2 . . 2 2 2 
2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 . . . 2 
. . . . . . . . . . . . . 2 . . 
2 2 2 2 2 2 . 2 2 2 2 . . 2 2 2 
2 2 2 2 2 . . 2 . . . . . 2 2 2 
2 2 2 . . . . . . . 2 . 2 2 2 2 
. . . . 2 . . 2 . 2 . . 2 2 2 2 
2 2 2 . 2 2 2 2 . 2 . 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.dungeon.hazardHole,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
