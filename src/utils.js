import { defaultBackgroundColor } from "./globals.js"

export function stretchCanvasToFullWindow(canvas, ctx, height, width) {
    canvas.height = height
    canvas.width = width
    ctx.fillStyle = defaultBackgroundColor
    ctx.fillRect(0, 0, width, height)
}
