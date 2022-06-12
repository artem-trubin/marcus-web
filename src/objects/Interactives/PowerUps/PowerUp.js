import { TYPE_POWERUP } from "../../../globals.js"
import { Interactive } from "../Interactive.js"

export class PowerUp extends Interactive {
  constructor(x, y, w, h, color) {
    super(x, y, w, h, color)
    this.types.push(TYPE_POWERUP)
  }
}
