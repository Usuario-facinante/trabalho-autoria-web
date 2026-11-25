let num_vizu = 0
let num_peao = 0
let num_torre = 0
let num_cavalo = 0
let num_rei = 0
let num_bispo = 0
let num_rainha = 0
function alterar_vizu() {
    const sidebar = document.getElementById("sidebar")
    if (num_vizu % 2 === 0) {
    sidebar.classList.add("invisivel")
    }
    else {
        sidebar.classList.remove("invisivel")
    }
    num_vizu++
}
function mostrar_peao() {
    const peao_mostrar = document.getElementById("peao") // ["♙", "♖", "♘", "♗", "♕", "♔"]
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
function mostrar_torre() {
    const torre_mostrar = document.getElementById("torre")
    if (num_torre == 0) {
        const casa = document.createElement("div")
        casa.classList.add("preto")
        casa.textContent =  "♖"
        torre_mostrar.appendChild(casa)
    }
    else if (num_torre % 2 === 0) {
        torre_mostrar.children[1].classList.add("invisivel")
    }
    else {
        torre_mostrar.children[1].classList.remove("invisivel")
    }
    num_torre++

    console.log(num_torre)
}
function mostrar_bispo() {
    const bispo_mostrar = document.getElementById("bispo")
    if (num_bispo == 0) {
        const casa = document.createElement("div")
        casa.classList.add("preto")
        casa.textContent =   "♗"
        bispo_mostrar.appendChild(casa)
    }
    else if (num_bispo % 2 === 0) {
        bispo_mostrar.children[1].classList.add("invisivel")
    }
    else {
        bispo_mostrar.children[1].classList.remove("invisivel")
    }
    num_bispo++

    console.log(num_bispo)
}
function mostrar_cavalo() {
    const cavalo_mostrar = document.getElementById("cavalo")
    if (num_cavalo == 0) {
        const casa = document.createElement("div")
        casa.classList.add("preto")
        casa.textContent =  "♘"
        cavalo_mostrar.appendChild(casa)
    }
    else if (num_cavalo % 2 === 0) {
        cavalo_mostrar.children[1].classList.add("invisivel")
    }
    else {
        cavalo_mostrar.children[1].classList.remove("invisivel")
    }
    num_cavalo++

    console.log(num_cavalo)
}
function mostrar_rainha() {
    const rainha_mostrar = document.getElementById("rainha")
    if (num_rainha == 0) {
        const casa = document.createElement("div")
        casa.classList.add("preto")
        casa.textContent =  "♕"
        rainha_mostrar.appendChild(casa)
    }
    else if (num_rainha % 2 === 0) {
        rainha_mostrar.children[1].classList.add("invisivel")
    }
    else {
        rainha_mostrar.children[1].classList.remove("invisivel")
    }
    num_rainha++

    console.log(num_rainha)
}
function mostrar_rei() {
    const rei_mostrar = document.getElementById("rei")
    if (num_rei == 0) {
        const casa = document.createElement("div")
        casa.classList.add("preto")
        casa.textContent =  "♔"
        rei_mostrar.appendChild(casa)
    }
    else if (num_rei % 2 === 0) {
        rei_mostrar.children[1].classList.add("invisivel")
    }
    else {
        rei_mostrar.children[1].classList.remove("invisivel")
    }
    num_rei++

    console.log(num_rei)
}