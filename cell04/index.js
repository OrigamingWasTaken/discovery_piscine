const canvasScale = 5
const maxStarSize = 3
const maxStarMove = 300
const starBorder = maxStarSize
const starCount = 300

const canvas = document.querySelector("canvas")
const context = canvas.getContext('2d')

const bgColor = "black"
const stars = []

const drawStar = (x,y,size) => {
    context.beginPath()
    context.arc(x,y,size, 0, 2 * Math.PI)
    context.fill()
}

const drawStars = (mousePos) => {
    canvas.width = window.innerHeight * canvasScale
    canvas.height = window.innerWidth * 0.8 * canvasScale

    /*context.fillStyle = bgColor
    context.fillRect(0,0,canvas.width,canvas.height)*/
    context.fillStyle = "white"

    stars.forEach(star => {
        star.pos.x = mousePos.x * maxStarMove * (star.size / maxStarSize ** 2) * canvasScale
        star.pos.y = mousePos.y * maxStarMove * (star.size / maxStarSize ** 2) * canvasScale

        drawStar(star.startPos.x * canvasScale + star.pos.x, star.startPos.y * canvasScale + star.pos.y, star.size)
    })
}

const createStars = (number) => {
    for (let i = 0; i < number; i++) {
        const xPos = starBorder + Math.random() * (window.innerWidth - starBorder * 2);
        const yPos = starBorder + Math.random() * (window.innerHeight * 0.8 - starBorder * 2);
        size = Math.random() * maxStarSize;

        stars.push({
            startPos: {
                x: xPos,
                y: yPos
            },
            pos: {
                x: xPos,
                y: yPos
            },
            size: size,
        })
    }
}

const handleMouse = e => {
    const mouseX = 0.5 - e.clientX / window.innerWidth
    const mouseY = 0.5 - e.clientY / window.innerHeight

    drawStars({
        x: mouseX,
        y: mouseY
    })
}

window.onmousemove = handleMouse

window.onload = () => {
    createStars(starCount)
    handleMouse({
        clientY: 0,
        clientX: 0
    })
}

// Images animations

window.addEventListener("mousemove", (e) => {
    const parElements = document.querySelectorAll(".mousePar")

    const mousePosX = e.clientX
    const mousePosY = e.clientY

    parElements.forEach(function(element) {
        //if (element.matches(":hover")) { return }
        var direction = 1;
        var force = 0.01;
        var depth = element.getAttribute('data-speed');
        var width = window.innerWidth/2;
        var height = window.innerHeight/2;
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        var tx = (mouseX - width) * force * direction * depth;
        var ty = (mouseY - height) * force * direction * depth;
        var transform = `translate(${tx}%, ${ty}%)`;
        element.style.transform = transform;
    })
})

const linkVis = (el,bool) => {
    const imgBtns = el
    imgBtns.forEach(function(element) {
        if (bool) {
            if (!element.classList.contains("hide")) {
                element.classList.toggle("hide")
            }
        } else {
            if (element.classList.contains("hide")) {
                element.classList.remove("hide")
            }
        }
    })
}

const disVis = (el,bool) => {
    const imgBtns = el
    imgBtns.forEach(function(element) {
        if (bool) {
            if (!element.classList.contains("hide-ds")) {
                element.classList.toggle("hide-ds")
            }
        } else {
            if (element.classList.contains("hide-ds")) {
                element.classList.remove("hide-ds")
            }
        }
    })
}

window.addEventListener("mousemove", (e) => {
    const neptune = document.getElementById("neptune")
    const hitbox = document.getElementById("hitbox")
    const elements = document.querySelectorAll(".imgbtn")
    if (neptune.matches(":hover")) {
        linkVis(elements,true)
    } else {
        linkVis(elements,false)
    }
})

const skillButtons = document.getElementById("skills")
skillButtons.addEventListener("click", function(e) {
    const bt = document.querySelectorAll("#bt")
    disVis(bt,false)
})