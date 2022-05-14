import { canvas, ctx, stretchAndFillCanvas, initiateResizeEventListener } from "./canvas.js"
import { Player } from './objects/Actors/Player.js'
import { initiateControlEventListeners } from "./controls.js"
import { Platform } from "./objects/Immovable/Platform.js"
import { SCREEN_SIZE, solidObjects } from "./globals.js"

import { buildLvl, getActorObjects, testLvl } from "./systems/lvlBuilder.js"


const lvlObjects = buildLvl(testLvl)
const actors = getActorObjects(lvlObjects)

SCREEN_SIZE.w = window.innerWidth
SCREEN_SIZE.h = window.innerHeight

initiateResizeEventListener()
initiateControlEventListeners()
const animate = () => {
    stretchAndFillCanvas(canvas, ctx)
    actors.forEach(obj => obj.update())
    lvlObjects.forEach(obj => obj.draw(ctx))
    window.requestAnimationFrame(animate)
}

animate()
