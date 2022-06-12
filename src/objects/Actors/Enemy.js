import { TYPE_ADD_GRAVITY, TYPE_ENEMY, TYPE_RIGID } from '../../globals.js'
import { Actor } from './Actor.js'

export class Enemy extends Actor {
  constructor(x, y, direction) {
    super(x, y, 50, 50, "purple", 20, 20)
    this.speed = 3
    this.xSpeed = this.speed
    this.direction = direction
    this.types.push(TYPE_ENEMY)
    this.types.push(TYPE_ADD_GRAVITY)
    this.types.push(TYPE_RIGID)
  }

  update(scene, delta) {
    this.xSpeed = this.speed * this.direction
    super.update(scene, delta)
    if (this.xSpeed === 0) this.direction *= -1
  }
}
