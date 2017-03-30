import Point from './point'
import CurrentPoint from './current_point'

// window.onload = function () {
//   const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart
//   console.log('Page load time is ' + loadTime)
// }

const raf = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
const body = document.body || document.documentElement.body
canvas.setAttribute('id', 'map')
canvas.width = window.innerWidth - 10 || 1000
canvas.height = window.innerHeight - 10 || 800
body.appendChild(canvas)

let pointList = []
let currentPoint = new CurrentPoint(0, 0)

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < pointList.length; i++) {
    pointList[i].move(canvas.width, canvas.height)
    pointList[i].drawPoint(ctx)
    for (let j = i + 1; j < pointList.length; j++) {
      pointList[i].drawLine(ctx, pointList[j])
    }
  }
  if (currentPoint.x) {
    currentPoint.drawPoint(ctx)
    for (let k = 0; k < pointList.length; k++) {
      currentPoint.drawLine(ctx, pointList[k])
    }
  }
  raf(draw)
}

const init = (num) => {
  for (let i = 0; i < num; i++) {
    pointList.push(
      new Point(Math.random() * canvas.width, Math.random() * canvas.height, generateColor())
    )
  }
  draw()
}

// function $ (ele) {
//   return document.querySelector(ele)
// }

function generateColor () {
  let color = '#'
  const letters = '0123456789abcdef'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * letters.length)]
  }
  return color
}

window.addEventListener('load', init(200))
window.addEventListener('mousemove', (event) => {
  event = event || window.event
  currentPoint.x = event.clientX
  currentPoint.y = event.clientY
})
window.addEventListener('mouseout', (event) => {
  currentPoint.x = null
  currentPoint.y = null
})
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth - 10
  canvas.height = window.innerHeight - 10
})
