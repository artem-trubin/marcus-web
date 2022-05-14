import { canvas, ctx, stretchAndFillCanvas } from "./canvas.js"

import './events.js'

import { Player } from './objects/Actors/Player.js'

const player = new Player(
    0, 0,
    50, 50,
    'red',
    10, 10
)

stretchAndFillCanvas(canvas, ctx)
const animate = () => {
    player.draw(ctx)
    window.requestAnimationFrame(animate)
}

animate()
