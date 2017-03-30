export default class Point {
  constructor (x, y, color) {
    this.x = x
    this.y = y
    this.color = color || '#rgba(0, 0, 0, .7)'
    this.radius = Math.random() * 10
    // 横向位移速度
    this.ax = Math.random() * 2 - 1
    // 纵向位移速度
    this.ay = Math.random() * 2 - 1
  }
  drawPoint (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.closePath()
    ctx.lineWidth = 1
    ctx.fillStyle = this.color
    ctx.fill()
  }
  drawLine (ctx, _point) {
    // 横向距离
    let dx = this.x - _point.x
    // 纵向距离
    let dy = this.y - _point.y
    // 两点距离
    let dis = Math.sqrt(dx * dx + dy * dy)
    if (dis < 110) {
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      ctx.lineTo(_point.x, _point.y)
      ctx.closePath()
      ctx.strokeStyle = '#f5f5f5'
      ctx.stroke()
    }
  }
  move (w, h) {
    this.ax = (this.x < w && this.x > 0) ? this.ax : (-this.ax)
    this.ay = (this.y < h && this.y > 0) ? this.ay : (-this.ay)
    this.x += this.ax / 2
    this.y += this.ay / 2
  }
}
