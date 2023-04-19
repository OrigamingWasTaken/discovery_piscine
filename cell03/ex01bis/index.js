let ci = 1
let size = 200
const colors = ["#FF0000", "#00FF00", "#0000FF"]
let balloon = document.getElementById("balloon")

function changeColor(aos, you) {
    if (aos) {ci++;} else {ci = ci -1}
    if (ci > 3) {ci = 1} else if (ci < 1) {ci = 3}
    you.css("background-color",colors[ci - 1])
}

function onClick(you) {
    if (size >= 420) {size = 190}
    changeColor(true, you)
    size = size + 10
    you.css("width",size + "px")
    you.css("height",size + "px")
}

function onLeave(you) {
    if (size <= 200) {return}
    changeColor(false, you)
    size = size - 5
    you.css("width",size + "px")
    you.css("height",size + "px")
}

$("#balloon").mouseleave(function() {
    onLeave($(this))
})

$("#balloon").click(function() {
    onClick($(this))
})