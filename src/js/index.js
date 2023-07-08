const oButao = document.getElementById("o-butao")
const body = document.querySelector("body")
const botao = document.querySelector(".botao")

oButao.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")
    if (modoEscuroEstaAtivo) {
        botao.setAttribute("src", "./src/imagens/sol.png")
    }
    else {
        botao.setAttribute("src", "./src/imagens/lua.png")
    }

})
