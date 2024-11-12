const express = require('express'); // implementando e chamando o framework express
const app = express(); // atribuindo o meu modulo express à uma variável
const port = 3001; // criando uma variavel para receber o valor da minha port
const path = require('path') // implementando e chamando o modulo path, que serve para guiar os caminh
const basePath = path.join(__dirname, 'html') // criando variavel para receber o caminho para a pasta "meusTemplates", para que assim o express encontre o meu arquivo "index.html"

app.get('/users/add', (req, res) => { // usando o metodo get para requisitar o arquivo user_form para a rota /users/add
    res.sendFile(`${ basePath }/forms.html`)
})

app.post('/users/save', (req, res) => { //usando o metodo post para enviar os dados digitados pelo usuario para ao chegar na rota      /users/save
    console.log(req.body)

    const name = req.body.name

    const age = req.body.age

    console.log(`o nome do usuário é: ${ name } e ele tem ${ age } anos`)

res.sendFile(`${ basePath }/forms.html`)
})

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.get('/users/:id', (req, res) => { // pegando o id do usuario pela URL


    const id = req.params.id // criando variavel para receber o parametro id do cliente (o usuario)
    console.log(`Estamos buscando pelo usuário ${ id }`)

    res.sendFile(`${ basePath }/dados.html`)
})

const checkAuth = function (req, res, next) { // criando variavel para guardar uma função de middleware que faz autenticação

    req.authStatus = true; // criando variável para guardar o status de autenticação do usuário

    if (req.authStatus) { // condicional login

        console.log("Está logado")
        next()
    } else {
        console.log('Não está logado, faça login para continuar')
    }

    app.use(checkAuth)

}

app.get('/', (req, res) => res.send("Olá mundo")) // usando o metodo get do express que cria uma requisição no meu servidor, onde a resposta(res) para essa requisição é retornar "Olá mundo"

app.get('/'), function (req, res, next) { // usando o metodo get do express que cria uma requisição no meu servidor, onde a resposta(res) para essa requisição é retornar o meu arquivo index.html
    res.sendFile(`${ basePath }/dados.html`)
}

app.listen(port, () => console.log(`Servidor rodando na porta: ${ port }`)) // usando metodo listen do express que escuta requisições do meu servidor, na porta especificada (3000)