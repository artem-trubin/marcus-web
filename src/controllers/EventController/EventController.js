export const event_jump = "jump"
export const eventJump = new Event(event_jump)

export const event_coin_touch = "coin_touch"
export function triggerEventCoinTouched(id) {
  window.dispatchEvent(new CustomEvent(event_coin_touch, {
    detail: { id }
  }))
}
export function addCoinTouchedEventReceiver(cb) {
  window.addEventListener(event_coin_touch, ({ detail }) => {
    cb(detail.id)
  })
}

export const event_player_damage = "player_damage"
export function triggerEventPlayerDamage() {
  window.dispatchEvent(new CustomEvent(event_player_damage))
}
export function addPlayerDamageReceiver(cb) {
  window.addEventListener(event_player_damage, () => cb())
}


export const event_enemy_death = "enemy_death"
export function triggerEnemyDeath(id) {
  window.dispatchEvent(new CustomEvent(event_enemy_death, {
    detail: { id }
  }))
}
export function addEnemyDeathReceiver(cb) {
  window.addEventListener(event_enemy_death, ({ detail }) => {
    cb(detail.id)
  })
}
