// const http = require('http')
// const port = 3000
// const server = http.createServer((req, res) => {
//     res.write("oi http")

//     res.end()
// })
// server.listen(port,() =>{
//     console.log(`servidor rodando na porta ${port}`)
// })

//   const http = require('http')
//   const port = 3000
//   const server = http.createServer((req, res) => {

//      const urlInfo = require('url').parse(req.url,true)
//      const name = urlInfo.query.name

//      res.statusCode = 200
//      res.setHeader('Content-Type','text/html')

//      if(!name){
//          res.end('<h1> preencha o seu nome: </h1> <form method="GET"> <input type="text" name="name"/> <input type="submit" value="enviar/?>  </form>')
//      }else{
//          res.end(`<h1>Seja bem-vindo ${name}</h1>`)
//      }

//   })
//    server.listen(port,() =>{
//       console.log(`servidor rodando na porta CORDÃO ${port}`)
//   })

// const url= require('url')
// const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
// const parseUrl = new url.URL(address)

// console.log(parseUrl.host)
// console.log(parseUrl.pathname)
// console.log(parseUrl.search)
// console.log(parseUrl.searchParams)
// console.log(parseUrl.searchParams.get('produtos'))

const http = require("http")
const fs = require("fs")
const port = 3001
const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.info

    if (!name) {
        fs.readFile('mensagem.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        fs.writeFile("arquivo.txt", name, function (err, data) {
            res.writeHead(302, {
                Location: '/'
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log('sexo')
})