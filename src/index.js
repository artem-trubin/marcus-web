import { canvas, ctx, stretchAndFillCanvas, initiateResizeEventListener } from "./canvas.js"
import { initiateControlEventListeners } from "./controls.js"
import { SCREEN_SIZE } from "./globals.js"
import { SceneController } from "./controllers/SceneController/SceneController.js"
import { testLvl } from "./controllers/SceneController/lvlBuilder.js"

SCREEN_SIZE.w = window.innerWidth
SCREEN_SIZE.h = window.innerHeight
const scene = new SceneController(testLvl, SCREEN_SIZE.w, SCREEN_SIZE.h)

initiateResizeEventListener()
initiateControlEventListeners()
const animate = () => {
    stretchAndFillCanvas(canvas, ctx)
    scene.actors.forEach(obj => obj.update(scene))
    scene.objects.forEach(obj => obj.draw(ctx, scene.camera))
    scene.camera.moveCenter(scene.player.centerX, scene.player.centerY)
    window.requestAnimationFrame(animate)
}

animate()
