import { TYPE_INTERACTIVE } from "../../globals.js"
import { GameObject } from "../GameObject.js"

export class Interactive extends GameObject {
  constructor(x, y, w, h, color) {
    super(x, y, w, h, color)
    this.types.push(TYPE_INTERACTIVE)
  }
}
