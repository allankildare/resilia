
// Primeira Fase
function iniciar () {
    var nome = document.getElementById("name").value
    var body = document.querySelector("body")

    body.innerHTML += `<p>Ok, vamos iniciar uma história.<br>
    Você, ${nome}, está planejando entrar num emprego de desenvolvimento web.<br>
    Mas você está num mundo onde o coronavírus é realidade. Você vai sair para entregar currículo?<br>`
    body.innerHTML += `<button onclick="primeiraSim()">Sim</button>
    <button onclick="primeiraNao()">Não</button>`
    
    
}

function primeiraNao () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Ufa, pelo menos sua saúde foi salva.<br>
    Mas e aí, estudou bem o HTML?`
    body.innerHTML += `<br>`
    body.innerHTML += `<button onclick="segundaSim()">Sim</button>
    <button onclick="segundaNao()">Não</button>`
}

function primeiraSim () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Putz, agora você pegou o corona e está em estado grave. Passar bem =(`
    body.innerHTML += `<br><button onclick="location.reload()">Voltar</button>`
}

// Segunda Fase
function segundaSim () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Ótimo, estudou bem CSS?`
    body.innerHTML += `<br>`
    body.innerHTML += `<button onclick="terceiraSim()">Sim</button>
    <button onclick="terceiraNao()">Não</button>`
}

function segundaNao () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Estude mais, vai dar certo!`
    body.innerHTML += `<br><button onclick="location.reload()">Voltar</button>`
}

// Terceira Fase
function terceiraSim () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Melhor ainda, E o JavaScript hein?`
    body.innerHTML += `<br>`
    body.innerHTML += `<button onclick="quartaSim()">Sim</button>
    <button onclick="quartaNao()">Não</button>`
}

function terceiraNao () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Linguagem de programação é super importante! Seja pro back ou front-end.<br>
    Para fullstack é essencial, volte e melhore um pouquinho mais.`
    body.innerHTML += `<br><button onclick="location.reload()">Voltar</button>`
}

// Quarta Fase
function quartaSim () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Caramba, Você tá indo bem! Acho que vale a pena você explorar o React, 
    React Native, jQuery ou outras bibliotecas e frameworks que utilizam o JavaScript como base. 
    Mas calma, e o Node.js? Estudou?`
    body.innerHTML += `<br>`
    body.innerHTML += `<button onclick="quintaSim()">Sim</button>
    <button onclick="quintaNao()">Não</button>`
}

function quartaNao () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Linguagem de programação é super importante! Seja pro back ou front-end.<br>
    Para fullstack é essencial, volte e melhore um pouquinho mais.`
    body.innerHTML += `<br><button onclick="location.reload()">Voltar</button>`
}

// Quinta Fase
function quintaSim () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Boa! E as soft skills?`
    body.innerHTML += `<br>`
    body.innerHTML += `<button onclick="sextaSim()">Sim</button>
    <button onclick="sextaNao()">Não</button>`
}

function quintaNao () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Muito importante entender o funcionamento do Node.js, se eu fosse você, estudaria.`
    body.innerHTML += `<br><button onclick="location.reload()">Voltar</button>`
}

// Sexta Fase
function sextaSim () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Parabéns! Já dá pra ser um junior!`
}

function sextaNao () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Exerça elas, são fundamentais pro mercado de trabalho.`
    body.innerHTML += `<br><button onclick="location.reload()">Voltar</button>`
}