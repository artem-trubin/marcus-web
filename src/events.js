import { canvas, ctx } from './canvas.js'
import { stretchCanvasToFullWindow } from './utils.js'

window.addEventListener('resize', ({ target }) => {
    stretchCanvasToFullWindow(
        canvas, ctx,
        target.innerHeight, target.innerWidth
    )
})
