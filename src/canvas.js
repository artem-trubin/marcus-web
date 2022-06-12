import { defaultBackgroundColor } from "./projectsSettings.js"

export function stretchAndFillCanvas({ canvas, ctx, screenWidth, screenHeight }) {
    canvas.width = screenWidth
    canvas.height = screenHeight
    ctx.fillStyle = defaultBackgroundColor
    ctx.fillRect(0, 0, screenWidth, screenHeight)
}

export function initiateResizeEventListener() {
    window.addEventListener('resize', ({ target }) => {
        SCREEN_SIZE.w = target.innerWidth
        SCREEN_SIZE.h = target.innerHeight
    })
}

export function getCanvas() {
    return document.querySelector('canvas')
}

export function initiateContext() {
    const canvas = getCanvas()
    const ctx = canvas.getContext('2d')
    ctx.webkitImageSmoothingEnabled = false
    ctx.mozImageSmoothingEnabled = false
    ctx.imageSmoothingEnabled = false

    return ctx
}
