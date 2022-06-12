import { Actor } from "./Actor.js"
import { actions } from "../../controls.js"
import { TYPE_ADD_GRAVITY, TYPE_BY_STOMP, TYPE_PLAYER, TYPE_RIGID } from "../../globals.js"
import { addEnemyDeathReceiver, addPlayerDamageReceiver, event_fireball, event_jump } from "../../controllers/EventController/EventController.js"
import { Fireball } from "../Projectiles/Fireball.js"

export class Player extends Actor {
    constructor(x, y, scene) {
        super(x, y, 50, 50, 'red', 10, 25)

        this.types.push(TYPE_PLAYER)
        this.types.push(TYPE_ADD_GRAVITY)
        this.types.push(TYPE_RIGID)
        this.doubleJump = true
        this.xDirection = 0
        window.addEventListener(event_jump, () => {
            if (!this.airborne) {
                this.ySpeed = -25
                this.airborne = true
            } else if (this.doubleJump) {
                this.ySpeed = -25
                this.doubleJump = false
            }
        })

        window.addEventListener(event_fireball, () => {
            const fireball = new Fireball(this.x, this.y, this.xDirection, 0)
            scene.addProjectile(fireball)
        })

        addPlayerDamageReceiver(() => { console.log("Damaged") })
        addEnemyDeathReceiver((_, type) => {
            if (type === TYPE_BY_STOMP) this.ySpeed = -20
            console.log(type)
        })
    }

    update(scene, delta) {
        if (actions.moveLeft) {
            this.xSpeed -= 1
            this.xDirection = -1
        }
        if (actions.moveRight) {
            this.xSpeed += 1
            this.xDirection = 1
        }

        if (
            !(actions.moveRight || actions.moveLeft)
            || (actions.moveRight && actions.moveLeft)
        ) {
            if (this.xSpeed > 0) this.xSpeed -= 1
            else if (this.xSpeed < 0) this.xSpeed += 1
        }

        if (!this.airborne) this.doubleJump = true

        super.update(scene, delta)
    }
}
