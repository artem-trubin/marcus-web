import { Actor } from "./Actor.js"

export class Player extends Actor {
    constructor(
        x, y,
        width, height,
        color,
        xMaxSpeed, yMaxSpeed
    ) {
        super(x, y, width, height, color, xMaxSpeed, yMaxSpeed)
    }
}
