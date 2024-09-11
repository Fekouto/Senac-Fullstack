let primeiraFrase = 'Venha para o lado negro da força';
let teste = primeiraFrase.split('a');
let contador = 0;

console.log(primeiraFrase.slice('a'));



// console.log(primeiraFrase.length);

// console.log(primeiraFrase.charAt(31));

for(let i=0;i<(primeiraFrase.length)+1;i++){

    if(primeiraFrase[i]=='a'){
        contador++;
    }
}
console.log(contador);


