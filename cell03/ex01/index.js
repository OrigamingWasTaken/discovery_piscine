let ci = 1
let size = 200
const colors = ["#FF0000", "#00FF00", "#0000FF"]
let balloon = document.getElementById("balloon")

function changeColor(aos) {
    if (aos) {ci++;} else {ci = ci -1}
    if (ci > 3) {ci = 1} else if (ci < 1) {ci = 3}
    balloon.style.backgroundColor = colors[ci - 1]
}

function onClick() {
    if (size >= 420) {size = 190}
    balloon = document.getElementById("balloon")
    changeColor(true)
    size = size + 10
    balloon.style.width = balloon.style.height = size + "px"
}

function onLeave() {
    if (size <= 200) {return}
    balloon = document.getElementById("balloon")
    changeColor(false)
    size = size - 5
    balloon.style.width = balloon.style.height = size + "px"
}