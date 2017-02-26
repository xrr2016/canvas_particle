import createMap from './map'

const W = window
const canvas = document.getElementById('map')
const width = W.innerWidth > 1000 ? 1000 : W.innerWidth
const height = W.innerHeight

createMap({
  canvas,
  width,
  height
})
