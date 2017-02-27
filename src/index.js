import Map from './scripts/map'
import Player from './scripts/player'

const canvas = document.getElementById('map')
const width = window.innerWidth > 720 ? 720 : window.innerWidth
const height = window.innerHeight > 405 ? 405 : window.innerHeight
const raf = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame || function (cb) { window.setTimeout(cb, 1000 / 60) }

const map = new Map({canvas, width, height})
const player = new Player()
function animate(){
  map.render()
  player.render(map)
}

raf(animate)
