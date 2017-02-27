export default class Point {
  constructor (options) {
    this.options = options || {
        x : 10,
        y : 10,
        color : '#fff',
        radius : 6
    }
    this.x = this.options.x
    this.y = this.options.y
    this.color = this.options.color
    this.radius = this.options.radius
  }
}
