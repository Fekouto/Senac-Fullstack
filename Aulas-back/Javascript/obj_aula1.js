// let pessoa = {
//     nome : 'Felipe',
//     ano : 2004,
//     endereco : {
//         rua : 'Rua do Diamante',
//         numero : 318,
//         complemento : 'Casa',
//         bairro : 'Lagoa nova',
//         estado : 'Rio Grande do Norte'
//     }
// }
// let felipe = pessoa;
// felipe.ano = 20
// console.log(felipe.ano)
// console.log(pessoa.ano)

// const carro = {
//     cor : 'vermelho',
//     ano : 2010,
//     chassi : '2082AFH103',
//     marca : 'FIAT',
//     modelo : 'SUV'
// }

// document.write(carro.cor + '<br>')
// document.write(carro.ano + '<br>')
// document.write(carro.chassi + '<br>')
// document.write(carro.marca + '<br>')
// document.write(carro.modelo + '<br>')

let pessoa= {
    idade :undefined ,
    nome : undefined,
    altura : undefined 
}
let validacao = 1;

while(validacao==1){
    pessoa.idade = parseInt(prompt('Digite sua idade: '))
    if(isNaN(pessoa.idade)){
        alert('error')
        continue;
    }
    pessoa.nome = String(prompt('Digite seu nome: '))
    if(pessoa){
        alert('error2')
        continue;
    }
    pessoa.altura = parseFloat(prompt('Digite sua altura: '))
    if(isNaN(pessoa.altura)){
        alert('erro3')
        continue;
    }
    validacao++
}



document.write(`Sua idade é : ${pessoa.idade} <br> Seu nome é : ${pessoa.nome} <br> Sua altura é ${pessoa.altura}`)