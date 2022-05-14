import { solidObjects, TYPE_ACTOR, TYPE_PLAYER, TYPE_SOLID } from '../globals.js'
import { Platform } from '../objects/Immovable/Platform.js'
import { TILE_SIZE } from '../projectsSettings.js'
import { Player } from '../objects/Actors/Player.js'

export const testLvl = [
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "B", "0", "0", "0", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "B", "0", "0", "0", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "B", "0", "B", "B", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "B", "0", "0", "0", "B"],
    ["B", "0", "0", "0", "B", "B", "B", "B", "0", "0", "0", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "0", "B", "0", "0", "B"],
    ["B", "0", "P", "0", "0", "0", "0", "0", "0", "B", "0", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "B"],
    ["B", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
]

export function buildLvl(lvlSchema) {
    const gameObjects = []

    lvlSchema.forEach((row, y) => {
        row.forEach((block, x) => {
            switch (block) {
                case 'B':
                    const platform =
                        new Platform(
                            x * TILE_SIZE,
                            y * TILE_SIZE,
                            TILE_SIZE,
                            TILE_SIZE,
                            'green'
                        )
                    gameObjects.push(platform)
                    solidObjects.push(platform)
                    break
                case 'P':
                    gameObjects.push(new Player(
                        x * TILE_SIZE,
                        y * TILE_SIZE,
                    ))
                    break
            }
        })
    })

    return gameObjects
}

export function getPlayerObject(objects) {
    return objects.find(obj => obj.types.includes(TYPE_PLAYER))
}

export function getSolidObjects(objects) {
    return objects.filter(obj => obj.types.includes(TYPE_SOLID))
}

export function getActorObjects(objects) {
    return objects.filter(obj => obj.types.includes(TYPE_ACTOR))
}
