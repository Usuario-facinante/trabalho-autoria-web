const sidebar = document.getElementById("sidebar")
let num = 0
function alterar_vizu() {
    if (num % 2 === 0) {
    sidebar.classList.add("invisivel")
    }
    else {
        sidebar.classList.remove("invisivel")
    }
    num++
}