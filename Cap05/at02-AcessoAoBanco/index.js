const express = require('express')
const app = express()
const conn = require('./db')();
const path = require('path')
const baseDir = path.join(__dirname, 'templates')
var port = '3200'
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => res.sendFile(`${baseDir}/index.html`))
app.get('/cadastrar', (req, res) => res.sendFile(`${baseDir}/cadastrar.html`))
app.get('/registros', (req, res) => {
    const sql = 'SELECT * FROM pets;'

    try {
        conn.query(sql, (erro, dados) => {
            if (erro) resposta = {
                ...erro, status: 400, message: `Erro ao consultar os dados.`
            }
            else resposta = {
                ...dados, status: 200, message: `Sucesso!`
            }
            res.json(resposta).status(200)
        })
    } catch (error) {
        console.log(error)
    }
})

app.post('/cadastrar/pets', (req, res) => {
    let {
        name, especie, idadeAproximada, porteTamanho, corPredominante, corSecundaria
    } = req.body

    let dados = [
        name, especie, parseFloat(idadeAproximada), porteTamanho, corPredominante, corSecundaria
    ]
})

app.listen(port, () => console.log
    (
        `Servidor rodando em: http://localhost:${port}`
    ))