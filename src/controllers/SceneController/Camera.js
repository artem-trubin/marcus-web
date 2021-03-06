export class Camera {
  constructor(
    x, y,
    lvlBoundaryLeft,
    lvlBoundaryRight,
    lvlBoundaryTop,
    lvlBoundaryBottom,
    screenW,
    screenH,
  ) {
    this.x = x
    this.y = y
    this.lvlBoundaries = {
      left: lvlBoundaryLeft,
      right: lvlBoundaryRight,
      top: lvlBoundaryTop,
      bottom: lvlBoundaryBottom,
    }
    this.screenW = screenW
    this.screenH = screenH
    this.xOffset = Math.round(this.screenW / 2)
    this.yOffset = Math.round(this.screenH / 2)

    this.cameraBoundaries = {
      left: this.lvlBoundaries.left + this.xOffset,
      right: this.lvlBoundaries.right - this.xOffset,
      top: this.lvlBoundaries.top + this.yOffset,
      bottom: this.lvlBoundaries.bottom - this.yOffset,
    }

    this.additionalOffsetX = 0
    this.additionalOffsetY = 0

    window.addEventListener("keydown", ({ code }) => {
      switch (code) {
        case "Numpad4":
          this.additionalOffsetX -= 3
          break
        case "Numpad6":
          this.additionalOffsetX += 3
          break
        case "Numpad8":
          this.additionalOffsetY -= 3
          break
        case "Numpad2":
          this.additionalOffsetY += 3
          break
        case "Numpad5":
          this.additionalOffsetX = 0
          this.additionalOffsetY = 0
      }
    })
  }

  moveCenter(newCenterX, newCenterY) {
    if (newCenterX < this.cameraBoundaries.left)
      this.x = this.cameraBoundaries.left - this.xOffset
    else if (newCenterX > this.cameraBoundaries.right)
      this.x = this.cameraBoundaries.right - this.xOffset
    else
      this.x = newCenterX - this.xOffset

    if (newCenterY < this.cameraBoundaries.top)
      this.y = this.cameraBoundaries.top - this.yOffset
    else if (newCenterY > this.cameraBoundaries.bottom)
      this.y = this.cameraBoundaries.bottom - this.yOffset
    else
      this.y = newCenterY - this.yOffset
  }

  updateScreenSize(newWidth, newHeight) {
    this.screenW = newWidth
    this.screenH = newHeight
    this.xOffset = Math.round(this.screenW / 2)
    this.yOffset = Math.round(this.screenH / 2)

    this.cameraBoundaries = {
      left: this.lvlBoundaries.left + this.xOffset,
      right: this.lvlBoundaries.right - this.xOffset,
      top: this.lvlBoundaries.top + this.yOffset,
      bottom: this.lvlBoundaries.bottom - this.yOffset,
    }
  }
}
