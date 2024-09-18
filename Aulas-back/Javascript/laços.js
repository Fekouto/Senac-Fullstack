let numero = 0;
let contador = 0;
while(numero <=10){
    document.write('Tabuada do ' + numero + ':<br>')
    while(contador <=10){
        document.write(`${numero} x ${contador} = ${numero*contador} ` + '<br>')
        contador++;
    }
    contador = 0;
    numero++;
}