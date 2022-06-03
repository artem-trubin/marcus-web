export const event_jump = "jump"
export const eventJump = new Event(event_jump)

export const event_coin_touch = "coin_touch"
export function triggerEventCoinTouched(id) {
  window.dispatchEvent(new CustomEvent(event_coin_touch, {
    detail: { id }
  }))
}
export function addCoinTouchedEventReciever(cb) {
  window.addEventListener(event_coin_touch, ({ detail }) => {
    cb(detail.id)
  })
}
