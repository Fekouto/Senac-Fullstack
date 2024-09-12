let valor1,valor2,valor3,media;

while(true){
    valor1 = Number(prompt('Digite sua primeira nota: '));
    if(isNaN(valor1)){
        alert('Digite um valor valido');
        continue;
    }else if(valor1>10){
        alert('valor invalido, nota maxima é 10 e minima é 0')
        continue;
    }else if(valor1<0){
        alert('valor minimo é 0');
    }
    valor2 = Number(prompt('Digite sua segunda nota: '));
    if(isNaN(valor2)){
        alert('Digite um valor valido')
        continue;
    }else if(valor2 > 10){
        alert('valor invalido, nota maxima é 10 e minima é 0');
        continue;
    }else if(valor2 < 0){
        alert('valor minimo 0');
        continue;
    }
    valor3 = Number(prompt('Digite sua terceira nota: '));
    if(isNaN(valor3)){
        alert('Digite um valor valido');
        continue;
    }else if(valor3>10){
        alert('valor invalido, nota maxima é 10');
        continue;
    }else if(valor3<0){
        alert('valor minimo é 0');
        continue;
    }
    break;
}

media = (valor1*3+valor2*2+valor3*1)/(3+2+1);

if(media>5){
    alert('Você passou, parabens, sua media foi ' + media)
}
else if(media <= 5 && media>=4){
    alert('Você está de recuperação, sua media foi ' + media)
}
else{
    alert('Você reprovou sua media foi '+ media)
}