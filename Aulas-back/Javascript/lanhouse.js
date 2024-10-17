const valor = document.getElementById('valor')
const tempo = document.getElementById('tempo')
const saida = document.getElementById('saida')

function conta(){
    saida.innerHTML = "o valor da conta sera " + (valor.value)*(parseInt((tempo.value)/15))
}