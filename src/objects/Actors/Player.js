import { Actor } from "./Actor.js"

import { actions } from "../../controls.js"

export class Player extends Actor {
    constructor(
        x, y,
        width, height,
        color,
        xMaxSpeed, yMaxSpeed
    ) {
        super(x, y, width, height, color, xMaxSpeed, yMaxSpeed)
    }

    update() {
        if (actions.moveLeft) this.xSpeed -= 1
        if (actions.moveRight) this.xSpeed += 1

        if (!(actions.moveRight || actions.moveLeft)) {
            if (this.xSpeed > 0) this.xSpeed -= 1
            else if (this.xSpeed < 0) this.xSpeed += 1
        }

        super.update()
    }
}
