let vetor = [];
for(let i = 0; i<10 ; i++){
    let valor = prompt('insira um valor')
    vetor.push(valor) 
}
for(let j = 0; j<10; j++){
    console.log(vetor[j]*vetor[j])
}