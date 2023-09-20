const express = require('express')
const filmes = require('./src/data/filmes.json')
const app = express()

app.get('/', (req, res) => {
    res.json({Mensagem: 'Seja bem vindo'})
})

app.get('/filmes', (req, res) => {
    res.json(filmes)
})

app.listen(8000, () => {
    console.log('Servidor está funcionando...')
})