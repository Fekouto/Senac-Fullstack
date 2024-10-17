const NomeFilme = document.getElementById('NomeFilme')
const DuracaoFilme = document.getElementById('DuracaoFilme')
const saida = document.getElementById('saida')

function horas(){
    saida.textContent = NomeFilme.value + '\n'
    saida.textContent += '\n' + parseInt(DuracaoFilme.value/60) + " Hora(s) e " + DuracaoFilme.value%60 + "minuto(s)"
}