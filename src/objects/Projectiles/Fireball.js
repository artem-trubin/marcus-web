import { TYPE_RIGID, TYPE_FIREBALL, DIRECTION_LEFT } from "../../globals.js"
import { Projectile } from "./Projectile.js"

export class Fireball extends Projectile {
  constructor(x, y, xDirection, yDirection) {
    if (xDirection === 0) xDirection = 1
    super(x, y, 30, 30, "orange", 30, 30, 30 * xDirection, 30 * yDirection)
    this.types.push(TYPE_RIGID)
    this.types.push(TYPE_FIREBALL)
  }
}
