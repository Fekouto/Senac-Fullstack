/*let isUserReady = confirm('Are you ready?');
if (isUserReady){
    alert("i'm ready")
}else{
    alert("i'm not ready")
}*/
let valor1;
let valor2;
while(true){
    valor1= Number(prompt("Valor da primeira nota"));
    if(isNaN(valor1)){
        alert('Voce nao inseriu um numero, tente novamente')
        continue;
    }

    valor2= Number(prompt("Valor da segunda nota"));
    if(isNaN(valor2)){
        alert('Voce nao inseriu um numero, tente novamente')
        continue;
    }
    break;
}
let media= (valor1 + valor2)/2;

if(media>=5){
    alert(`Sua media foi ${media}, você passou`);
}else{
    alert(`Sua media foi ${media}, você está reprovado`);
}