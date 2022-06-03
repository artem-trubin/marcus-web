import { TYPE_INTERACTIVE } from "../../globals.js"
import { Drawable } from "../Drawable.js"

export class Interactive extends Drawable {
  constructor(x, y, w, h, color) {
    super(x, y, w, h, color)
    this.types.push(TYPE_INTERACTIVE)
  }
}
