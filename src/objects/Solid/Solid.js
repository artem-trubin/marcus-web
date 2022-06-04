import { TYPE_SOLID } from "../../globals.js"
import { GameObject } from "../GameObject.js"

export class Solid extends GameObject {
    constructor(
        x, y,
        width, height,
        color
    ) {
        super(x, y, width, height, color)
        this.types.push(TYPE_SOLID)
    }
}
