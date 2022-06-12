import { initiateControlEventListeners } from "../../controls.js"
import { testLvl } from "../SceneController/lvlBuilder.js"
import { SceneController } from "../SceneController/SceneController.js"
import { getCanvas, initiateContext } from "../../canvas.js"

export class GameController {
  constructor() {
    this.animationGoing = true

    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.canvas = getCanvas()
    this.ctx = initiateContext()

    this.sceneController = new SceneController(this, testLvl)

    initiateControlEventListeners()
  }

  rerender() {
    this.sceneController.update()
    this.sceneController.draw(this)

    if (this.animationGoing)
      window.requestAnimationFrame(this.rerender.bind(this))
  }

  startAnimation() {
    this.animationGoing = true
    this.rerender()
  }

  stopAnimation() {
    this.animationGoing = false
  }
}
