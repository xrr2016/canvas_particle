import Point from './point'
import Map from './map'

export default class Player extends Point {
  constructor(map, options) {
      super(options)
      this.map = map
  }
  move () {
    this.x += 1
    this.y += 1
  }
  render () {
    this.map.ctx.arc(this.options.x, this.options.y, this.options.radius, 0, Math.PI *2)
    this.map.ctx.fill()
  }
}
