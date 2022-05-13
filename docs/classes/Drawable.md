# Drawable

This is a class that handles everything there is to draw something.

#### Signature

```js
Drawable(
  (x: number),
  (y: number),
  (height: number),
  (width: number),
  (color: string),
)
```

## Attributes

- `x`: number - object's x coordinate
- `y`: number - object's y coordinate
- `height`: number - object's height
- `width`: number - object's width
- `color`: string - object's default filling color

## Methods

- `draw(c: CanvasRenderingContext2D)` - draws the object using the provided canvas' context
