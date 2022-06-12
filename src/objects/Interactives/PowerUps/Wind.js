import { TYPE_WIND } from "../../../globals.js"
import { PowerUp } from "./PowerUp.js"

export class Wind extends PowerUp {
  constructor(x, y) {
    super(x, y, 20, 20, "teal")
    this.types.push(TYPE_WIND)
  }
}
