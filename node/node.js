// console.log('hello world!')

// const fs = require('fs')

// fs.readFile('.txt','utf8',(err,data)=>{
//     if (err){
//         console.log(err)
//     }
//     console.log(data)
// })

// module.exports = {
//     soma(a,b){
//         console.log(a+b)
//     }
// }
// import soma from './auxi.mjs'

// // soma(2,5)
// const path = require('path')
// const {exit} = require('process')
// const extension = path.extname("arquivo.php")
// console.log(extension)

// const x = 20
// const y = 'felipe'
// const z = [1,2]
// console.log(x,y,z)

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: porcess.stdout

// })
// readline.question('qual a sua linguagem preferida:',
// (language)=>{
//     console.log(`a minha linguagem preferida é c: ${language}`)
// })

// function a(){
//     console.log('executando a()')
// }
// function b(){
//     console.log('executando b()')
// }
// function c(){
//     console.log('executando c()')
//     a()
//     b()
// }

// c()

// const eventEmitter = require ('events')
// const eventemitter = new eventEmitter()

// eventemitter.on('start',() =>{
//     console.log('durante')
// })
// console.log('antes')
// eventemitter.emit('start')
// console.log('depois')

// const fs = require('fs')
// console.log('inicio')
// fs.writeFile('arquiv02.txt','teste',function(err){
//     setTimeout(() => {
//         console.log('arquivo criado')
//     }, 2000);
// })
// console.log('fim')
// const x = 10

// if(!Number.isInteger(x)){
//     throw new Error('o valor de x nao é um numero inteiro')
// }
// console.log('continuando o codigo')

// const x = 10

// try{
//     x=10
// }catch(err){
//     console.log(`erro: ${err}`)
// }
// console.log('oi')