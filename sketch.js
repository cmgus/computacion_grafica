
function setup() {
    let canvas = createCanvas(anchoCanvas, altoCanvas); canvas.parent('canvas')
    //puntos.push(new Punto(1, 1, primary), new Punto(4, 3, primary), new Punto(5, 2, primary), new Punto(0, 10, primary))
    //rectas.push(new Recta(puntos[0], puntos[1], primary))
    
}

function draw() {
    init()
    
    rectas.forEach(recta => recta.render())
    
    puntos.forEach(punto => punto.render())
    strokeWeight(0)
    txts.forEach(txt => txt.render())
    
}