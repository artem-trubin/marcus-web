import { TYPE_ACTOR } from '../../globals.js'
import { colliding } from '../../utils.js'
import { Drawable } from '../Drawable.js'
import { triggerEventCoinTouched } from '../../controllers/EventController/EventController.js'

export class Actor extends Drawable {
    constructor(
        x, y,
        height, width,
        color,
        xMaxSpeed, yMaxSpeed,
    ) {
        super(x, y, height, width, color)

        this.xMaxSpeed = xMaxSpeed
        this.yMaxSpeed = yMaxSpeed

        this.xSpeed = 0
        this.ySpeed = 0

        this.airborne = true

        this.types.push(TYPE_ACTOR)
    }

    update(scene) {
        let collidingObjects = []

        if (Math.abs(this.xSpeed) > this.xMaxSpeed) {
            if (this.xSpeed > 0) this.xSpeed = this.xMaxSpeed
            else if (this.xSpeed < 0) this.xSpeed = -this.xMaxSpeed
        }

        this.ySpeed += 1

        if (Math.abs(this.ySpeed) > this.yMaxSpeed) {
            this.ySpeed = this.yMaxSpeed
        }

        this.x += this.xSpeed

        collidingObjects = scene.solidObjects.filter(obj => colliding(this, obj))
        collidingObjects.forEach(obj => {
            if (this.xSpeed > 0 && this.right > obj.left) {
                this.xSpeed = 0
                this.right = obj.left
            } else if (this.xSpeed < 0 && this.left < obj.right) {
                this.xSpeed = 0
                this.left = obj.right
            }
        })

        collidingObjects = scene.interactives.filter(obj => colliding(this, obj))
        collidingObjects.forEach(obj => {
            console.log(obj.id)
            triggerEventCoinTouched(obj.id)
        })

        this.y += this.ySpeed

        collidingObjects = scene.solidObjects.filter(obj => colliding(this, obj))
        collidingObjects.forEach(obj => {
            if (this.ySpeed > 0 && this.bottom > obj.top) {
                this.ySpeed = 0
                this.bottom = obj.top
                this.airborne = false
            } else if (this.ySpeed < 0 && this.top < obj.bottom) {
                this.ySpeed = 0
                this.top = obj.bottom
            }
        })
    }
}
