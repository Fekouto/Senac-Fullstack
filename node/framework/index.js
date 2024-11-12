const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const basePath = path.join(__dirname,'meustemplates')

app.get('/users/id:',(req,res)=>{
    const  id = req.params.id
    console.log('estamos procurando o usuario')
    res.sendFile(`${basePath}/users.html`)
})

const checkAuth = function(req,res,next){
    req.authStatus = true

    if(req.authStatus){
        console.log('esta logado')
        next()
    }else{
        console.log('nao esta logado,faça o login')

    }

}
app.use(checkAuth)



app.get('/', (req, res) => {
    
    res.sendFile(`${basePath}/index.html`)
    
    })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))