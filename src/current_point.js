import Point from './point'

export default class currentPoint extends Point {
  drawPoint (ctx) {
    ctx.beginPath()
    this.radius = (this.radius < 14 && this.radius > 1) ? this.radius + (Math.random() * 2 - 1) : 2
    // this.radius = 10
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fillStyle = this.color
    ctx.fill()
  }
}
