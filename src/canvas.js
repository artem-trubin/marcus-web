import { stretchCanvasToFullWindow } from "./utils.js"

export const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')

stretchCanvasToFullWindow(
    canvas, ctx,
    window.innerWidth, window.innerHeight
)
