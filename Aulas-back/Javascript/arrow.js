// function soma(a,b){
//     console.log(`Ola ${a} e ${b}`)
// }

// soma('felipe', 'clara')

// const nome = (a,b) => {
//     console.log(`ola ${a} e ${b}`)
// }

// soma('felipe', 'clara')

// const saudacao = (name) => `ola, ${name}`
// console.log(saudacao('douglas'))

// const dobrar = function(x){
//     console.log(x*2)
// }
// dobrar(5)

// const dobrar2 = x => x*2
// console.log(dobrar2(6))

// const saudacao = (nome,idade) => {
//     console.log('ola ' + nome)
//     console.log ('sua idade é ' + idade)
// }
// saudacao('felipe',20)

// const dobro = x =>x*2
// console.log(dobro(5))

// const hello = x => `Hello ${x}`
// console.log(hello("World!"))

// const soma = (x,y)=> console.log(x+y)
// soma(5,6)

// const par = x => x%2==0 ? console.log('par') :console.log('impar')
// par(2)

// const x = [1,2,3,4,5,6,7,8,9,10]
// const par = x.filter(n=> n%2===0)
// console.log(par)

const isPrimo = (num,div = 2) => num<2 ? false : (div*div>num?true : num % div ===0 ? false : isPrimo(num,div + 1))
const filtrar = arr => arr.filter(isPrimo)
console.log(filtrar([10,10,10,101,,11,12,12,12,12,12,12,13,14,15,16,17,18,19,20]))




