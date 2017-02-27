// 游戏地图
export default class Map {
  constructor (options) {
    this.options = options || {}
    this.canvas = this.options.canvas
    this.ctx = this.options.canvas.getContext('2d')
    this.init()
  }
  init () {
    this.canvas.width = this.options.width
    this.canvas.height = this.options.height
  }
  clear () {
    this.ctx.clearRect(0, 0, this.options.width, this.options.height)
  }
  render () {
    this.clear()
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.options.width, this.options.height)
  }
}
