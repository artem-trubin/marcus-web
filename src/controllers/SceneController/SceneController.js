import { TYPE_PLAYER, TYPE_SOLID, TYPE_ACTOR, TYPE_INTERACTIVE } from "../../globals.js"
import { Camera } from "./Camera.js"
import { TILE_SIZE } from "../../projectsSettings.js"
import { Platform } from "../../objects/Immovable/Platform.js"
import { Player } from "../../objects/Actors/Player.js"
import { Coin } from "../../objects/Interactive/Coin.js"
import { addCoinTouchedEventReciever } from "../EventController/EventController.js"

export class SceneController {
  constructor(
    lvlSchema,
    screenW,
    screenH,
  ) {
    this.lvlSchema = lvlSchema

    this.objects = []
    this.player = null
    this.solidObjects = []
    this.actors = []
    this.interactives = []

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
      screenW,
      screenH
    )

    addCoinTouchedEventReciever((id) => {
      this.removeObject(id)
    })
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

  removeObject(id) {
    this.objects = this.objects.filter(obj => obj.id !== id)
    this.updateObjectLists()
  }

  updateCamera() {
    this.camera.moveCenter(this.player.centerX, this.player.centerY)
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
            ))
            break
          case "C":
            this.objects.push(new Coin(
              x * TILE_SIZE,
              y * TILE_SIZE,
            ))
            break
        }
      })
    })
  }
}
