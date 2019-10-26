
function setup() {
    let canvas = createCanvas(anchoCanvas, altoCanvas); canvas.parent('canvas')
    //puntos.push(new Punto(1, 1, primary), new Punto(4, 3, primary), new Punto(5, 2, primary), new Punto(0, 10, primary))
    //rectas.push(new Recta(puntos[0], puntos[1], primary))

    // Formula para rotar
    btn_rotar_iqz.addEventListener('click', () => {
        puntos.forEach(punto => {
            let x = punto.xpos/10
            let y = punto.ypos/10
            let r = Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
            //let nx = Math.floor(x*Math.cos(angulo.value) - y*Math.sin(angulo.value))
            //let ny = Math.floor(y*Math.cos(angulo.value) + x*Math.sin(angulo.value))
            punto.setX((x*Math.cos(angulo.value) - y*Math.sin(angulo.value)))
            punto.setY((y*Math.cos(angulo.value) + x*Math.sin(angulo.value))) 
            //puntos.push(new Punto(nx, ny, primary))
            console.log(r ,x*Math.cos(angulo.value) - y*Math.sin(angulo.value), y*Math.cos(angulo.value) + x*Math.sin(angulo.value))
        });
    })

}

function draw() {
    init()

    rectas.forEach(recta => recta.render())

    puntos.forEach(punto => punto.render())
    strokeWeight(0)
    txts.forEach(txt => txt.render())

}

function rotar(a) {

}