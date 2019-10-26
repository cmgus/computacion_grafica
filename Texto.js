class  Texto {

    constructor(texto, p1) {
        this.texto = texto
        this.p1 = p1
    }
    render() {
        
        textSize(8)
        fill(60,111,156);
        text(this.texto, this.p1.xpos, this.p1.ypos);
    }
}