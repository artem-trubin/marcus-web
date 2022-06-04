export class CoinCounter {
  constructor(x, y, startingAmount) {
    this.x = x
    this.y = y
  }

  draw(ctx, scene) {
    const text = `${scene.collectedCoins} coin(s)`
    ctx.fillStyle = "white"
    ctx.font = "48px sans-serif"
    ctx.fillText(text, this.x, this.y)
  }
}
