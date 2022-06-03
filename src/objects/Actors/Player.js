import { Actor } from "./Actor.js"
import { actions } from "../../controls.js"
import { TYPE_PLAYER } from "../../globals.js"
import { event_jump } from "../../controllers/EventController/EventController.js"

export class Player extends Actor {
    constructor(x, y) {
        super(x, y, 50, 50, 'red', 10, 25)

        this.types.push(TYPE_PLAYER)
        this.doubleJump = true
        window.addEventListener(event_jump, () => {
            if (!this.airborne) {
                this.ySpeed = -25
                this.airborne = true
            } else if (this.doubleJump) {
                this.ySpeed = -25
                this.doubleJump = false
            }
        })
    }

    update(scene) {
        if (actions.moveLeft) this.xSpeed -= 1
        if (actions.moveRight) this.xSpeed += 1

        if (
            !(actions.moveRight || actions.moveLeft)
            || (actions.moveRight && actions.moveLeft)
        ) {
            if (this.xSpeed > 0) this.xSpeed -= 1
            else if (this.xSpeed < 0) this.xSpeed += 1
        }

        if (!this.airborne) this.doubleJump = true

        super.update(scene)
    }
}
