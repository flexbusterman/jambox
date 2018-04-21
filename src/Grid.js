export class Grid {
    constructor (rows, p5){
        this.rows = rows
        this.p5 = p5
        this.width = p5.width
        this.height = p5.height
    }

    draw () {
        this.p5.stroke(255, 0, 0)
        this.p5.fill(255)
        for (let i = 0; i < this.rows; i++) {
            this.p5.rect(0, i * (this.height/this.rows), this.width, this.height/this.rows)
        }
    }

    update () {
        this.draw()
    }
}
