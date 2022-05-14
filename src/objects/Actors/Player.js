import { Actor } from "./Actor.js"

import { actions } from "../../controls.js"

export class Player extends Actor {
    constructor(
        x, y,
        width, height,
        color,
    ) {
        super(x, y, width, height, color, 10, 20)
    }

    update() {
        if (actions.moveLeft) this.xSpeed -= 1
        if (actions.moveRight) this.xSpeed += 1

        if (
            !(actions.moveRight || actions.moveLeft)
            || (actions.moveRight && actions.moveLeft)
        ) {
            if (this.xSpeed > 0) this.xSpeed -= 1
            else if (this.xSpeed < 0) this.xSpeed += 1
        }

        if (actions.jump && !this.airborne) {
            this.ySpeed = -20
            this.airborne = true
        }


        super.update()
    }
}
