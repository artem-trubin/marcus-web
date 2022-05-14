import { solidObjects, TYPE_ACTOR } from '../../globals.js'
import { colliding } from '../../utils.js'
import { Drawable } from '../Drawable.js'

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

    update() {
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

        collidingObjects = solidObjects.filter(obj => colliding(this, obj))
        collidingObjects.forEach(obj => {
            if (this.xSpeed > 0 && this.right > obj.left) {
                this.xSpeed = 0
                this.right = obj.left
            } else if (this.xSpeed < 0 && this.left < obj.right) {
                this.xSpeed = 0
                this.left = obj.right
            }
        })

        this.y += this.ySpeed

        collidingObjects = solidObjects.filter(obj => colliding(this, obj))
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
