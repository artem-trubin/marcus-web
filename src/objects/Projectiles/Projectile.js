import { Actor } from "../Actors/Actor.js"

export class Projectile extends Actor {
  constructor(x, y, w, h, color, xMaxSpeed, yMaxSpeed, xSpeed, ySpeed) {
    super(x, y, w, h, color, xMaxSpeed, yMaxSpeed)
    this.xSpeed = xSpeed
    this.ySpeed = ySpeed
  }
}
