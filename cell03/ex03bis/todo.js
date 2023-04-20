function addTask(task) {
    let tasks = (document.cookie ?? null).replace("text=","").split(",")

    tasks.push(task)

    if (tasks[0] == '') {tasks.shift()}

    tasks = "text=" + tasks.toString()
    
    document.cookie = tasks
    console.log(document.cookie)
}

function removeTask(remove) {
    let tasks = (document.cookie ?? ",").replace("text=","").split(",")

    tasks = tasks.filter(e => e !== remove)

    document.cookie = "text=" + tasks
    console.log(tasks)
}

function onClick() {
    objName = prompt('What is your task?').replace(",","")
    addTask(objName)

    let div = document.createElement("div")
    div.className = "todo"
    
    let h2 = document.createElement("h2")
    h2.innerText = objName

    div.appendChild(h2)
    document.getElementById("ft_list").appendChild(div)
}

function onLoad() {
    let tasks = (document.cookie ?? null).replace("text=","")
    if(tasks.length < 1) {return}
    tasks = tasks.split(",")
    console.log(tasks)

    for (i = 0; i < tasks.length; i++) {
        let div = document.createElement("div")
        div.className = "todo"
        
        let h2 = document.createElement("h2")
        h2.innerText = tasks[i]
    
        div.appendChild(h2)
        document.getElementById("ft_list").appendChild(div)
    }
}

$("body").click(function(e) {
    el = e.target
    if (el.className == "todo") {
        if(confirm('Are you sure you want to delete this task?')) {
            removeTask(el.childNodes[0].innerText)
            el.remove()
        }
    }
})