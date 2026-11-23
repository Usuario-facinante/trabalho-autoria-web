const sidebar = document.getElementById("sidebar")
let num_vizu = 0
let num_peao = 0
function alterar_vizu() {
    if (num_vizu % 2 === 0) {
    sidebar.classList.add("invisivel")
    }
    else {
        sidebar.classList.remove("invisivel")
    }
    num++
}
function mostrar_peao() {
    const peao_mostrar = document.getElementById("peao")
    if (num_peao == 0) {
        const casa = document.createElement("div")
        casa.classList.add("preto")
        casa.textContent =  "♙"
        peao_mostrar.appendChild(casa)
    }
    else if (num_peao % 2 === 0) {
        peao_mostrar.children[1].classList.add("invisivel")
    }
    else {
        peao_mostrar.children[1].classList.remove("invisivel")
    }
    num_peao++

    console.log(num_peao)
}