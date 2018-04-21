import {Grid} from './Grid'

const sketch = (p5) => {
    let canvasWidth = window.innerWidth
    let canvasHeight = window.innerHeight
    let canvas
    let grid
    // make library globally available
    window.p5 = p5
    let rows = 10
    // Setup function
    // ======================================
    p5.setup = () => {

        canvas = p5.createCanvas(canvasWidth, canvasHeight)
        grid = new Grid(rows, p5)

    }


    // Draw function
    // ======================================
    p5.draw = () => {
        grid.update()
    }
}

export default sketch
