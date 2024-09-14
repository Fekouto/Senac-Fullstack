let lado1, lado2, lado3;

lado1 = parseInt(prompt('Valor do lado 1'))
lado2 = parseInt(prompt('Valor do lado 2'))
lado3 = parseInt(prompt('Valor do lado 3'))

if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
    alert('Em um dos valores colocados, você inseriu algum caracter invalido')
}
else if (lado1 > 10 || lado1 < 1 || lado2 > 10 || lado2 < 1 || lado3 > 10 || lado3 < 1) { 
    alert('os valores inseridos tem que estar no intervalor de 1 a 10')
}
else if ((lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado3 + lado2) > lado1) {
    if ((lado1 == lado2 && (lado1 != lado3 || lado2 != lado3)) || (lado3 == lado1 && (lado1 != lado2 || lado3 != lado2)) || (lado2 == lado3 && (lado3 != lado1 || lado2 != lado1))) {
        alert('esse triangulo é um triangulo isoseles')
    }
    else if (lado1 == lado2 && lado1 == lado3) {
        alert('esse triangulo é um triangulo equilatero')
    }
    else {
        alert('esse triangulo é um tringulo escaleno')
    }
}
else {
    alert('os valores inseridos não podem formar um triangulo')
}