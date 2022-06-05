let canvas = document.querySelector('canvas');
canvas.width = (window.innerWidth * 80) / 100;
canvas.height = (window.innerHeight * 30 / 100);

let mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 40;
const minRadius = 5;



window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
})


// to resize the window
window.addEventListener("resize", (event) => {
    // setting canvas width to window innerWidth
    canvas.width = (window.innerWidth * 80) / 100;
    canvas.height = (window.innerHeight * 30 / 100);

    init();
})

// to create the context c to access the drawing context using its getContext() method.
let c = canvas.getContext('2d');

function rgbValue(r, g, b) {
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// creating a js object
function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = color;



    // method to draw a circle
    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.strokeStyle = `rgba(${this.r}, ${this.g}, ${this.b}`; //random generated color;
        // c.stroke();
        c.fillStyle = this.color; //random generated color;
        c.fill();
    }

    this.update = () => {
        if (this.x + this.radius > (window.innerWidth * 80) / 100 || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > (window.innerHeight * 30) / 100 || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;


        // interactivity
        // if ((mouse.x - this.x) < 50 && (mouse.x - this.x) > -50 && (mouse.y - this.y) < 50 && (mouse.y - this.y) > -50)
        // Math.abs gives absolute value (positive value)
        if ((Math.abs(mouse.x - this.x) < 50)
            && (Math.abs(mouse.y - this.y) < 50)) {
            console.log("hi")
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

let circleArray;

function init() {
    circleArray = [];

    let totalCircles = 800;

    for (let i = 0; i < totalCircles; i++) {

        let radius = Math.random() * 5 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 4; // x velocity
        let dy = (Math.random() - 0.5) * 4; // y velocity



        circleArray.push(new Circle(x, y, dx, dy, radius, "#b0dedf")); // initializing new Circle object
    }
}

function animate() {
    window.requestAnimationFrame(animate); // to keeping calling function in a loop
    c.clearRect(0, 0, innerWidth, innerHeight); // to clear the whole canvas
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update(); // updating all circles using indexing 
    }

}

init();
animate();






