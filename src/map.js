// 游戏地图
class Map {
  constructor (options) {
    this.canvas = options.canvas
    this.ctx = this.canvas.getContext('2d')
    this.width = options.width
    this.height = options.height
    console.log(this.options)
    this.render()
  }
  clear () {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
  init () {
    this.canvas.width = this.width
    this.canvas.height = this.height
  }
  render () {
    this.init()
    this.clear()
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.width, this.height)
  }
}

function createMap (options) {
  return new Map(options)
}

export default createMap
