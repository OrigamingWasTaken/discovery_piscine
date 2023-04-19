function calc(fn) {
    return new Function("return " + fn)()
}

function onClick() {
    let input1 = document.getElementById("first_input").value
    let input2 = document.getElementById("second_input").value
    let operator = document.getElementById("operation").value
    let result = document.getElementById("result")

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

    result.value = res
    console.log(res)
}

function useMe() {
    alert("Please, use me...")
}

setInterval(() => {
    useMe()
}, 30000);