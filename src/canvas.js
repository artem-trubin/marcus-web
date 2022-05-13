import { stretchCanvasToFullWindow } from "./utils.js"

export const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')

stretchCanvasToFullWindow(
    canvas, ctx,
    window.innerWidth, window.innerHeight
)

// canvas.width = screenWidth
// canvas.height = screenHeight

// ctx.fillStyle = 'black'
// ctx.fillRect(0, 0, canvas.width, canvas.height)
