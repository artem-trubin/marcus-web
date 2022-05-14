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
    }
}
