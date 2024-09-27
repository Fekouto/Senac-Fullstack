// let valores = new Array(10);
// let soma = 0;
// for (let i = 0; i < valores.length; i++) {
//     valores[i] = Number(prompt('Digite um valor'));
// }
// for (let j = 0; j < valores.length; j++) {
//     soma = soma + valores[j];   
// }
// document.write(soma);

// let valores = new Array(10)

// for(let i=0;i<valores.length;i++){
//     valores[i]= Number(prompt('Digite um valor'))
// }

// let comparador = Number(prompt('Digite um valor para ser comparado:'))

// for(let i=0;i<valores.length;i++){
//     if(valores[i]>comparador){
//         document.write(`Esse valor do array é maior que do valor digitado: ${valores[i]} + <br> `)
//     }
// }

// let valores = new Array(10);

// for (let i = 0;i<valores.length;i++){
//     valores[i] = Number(prompt('Digite um valor: '))
// }
// for (let i = 0;i<valores.length;i++){
//     document.write(valores[i]*2 + '<br>')
// }

// let valores = new Array(10)
// let pares = []
// let contador = 0;

// for(let i=0;i<valores.length;i++){
//     valores[i]=Number(prompt('Digite um valor: '))
//     if(valores[i]%2===0){
//         pares.push(valores[i])
//         contador++
//     }
// }
// document.write(`nos valores colocados temos ${contador} numeros pares colocados, sendo eles ${pares}`)

// let valores = [];

// for(let i = 0;i<10;i++){
//     valores[i]=Number(prompt('Digite um valor'))
    
//     for(let j=0;j<valores.length-1;j++){
//         if(valores[i]===valores[j]){
//             valores.pop()
//         }
//     }
// }
// document.write(valores)

// let valores = new Array(10)

// for(let i = 0; i<valores.length;i++){
//     valores[i]=Number(prompt('Digite um valor:'))
//     if(valores[i]<0){
//         valores[i]=0
//     }
// }
// document.write(valores)

// let valores = new Array(10)
// let impar = 0

// for(let i = 0; i < valores.length;i++){
//     valores[i]=Number(prompt('Digite um valor: '))

//     if(valores[i]%2===1){
//         impar=impar + valores[i]
//     }
// }

// document.write(`A soma dos valores impares sao ${impar}`)

// let arrayPrincipal = new Array(10)
// let arrayClone = new Array(10)

// for(let i=0; i<arrayPrincipal.length; i++){
//     arrayPrincipal.unshift(Number(prompt('Digite um valor: ')))
//     arrayClone.push(arrayPrincipal[i])
// }

// document.write(`array principal: ${arrayPrincipal} <br>`)
// document.write(`array invertido: ${arrayClone}`)