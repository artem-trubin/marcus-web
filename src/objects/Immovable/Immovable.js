import { Drawable } from "../Drawable.js"

export class Immovable extends Drawable {
    constructor(
        x, y,
        width, height,
        color
    ) {
        super(x, y, width, height, color)
        this.x = x
        this.y = y
        this.w = width
        this.h = height
        this.color = color
    }
}
