let peso, altura, imc;

peso = parseFloat(prompt('Coloque seu peso: '))
if (isNaN(peso)) {
    alert('Valor invalido. Apenas numeros!')
} else {
    altura = parseFloat(prompt('Coloque sua altura: '))
    if (isNaN(altura)) {
        alert('Valor invalido. Apenas numeros!')
    }
    else {
        imc = peso / (altura * altura);

        if (imc <= 18.5) {
            alert('Abaixo do peso: ' + parseInt(imc * 100) / 100)
        }
        else if (imc > 18.5 && imc <= 24.9) {
            alert('peso ideal: ' + parseInt(imc * 100)/100 )
        }
        else if (imc > 25 && imc < 29.9) {
            alert('sobrepeso: ' + parseInt(imc * 100) / 100)
        }
        else {
            alert('Obesidade: ' + parseInt(imc * 100) / 100)
        }

    }
}
