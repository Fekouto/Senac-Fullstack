const fs = require('fs')
if(!fs.existsSync('./minhapasta')){
    console.log('Nao existe')
    fs.mkdirSync('minhapasta')
    // fs.writeFileSync('arquivo.txt','ola')
}
if(fs.existsSync('./minhapasta')){
    console.log('Existe')
}
