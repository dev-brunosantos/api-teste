const express = require('express')
const cors = require('cors')

const port = 3333
const url = `http://localhost:${port}`

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> {
    res.json({mensagem: 'Seja bem vindo'})
})

app.get('/teste', (req, res)=> {
    res.json({mensagem: 'Funcionou'})
})

app.listen(port, ()=> console.log(`Servidor Rodando em: ${url}`))