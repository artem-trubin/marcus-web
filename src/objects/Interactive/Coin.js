import { TYPE_COIN } from "../../globals.js"
import { Interactive } from "./Interactive.js"

export class Coin extends Interactive {
  constructor(x, y) {
    super(x, y, 30, 30, "yellow")
    this.types.push(TYPE_COIN)
  }
}
