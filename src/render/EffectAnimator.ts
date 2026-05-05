import * as THREE from 'three'
import type { TileType } from '../game/gameLogic'

interface Effect {
  sprite: THREE.Sprite
  vel: THREE.Vector3
  life: number
  maxLife: number
}

const effects: Effect[] = []

const EFFECT_COLOR: Record<TileType, string> = {
  star:    '#7ec8e3',
  skull:   '#c77dff',
  boost:   '#ffe033',
  bomb:    '#ff6622',
  swap:    '#00e5cc',
  skip:    '#ff6688',
  reverse: '#99aaff',
  fumble:  '#ddaa60',
  shackle: '#aabbcc',
}

const EFFECT_LABEL: Record<TileType, string> = {
  star:    'Roll again!',
  skull:   'Back to base!',
  boost:   'Boost +6!',
  bomb:    'Blast!',
  swap:    'Swap!',
  skip:    'Skip curse!',
  reverse: 'Reverse curse!',
  fumble:  'Fumble curse!',
  shackle: 'Shackled!',
}

function makeSprite(text: string, color: string): THREE.Sprite {
  const W = 256, H = 56
  const canvas = document.createElement('canvas')
  canvas.width = W; canvas.height = H
  const ctx = canvas.getContext('2d')!

  const r = 10
  ctx.fillStyle = 'rgba(8,8,20,0.72)'
  ctx.beginPath()
  ctx.moveTo(r, 0)
  ctx.lineTo(W - r, 0)
  ctx.arcTo(W, 0, W, r, r)
  ctx.lineTo(W, H - r)
  ctx.arcTo(W, H, W - r, H, r)
  ctx.lineTo(r, H)
  ctx.arcTo(0, H, 0, H - r, r)
  ctx.lineTo(0, r)
  ctx.arcTo(0, 0, r, 0, r)
  ctx.closePath()
  ctx.fill()

  ctx.strokeStyle = color + '66'
  ctx.lineWidth = 1.5
  ctx.stroke()

  ctx.fillStyle = color
  ctx.font = 'bold 19px "Helvetica Neue", Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, W / 2, H / 2)

  const texture = new THREE.CanvasTexture(canvas)
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    depthWrite: false,
  })
  const sprite = new THREE.Sprite(material)
  // Scale preserves 256:56 aspect ratio at ~2.0 world units wide
  sprite.scale.set(2.0, 2.0 * (H / W), 1)
  sprite.renderOrder = 999
  return sprite
}

export function spawnEffect(scene: THREE.Scene, tileType: TileType, worldPos: THREE.Vector3): void {
  const label = EFFECT_LABEL[tileType]
  const color = EFFECT_COLOR[tileType]
  const sprite = makeSprite(label, color)
  sprite.position.set(worldPos.x, worldPos.y + 1.2, worldPos.z)
  scene.add(sprite)

  const maxLife = 1.8
  effects.push({ sprite, vel: new THREE.Vector3(0, 1.0, 0), life: maxLife, maxLife })
}

export function tickEffects(delta: number, scene: THREE.Scene): void {
  for (let i = effects.length - 1; i >= 0; i--) {
    const e = effects[i]
    e.life -= delta
    if (e.life <= 0) {
      scene.remove(e.sprite)
      ;(e.sprite.material as THREE.SpriteMaterial).map?.dispose()
      ;(e.sprite.material as THREE.SpriteMaterial).dispose()
      effects.splice(i, 1)
      continue
    }
    e.sprite.position.addScaledVector(e.vel, delta)
    const t = Math.min(e.life / e.maxLife, 1)
    ;(e.sprite.material as THREE.SpriteMaterial).opacity = t > 0.6 ? 1.0 : t / 0.6
  }
}
