function calc(fn) {
    return new Function("return " + fn)()
}

function onClick() {
    let input1 = $(".first_input").val()
    let input2 = $(".second_input").val()
    let operator = $(".operation").val()
    let result = $(".first_input")

    if (parseInt(input1) < 0 || parseInt(input2) < 0) {
        alert("Error :(")
        console.log("Error :(")
        return
    }

    if (operator == "%" || operator == "/" && input2 == "0") {
        alert("It’s over 9000!")
        console.log("It’s over 9000!");
        return
    }

    let calcString = "" + input1 + operator + input2
    let res = calc(calcString)

    result.val(res)
    console.log(res)
}

function useMe() {
    alert("Please, use me...")
}

$(".result").click(onClick())

setInterval(() => {
    useMe()
}, 30000);