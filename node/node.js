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

const readline = require('readline').createInterface({
    input: process.stdin,
    output: porcess.stdout

})
readline.question('qual a sua linguagem preferida:',
(language)=>{
    console.log(`a minha linguagem preferida é c: ${language}`)
})
