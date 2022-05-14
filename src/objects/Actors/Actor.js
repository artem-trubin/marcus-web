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
    }

    update() {
        if (Math.abs(this.xSpeed) > this.xMaxSpeed) {
            if (this.xSpeed > 0) this.xSpeed = this.xMaxSpeed
            else if (this.xSpeed < 0) this.xSpeed = -this.xMaxSpeed
        }
        this.x += this.xSpeed
        this.y += this.ySpeed
    }
}
