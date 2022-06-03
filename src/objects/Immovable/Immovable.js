import { TYPE_SOLID } from "../../globals.js"
import { Drawable } from "../Drawable.js"

export class Immovable extends Drawable {
    constructor(
        x, y,
        width, height,
        color
    ) {
        super(x, y, width, height, color)
        this.types.push(TYPE_SOLID)
    }
}
