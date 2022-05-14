export const actions = {
    moveLeft: false,
    moveRight: false,
    jump: false,
}

export function initiateControlEventListeners() {
    window.addEventListener('keydown', (e) => {
        const c = e.code

        if (c === "Space" || c === "KeyW" || c === "ArrowUp")
            actions.jump = true

        if (c === "KeyA" || c === "ArrowLeft")
            actions.moveLeft = true

        if (c === "KeyD" || c === "ArrowRight")
            actions.moveRight = true
    })

    window.addEventListener('keyup', (e) => {
        const c = e.code

        if (c === "Space" || c === "KeyW" || c === "ArrowUp")
            actions.jump = false

        if (c === "KeyA" || c === "ArrowLeft")
            actions.moveLeft = false

        if (c === "KeyD" || c === "ArrowRight")
            actions.moveRight = false
    })
}
