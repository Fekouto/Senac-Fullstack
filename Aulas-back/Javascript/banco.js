let divida = Number(prompt('Qual o valor da divida'));
let amortizacao;

while(divida!=0){
    // divida = prompt('qual o valor da divida? ')
    amortizacao = prompt('Quando voce ira amortizar esse mes?')

    if(amortizacao<0){
        alert('Não pode colocar valores negativos')
    }else if (amortizacao>divida){
        alert('Valor colocado é maior que a divida')
    }else{
        alert('agora sua divida ficou ' + `${divida-amortizacao} = ${divida} - ${amortizacao}`)
        divida = divida - amortizacao;
    }
}