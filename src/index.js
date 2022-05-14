import { canvas, ctx, stretchAndFillCanvas } from "./canvas.js"
import { Player } from './objects/Actors/Player.js'
import { initiateControlEventListeners } from "./controls.js"

const player = new Player(
    0, 0,
    50, 50,
    'red',
    10, 10
)

initiateControlEventListeners()
const animate = () => {
    stretchAndFillCanvas(canvas, ctx)
    player.update()
    player.draw(ctx)
    window.requestAnimationFrame(animate)
}

animate()
