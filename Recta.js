class Recta {
    constructor(p1, p2, color, grosor = 1) {
        this.p1 = p1
        this.p2 = p2
        this.color = color
        this.grosor = grosor
    }
    render() {
        stroke(this.color)
        strokeWeight(this.grosor)
        line(this.p1.xpos, this.p1.ypos, this.p2.xpos, this.p2.ypos)
    }
}