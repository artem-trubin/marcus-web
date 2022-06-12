import { TYPE_ACTOR, TYPE_ADD_GRAVITY, TYPE_BY_STOMP, TYPE_COIN, TYPE_FIREBALL, TYPE_PLAYER, TYPE_RIGID, TYPE_BY_FIREBALL } from '../../globals.js'
import { colliding } from '../../utils.js'
import { GameObject } from '../GameObject.js'
import { triggerDestroyProjectile, triggerEnemyDeath, triggerEventCoinTouched, triggerEventPlayerDamage } from '../../controllers/EventController/EventController.js'

export class Actor extends GameObject {
    constructor(
        x, y,
        width, height,
        color,
        xMaxSpeed, yMaxSpeed,
    ) {
        super(x, y, width, height, color)

        this.xMaxSpeed = xMaxSpeed
        this.yMaxSpeed = yMaxSpeed

        this.xSpeed = 0
        this.ySpeed = 0

        this.airborne = true

        this.types.push(TYPE_ACTOR)
    }

    update(scene, delta) {
        const timeCompensation = delta / 1000
        let collidingObjects = []

        if (Math.abs(this.xSpeed) > this.xMaxSpeed) {
            if (this.xSpeed > 0) this.xSpeed = this.xMaxSpeed
            else if (this.xSpeed < 0) this.xSpeed = -this.xMaxSpeed
        }

        if (this.types.includes(TYPE_ADD_GRAVITY))
            this.ySpeed += 1

        if (Math.abs(this.ySpeed) > this.yMaxSpeed) {
            this.ySpeed = this.yMaxSpeed
        }

        this.x += this.xSpeed * timeCompensation

        if (this.types.includes(TYPE_RIGID)) {
            collidingObjects = scene.solidObjects.filter(obj => colliding(this, obj))
            collidingObjects.forEach(obj => {
                if (this.types.includes(TYPE_FIREBALL)) {
                    triggerDestroyProjectile(this.id)
                } else {
                    if (this.xSpeed > 0 && this.right > obj.left) {
                        this.xSpeed = 0
                        this.right = obj.left
                    } else if (this.xSpeed < 0 && this.left < obj.right) {
                        this.xSpeed = 0
                        this.left = obj.right
                    }
                }
            })
        }

        collidingObjects = scene.interactives.filter(obj => colliding(this, obj))
        collidingObjects.forEach(obj => {
            if (this.types.includes(TYPE_PLAYER) && obj.types.includes(TYPE_COIN))
                triggerEventCoinTouched(obj.id)
        })

        this.y += this.ySpeed * timeCompensation

        if (this.types.includes(TYPE_PLAYER)) {
            collidingObjects = scene.enemies.filter(obj => colliding(this, obj))
            collidingObjects.forEach(obj => triggerEventPlayerDamage())
        }

        if (this.types.includes(TYPE_RIGID)) {
            collidingObjects = scene.solidObjects.filter(obj => colliding(this, obj))
            collidingObjects.forEach(obj => {
                if (this.types.includes(TYPE_FIREBALL)) {
                    triggerDestroyProjectile(this.id)
                } else {
                    if (this.ySpeed > 0 && this.bottom > obj.top) {
                        this.ySpeed = 0
                        this.bottom = obj.top
                        this.airborne = false
                    } else if (this.ySpeed < 0 && this.top < obj.bottom) {
                        this.ySpeed = 0
                        this.top = obj.bottom
                    }
                }
            })
        }
        if (this.types.includes(TYPE_PLAYER)) {
            collidingObjects = scene.enemies.filter(obj => colliding(this, obj))
            collidingObjects.forEach(obj => {
                if (obj.bottom > this.bottom) {
                    triggerEnemyDeath(obj.id, TYPE_BY_STOMP)
                }
            })
        }

        if (this.types.includes(TYPE_FIREBALL)) {
            collidingObjects = scene.enemies.filter(obj => colliding(this, obj))
            collidingObjects.forEach(obj => {
                triggerEnemyDeath(obj.id, TYPE_BY_FIREBALL)
                triggerDestroyProjectile(this.id)
            })
        }
    }
}
