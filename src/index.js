import createMap from './map'

const W = window
const canvas = document.getElementById('map')
const width = W.innerWidth > 720 ? 720 : W.innerWidth
const height = W.innerHeight > 405 ? 405 : W.innerHeight

createMap({
  canvas,
  width,
  height
})
