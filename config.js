const anchoCanvas = 800
const altoCanvas = 500
const midX = anchoCanvas / 2
const midY = altoCanvas / 2

const fondo = '#e3e7f1'
const primary = '#333333'
const secondary = '#ff4d00'
const light = '#42b883'

const escala = 20

const rayasX = midX / escala
const rayasY = midY / escala

let puntos = []
let rectas = []
let txts = []

function init() {
    translate(anchoCanvas/2, altoCanvas/2)
    background(fondo)
    txts.push(new Texto('0', new Punto(-0.5,-0.6, secondary)))
    axisX()
    axisY()
}

function axisX() {
    
    let axisx = new Recta(new Punto(-midX, 0), new Punto(midX, 0), secondary, 2)
    for(let i = 1; i < rayasX; i++) {
        txts.push(new Texto(i, new Punto(i-0.2, -0.7, primary)))
        rectas.push(new Recta(new Punto(i, 0.1), new Punto(i, -0.1), secondary))
    }
    for(let i = 1; i < rayasX; i++) {
        txts.push(new Texto(-i, new Punto((i+0.3)*-1, -0.7, primary)))
        rectas.push(new Recta(new Punto(-i, 0.1), new Punto(-i, -0.1), secondary))
    }
    axisx.render()
}
function axisY() {
    
    let axisy = new Recta(new Punto(0, -midY), new Punto(0, midY), secondary, 2)
    for(let i = 1; i < rayasY; i++) {
        txts.push(new Texto(i, new Punto(-0.9, (i), primary)))
        rectas.push(new Recta(new Punto(0.1, i), new Punto(-0.1, i), secondary))
    }
    for(let i = 1; i < rayasY; i++) {
        txts.push(new Texto(-i, new Punto(-1.1, (i+0.3)*-1, primary)))
        rectas.push(new Recta(new Punto(0.1, -i), new Punto(-0.1, -i), secondary))
    }
    axisy.render()
}

