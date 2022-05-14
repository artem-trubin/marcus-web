import { canvas, ctx, stretchAndFillCanvas } from "./canvas.js"
import { Player } from './objects/Actors/Player.js'
import { initiateControlEventListeners } from "./controls.js"
import { Platform } from "./objects/Immovable/Platform.js"
import { solidObjects } from "./globals.js"

const player = new Player(
    0, 0,
    50, 50,
    'red',
    10, 10
)

const platform1 = new Platform(
    0, 300, 300, 50, 'yellow'
)
solidObjects.push(platform1)

const platform2 = new Platform(
    250, 250, 50, 50, 'green'
)
solidObjects.push(platform2)

initiateControlEventListeners()
const animate = () => {
    stretchAndFillCanvas(canvas, ctx)
    player.update()
    player.draw(ctx)
    platform1.draw(ctx)
    platform2.draw(ctx)
    window.requestAnimationFrame(animate)
}

animate()
