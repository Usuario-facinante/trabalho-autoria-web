function E4() {
    imagem = document.getElementById(E4_imagem)
    if (getComputedStyle(imagem).display == "none") {
        imagem.style.display = "block";
    }
    else {
        imagem.style.display = "none"
    }
}