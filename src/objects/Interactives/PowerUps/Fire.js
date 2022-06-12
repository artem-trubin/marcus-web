import { TYPE_FIRE } from "../../../globals.js"
import { PowerUp } from "./PowerUp.js"

export class Fire extends PowerUp {
  constructor(x, y) {
    super(x, y, 20, 20, "orange")
    this.types.push(TYPE_FIRE)
  }
}
