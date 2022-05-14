import { Immovable } from "./Immovable.js"

export class Platform extends Immovable {
    constructor(
        x, y,
        width, height,
        color
    ) {
        super(x, y, width, height, color)
    }
}
