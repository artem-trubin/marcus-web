import { generateId } from "../../common.js"

export class Drawable {
    constructor(
        x, y,
        w, h,
        color
    ) {
        this.x = x
        this.y = y
        this.w = h
        this.h = w
        this.color = color
        this.types = []
        this.id = generateId()
    }

    get top() { return this.y }
    get bottom() { return this.y + this.h }
    get left() { return this.x }
    get right() { return this.x + this.w }

    get centerX() { return Math.round(this.x + this.w / 2) }
    get centerY() { return Math.round(this.y + this.h / 2) }

    set top(v) { this.y = v }
    set bottom(v) { this.y = v - this.h }
    set left(v) { this.x = v }
    set right(v) { this.x = v - this.w }

    get rect() {
        return {
            top: this.top,
            bottom: this.bottom,
            left: this.left,
            right: this.right,
        }
    }

    draw(ctx, camera) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x - camera.x, this.y - camera.y, this.w, this.h)
    }
}
