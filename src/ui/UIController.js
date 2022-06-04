import { CoinCounter } from "./CoinCounter.js"

export class UIController {
  constructor() {
    this.elements = [
      new CoinCounter(10, 50, 0)
    ]
  }

  draw(ctx, scene) {
    this.elements.forEach(elem => elem.draw(ctx, scene))
  }
}
