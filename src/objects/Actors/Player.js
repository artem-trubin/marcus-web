import { Actor } from "./Actor.js"

import { actions } from "../../controls.js"
import { TYPE_PLAYER, camera, SCREEN_SIZE } from "../../globals.js"

export class Player extends Actor {
    constructor(x, y,) {
        super(x, y, 50, 50, 'red', 10, 20)

        this.types.push(TYPE_PLAYER)
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

        camera.x = Math.round(this.x - SCREEN_SIZE.w / 2 + this.w / 2)
        camera.y = Math.round(this.y - SCREEN_SIZE.h / 2 + this.h / 2)
    }
}
