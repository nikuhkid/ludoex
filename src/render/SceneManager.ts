import * as THREE from 'three'

export class SceneManager {
  renderer: THREE.WebGLRenderer
  scene:    THREE.Scene
  camera:   THREE.PerspectiveCamera

  private theta  = 0
  private height = 16
  private radius = 5
  private isDragging = false
  private prevX = 0
  private animId = 0

  // Smooth camera state
  private camPos    = new THREE.Vector3()
  private camGoal   = new THREE.Vector3()
  private lookPos   = new THREE.Vector3()
  private lookGoal  = new THREE.Vector3()
  private lerping   = false

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.1

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x0a0a0f)
    this.scene.fog = new THREE.FogExp2(0x0a0a0f, 0.018)

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 120)
    this.updateCamera()
    this.setupLights()
    this.setupControls(canvas)

    window.addEventListener('resize', this.onResize)
  }

  private setupLights(): void {
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.35))

    const sun = new THREE.DirectionalLight(0xfff5e0, 1.6)
    sun.position.set(5, 14, 6)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.near = 0.1
    sun.shadow.camera.far  = 60
    sun.shadow.camera.left = sun.shadow.camera.bottom = -18
    sun.shadow.camera.right = sun.shadow.camera.top  =  18
    this.scene.add(sun)

    const fill = new THREE.DirectionalLight(0xa0c4ff, 0.5)
    fill.position.set(-5, 8, -4)
    this.scene.add(fill)

    const rim = new THREE.DirectionalLight(0xffd6a5, 0.3)
    rim.position.set(0, -4, -10)
    this.scene.add(rim)
  }

  private setupControls(canvas: HTMLCanvasElement): void {
    canvas.addEventListener('mousedown', e => {
      if (e.button !== 0) return
      this.isDragging = true
      this.prevX = e.clientX
    })
    canvas.addEventListener('mousemove', e => {
      if (!this.isDragging) return
      this.theta += (e.clientX - this.prevX) * 0.006
      this.prevX = e.clientX
      this.cancelFocus()
    })
    canvas.addEventListener('mouseup',    () => this.isDragging = false)
    canvas.addEventListener('mouseleave', () => this.isDragging = false)

    canvas.addEventListener('touchstart', e => {
      this.isDragging = true
      this.prevX = e.touches[0].clientX
    }, { passive: true })
    canvas.addEventListener('touchmove', e => {
      if (!this.isDragging) return
      this.theta += (e.touches[0].clientX - this.prevX) * 0.006
      this.prevX = e.touches[0].clientX
      this.cancelFocus()
    }, { passive: true })
    canvas.addEventListener('touchend', () => this.isDragging = false)

    canvas.addEventListener('wheel', e => {
      this.height = Math.max(8, Math.min(28, this.height + e.deltaY * 0.02))
      this.cancelFocus()
    }, { passive: true })
  }

  // Snap camera to current orbit position (called on manual user input)
  updateCamera(): void {
    const x = this.radius * Math.sin(this.theta)
    const z = this.radius * Math.cos(this.theta)
    this.camPos.set(x, this.height, z)
    this.camGoal.copy(this.camPos)
    this.lookPos.set(0, 0, 0)
    this.lookGoal.set(0, 0, 0)
    this.camera.position.copy(this.camPos)
    this.camera.lookAt(this.lookPos)
  }

  private cancelFocus(): void {
    this.lerping = false
    this.updateCamera()
  }

  // ── Focus API ─────────────────────────────────────────────────

  focusOn(worldPos: THREE.Vector3): void {
    // Direction from board center to piece (XZ plane)
    const dx = worldPos.x
    const dz = worldPos.z
    const len = Math.sqrt(dx * dx + dz * dz)
    const nx  = len > 0.5 ? dx / len : 0
    const nz  = len > 0.5 ? dz / len : 1

    // Camera: offset outward from piece and up
    this.camGoal.set(
      worldPos.x + nx * 5,
      worldPos.y + 7,
      worldPos.z + nz * 5,
    )
    this.lookGoal.set(worldPos.x, worldPos.y + 0.3, worldPos.z)
    this.lerping = true
  }

  returnToOverview(): void {
    this.camGoal.set(
      this.radius * Math.sin(this.theta),
      this.height,
      this.radius * Math.cos(this.theta),
    )
    this.lookGoal.set(0, 0, 0)
    this.lerping = true
  }

  // ── Tick (call every frame) ───────────────────────────────────

  tick(delta: number): void {
    if (!this.lerping) return
    const t = Math.min(5 * delta, 1)
    this.camPos.lerp(this.camGoal, t)
    this.lookPos.lerp(this.lookGoal, t)
    this.camera.position.copy(this.camPos)
    this.camera.lookAt(this.lookPos)
    if (this.camPos.distanceTo(this.camGoal) < 0.04 &&
        this.lookPos.distanceTo(this.lookGoal) < 0.04) {
      this.lerping = false
    }
  }

  start(onFrame: () => void): void {
    const loop = () => {
      onFrame()
      this.renderer.render(this.scene, this.camera)
      this.animId = requestAnimationFrame(loop)
    }
    loop()
  }

  stop(): void {
    cancelAnimationFrame(this.animId)
  }

  private onResize = (): void => {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  dispose(): void {
    this.stop()
    window.removeEventListener('resize', this.onResize)
  }
}
