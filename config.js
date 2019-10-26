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

let btn_graficar = document.getElementById('btn-graficar')
let xcoor = document.getElementById('xpos')
let ycoor = document.getElementById('ypos')

let btn_unir = document.getElementById('btn-unir')

let btn_rotar_iqz = document.getElementById('btn-rotar-izq')
let btn_rotar_der = document.getElementById('btn-rotar-der')
let angulo = document.getElementById('rotar')

function init() {
    translate(anchoCanvas/2, altoCanvas/2)
    background(fondo)
    txts.push(new Texto('0', new Punto(-0.5,-0.6, secondary)))
    axisX()
    axisY()
}

function axisX() {
    
    rectas.push(new Recta(new Punto(-midX, 0), new Punto(midX, 0), secondary, 2))

    for(let i = 1; i < rayasX; i++) {
        txts.push(new Texto(i, new Punto(i-0.2, -0.7, primary)))
        rectas.push(new Recta(new Punto(i, 0.1), new Punto(i, -0.1), secondary))
    }
    for(let i = 1; i < rayasX; i++) {
        txts.push(new Texto(-i, new Punto((i+0.3)*-1, -0.7, primary)))
        rectas.push(new Recta(new Punto(-i, 0.1), new Punto(-i, -0.1), secondary))
    }
}
function axisY() {
    
    rectas.push(new Recta(new Punto(0, -midY), new Punto(0, midY), secondary, 2))

    for(let i = 1; i < rayasY; i++) {
        txts.push(new Texto(i, new Punto(-0.9, (i), primary)))
        rectas.push(new Recta(new Punto(0.1, i), new Punto(-0.1, i), secondary))
    }
    for(let i = 1; i < rayasY; i++) {
        txts.push(new Texto(-i, new Punto(-1.1, (i+0.3)*-1, primary)))
        rectas.push(new Recta(new Punto(0.1, -i), new Punto(-0.1, -i), secondary))
    }
}

btn_graficar.addEventListener('click', () => {
    puntos.push(new Punto(xcoor.value, ycoor.value, primary))
    xcoor.value = ''
    ycoor.value = ''
})

btn_unir.addEventListener('click', () => {
    
    for (let i = 0, j = 1; i < puntos.length; i++, j++) {
        if(j == puntos.length) j = 0;
        rectas.push(new Recta(puntos[i], puntos[j], secondary))
    }
})



/* btn_rotar_der.addEventListener('click', () => {

}) */