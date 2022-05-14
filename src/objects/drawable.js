export class Drawable {
    constructor(
        x, y,
        width, height,
        color
    ) {
        this.x = x
        this.y = y
        this.w = height
        this.h = width
        this.color = color
    }

    get top() { return this.y }
    get bottom() { return this.y + this.h }
    get left() { return this.x }
    get right() { return this.x + this.w }

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

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}
