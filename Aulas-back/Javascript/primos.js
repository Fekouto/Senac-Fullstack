let valor = prompt('digite um valor para verificar se eh primo ou nao')
let controle = 0;
let contador = 2;

while(contador<valor){
    if(valor%contador==0){
        controle++;
    }
    contador++;
}
if(controle==0){
    alert('esse numero eh primo')
}else{
    alert('esse numero n eh primo')
}

