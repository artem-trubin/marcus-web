import { TYPE_PLAYER, TYPE_SOLID, TYPE_ACTOR, TYPE_INTERACTIVE, TYPE_ENEMY } from "../../globals.js"
import { Camera } from "./Camera.js"
import { TILE_SIZE } from "../../projectsSettings.js"
import { Platform } from "../../objects/Solid/Platform.js"
import { Player } from "../../objects/Actors/Player.js"
import { Coin } from "../../objects/Interactives/Coin.js"
import { addCoinTouchedEventReceiver, addDestroyProjectileReceiver, addEnemyDeathReceiver } from "../EventController/EventController.js"
import { UIController } from "../../ui/UIController.js"
import { Enemy } from "../../objects/Actors/Enemy.js"
import { stretchAndFillCanvas } from "../../canvas.js"
import { Fire } from "../../objects/Interactives/PowerUps/Fire.js"
import { Wind } from "../../objects/Interactives/PowerUps/Wind.js"

export class SceneController {
  constructor(
    gameController,
    lvlSchema,
  ) {
    this.lvlSchema = lvlSchema

    this.objects = []
    this.player = null
    this.solidObjects = []
    this.actors = []
    this.interactives = []
    this.enemies = []
    this.collectedCoins = 0

    this.goalReached = false

    this.buildLvl()
    this.lvlBoundaries = {
      left: 0,
      right: this.lvlSchema[0].length * TILE_SIZE,
      top: 0,
      bottom: this.lvlSchema.length * TILE_SIZE,
    }

    this.camera = new Camera(
      0, 0,
      this.lvlBoundaries.left,
      this.lvlBoundaries.right,
      this.lvlBoundaries.top,
      this.lvlBoundaries.bottom,
      gameController.screenWidth,
      gameController.screenHeight,
    )

    addCoinTouchedEventReceiver((id) => {
      this.removeObject(id)
      this.collectedCoins++
    })

    addEnemyDeathReceiver((id) => {
      this.removeObject(id)
    })

    addDestroyProjectileReceiver((id) => {
      this.removeObject(id)
    })

    this.ui = new UIController()
  }

  update(delta) {
    this.actors.forEach(obj => obj.update(this, delta))
    this.camera.moveCenter(this.player.centerX, this.player.centerY)
  }

  draw(game) {
    stretchAndFillCanvas(game)
    this.objects.forEach(obj => obj.draw(game.ctx, this.camera))
  }

  buildLvl() {
    this.createObjects(this.lvlSchema)
    this.updateObjectLists()
  }

  updateObjectLists() {
    this.player = this.getPlayerObject(this.objects)
    this.solidObjects = this.getSolidObjects(this.objects)
    this.actors = this.getActorObjects(this.objects)
    this.interactives = this.getInteractiveObjects(this.objects)
    this.enemies = this.getEnemyObjects(this.objects)
  }

  getPlayerObject(objects) {
    return objects.find(obj => obj.types.includes(TYPE_PLAYER))
  }

  getSolidObjects(objects) {
    return objects.filter(obj => obj.types.includes(TYPE_SOLID))
  }

  getActorObjects(objects) {
    return objects.filter(obj => obj.types.includes(TYPE_ACTOR))
  }

  getInteractiveObjects(objects) {
    return objects.filter(obj => obj.types.includes(TYPE_INTERACTIVE))
  }

  getEnemyObjects(objects) {
    return objects.filter(obj => obj.types.includes(TYPE_ENEMY))
  }

  removeObject(id) {
    this.objects = this.objects.filter(obj => obj.id !== id)
    this.updateObjectLists()
  }

  updateCamera() {
    this.camera.moveCenter(this.player.centerX, this.player.centerY)
  }

  addProjectile(projectile) {
    this.objects.push(projectile)
    this.updateObjectLists()
  }

  createObjects(lvlSchema) {
    lvlSchema.forEach((row, y) => {
      row.forEach((block, x) => {
        switch (block) {
          case "B":
            const platform = new Platform(
              x * TILE_SIZE,
              y * TILE_SIZE,
              TILE_SIZE,
              TILE_SIZE,
              "green",
            )
            this.objects.push(platform)
            this.solidObjects.push(platform)
            break
          case "P":
            this.objects.push(new Player(
              x * TILE_SIZE,
              y * TILE_SIZE,
              this
            ))
            break
          case "C":
            this.objects.push(new Coin(
              x * TILE_SIZE,
              y * TILE_SIZE,
            ))
            break
          case "E":
            this.objects.push(new Enemy(
              x * TILE_SIZE,
              y * TILE_SIZE,
              1,
            ))
            break
          case "F":
            this.objects.push(new Fire(
              x * TILE_SIZE,
              y * TILE_SIZE,
            ))
            break
          case "W":
            this.objects.push(new Wind(
              x * TILE_SIZE,
              y * TILE_SIZE,
            ))
            break
        }
      })
    })
  }
}
