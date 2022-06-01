import { TYPE_PLAYER, TYPE_SOLID, TYPE_ACTOR } from "../../globals.js"
import { buildLvl } from "./lvlBuilder.js"
import { Camera } from "./Camera.js"
import { TILE_SIZE } from "../../projectsSettings.js"

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
  }

  buildLvl() {
    this.objects = buildLvl(this.lvlSchema)
    this.player = this.getPlayerObject(this.objects)
    this.solidObjects = this.getSolidObjects(this.objects)
    this.actors = this.getActorObjects(this.objects)
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

  updateCamera() {
    this.camera.moveCenter(this.player.centerX, this.player.centerY)
  }
}
