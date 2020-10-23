// utilidades

function fimDeJogo () { // botao para fim de jogo
    // remove botao de escolhas
    document.getElementById("choice-1").remove()
    document.getElementById("choice-2").remove()

    // cria botao
    var button = document.createElement("button")
    var textButton = document.createTextNode("Fim de jogo")
    button.appendChild(textButton)

    // arrow function para definir fim de jogo
    button.onclick = () => window.location.reload()
    
    var container = document.getElementById("container")
    container.appendChild(button)
}

function textoParagrafo (texto) { // texto do paragrafo
    var paragrafo = document.getElementById("game-text")
    paragrafo.textContent = texto
}

function faseFamoso (famoso) { // troca nome do famoso
    var famosoTech = document.getElementById("tech-famous")
    famosoTech.textContent = famoso
}

function substituiBotao (numeroOpcao, texto, funcao) { // substitui texto do botao de acordo com o id, chama funcao
    var botao = document.getElementById(`choice-${numeroOpcao}`)
    botao.textContent = texto
    botao.onclick = funcao
}

function insereImagem (nomeArquivo, textoAlt) {
    var container = document.getElementById("container")
    container.innerHTML += `<img src="./images/${nomeArquivo}" alt="${textoAlt}">`

    container.innerHTML += '<br>'
}

// Fase 1
function iniciar () {
    var container = document.getElementById("container")
    var nome = document.getElementById("name").value
    var textoFase = `Ok, vamos iniciar uma história.<br>
    Eu trabalho no Fakebook, mas você, ${nome}, está planejando entrar num emprego de desenvolvimento web.<br>
    Você está num mundo onde o coronavírus é realidade. Você vai sair para entregar currículo?`
    var paragrafo = `<p id="game-text">` + textoFase + `</p>`
    var famoso = "Marcos Zuckerberg"
    document.getElementById("name-enter").remove()

    container.innerHTML += `<p class="text-start" id="tech-famous">${famoso}</p>`
    container.innerHTML += paragrafo
    container.innerHTML += `<button onclick="primeiraSim()" id="choice-1">SIM</button>
    <button onclick="primeiraNao()" id="choice-2">Não</button>`
}


// Fase 2
function primeiraSim () {
    textoParagrafo("Poxa,agora você está com coronavírus. Passar bem :)")
    
    document.getElementById("choice-1").remove()
    document.getElementById("choice-2").remove()
    
    fimDeJogo()
}

function primeiraNao () {
    faseFamoso("Elão Musk")
    textoParagrafo("Ufa, pelo menos sua saúde foi salva.\n Mas e aí, como você declara variável no JavaScript?")
    
    substituiBotao(1, "var", segundaVar)
    substituiBotao(2, "variavel", segundaVariavel)
}

// Fase 3
function segundaVar () {
    faseFamoso("Bill Portões")
    textoParagrafo("Boa! Começamos bem.\nJá conhece o Microsof Edge?\nQual a linguagem de programação nativa dos navegadores?")
    
    substituiBotao(1, "HTML", terceiraHtml)
    substituiBotao(2, "JavaScript", terceiraJS)
}

function segundaVariavel () {
    textoParagrafo("A palavra reservada correta é var. O JavaScript não foi programa utilizando o português.")

    insereImagem("errou-faustao.gif", "Errou (meme do Faustão)")

    fimDeJogo()
}

// Fase 4
function terceiraJS () {
    faseFamoso("Ada AmaRenda")
    textoParagrafo("Boa! Você sabe o que é linguagem de programação. Eu meio que criei ela sabe, mas eu esqueci uma coisa,\nQual dessas estruturas é um laço de repetição?")
    
    substituiBotao(1, "function", quartaFunction)
    substituiBotao(2, "for", quartaFor)
}

function terceiraHtml () {
    textoParagrafo("O HTML é apenas uma linguagem de marcação, o JavaScript que é de programação")

    insereImagem("eh.gif", "Rosto desconfiado, você errou")

    fimDeJogo()
}

// Finalizado até a fase 3 por enquanto