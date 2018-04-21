const sketch = (p5) => {
    const canvasWidth = p5.windowWidth
    const canvasHeight = p5.windowHeight
    // const d = new Star(500, 300, 4);

    // make library globally available
    window.p5 = p5

    // Setup function
    // ======================================
    p5.setup = () => {
        let canvas = p5.createCanvas(canvasWidth, canvasHeight)
        // p5.frameRate(10)
    }

    // Draw function
    // ======================================
    p5.draw = () => {
        p5.background('#111')
        p5.ellipse(100,100,100,100)
    }
}

export default sketch
