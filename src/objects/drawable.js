export class Drawable {
    constructor(
        x, y,
        height, width,
        color
    ) {
        this.x = x
        this.y = y
        this.w = height
        this.h = width
        this.color = color
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}
