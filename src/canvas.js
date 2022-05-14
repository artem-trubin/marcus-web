import { SCREEN_SIZE } from "./globals.js"
import { defaultBackgroundColor } from "./projectsSettings.js"

export const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

export function stretchAndFillCanvas(canvas, ctx) {
    const width = SCREEN_SIZE.w
    const height = SCREEN_SIZE.h

    canvas.width = width
    canvas.height = height
    ctx.fillStyle = defaultBackgroundColor
    ctx.fillRect(0, 0, width, height)
}

export function initiateResizeEventListener() {
    window.addEventListener('resize', ({ target }) => {
        SCREEN_SIZE.w = target.innerWidth
        SCREEN_SIZE.h = target.innerHeight
    })
}
