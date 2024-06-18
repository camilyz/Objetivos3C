const botoes= documents.querySelectorAll(".botao")

for(let i=0; i <botoes.length;j++){
    botoes[i]. onclick = function()
    {for(let j=o;j<botoes.length;j++){
        botoes[j].classList.remove("ativo");
    }
botoes[i].classList.add("ativo");
}
}
const contadores = document.querySelectorAll(“.contador”);
const tempoObjetivo1 = new Date(“2024-10-05T00:00:00”);
contadores[0].textContent = calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = tempoFinal / 1000;
    return segundos;