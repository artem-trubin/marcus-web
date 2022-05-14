import { defaultBackgroundColor } from "./globals.js"

export const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')

export function stretchAndFillCanvas(canvas, ctx) {
    const width = window.innerWidth
    const height = window.innerHeight

    canvas.width = width
    canvas.height = height
    ctx.fillStyle = defaultBackgroundColor
    ctx.fillRect(0, 0, width, height)
}
