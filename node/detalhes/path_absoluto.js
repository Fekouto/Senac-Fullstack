const path = require('path')

console.log(path.resolve('arquivo.txt'))
const midFolder = 'relatorios'
const fileName = 'arquivo.txt'
const finalPath = path.join('/','arquivos',midFolder,fileName)
console.log(finalPath)