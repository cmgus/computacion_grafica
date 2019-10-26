class Punto {
    constructor(xpos, ypos, color, grosor = 5) {
        this.xpos = xpos * escala
        this.ypos = ypos * -escala
        this.color = color
        this.grosor = grosor
    }

    render() {

        stroke(this.color)
        strokeWeight(this.grosor)
        point(this.xpos, this.ypos)

    }
}