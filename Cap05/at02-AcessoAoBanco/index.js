const express = require('express')
const app = express()
const conn = require('./db')();
const path = require('path')
const baseDir = path.join(__dirname, 'template')
var port = '3200'
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => res.sendFile(`${baseDir}/index.html`))
app.get('/cadastrar', (req, res) => res.sendFile(`${baseDir}/cadastrar.html`))
app.get('/registros', (req, res) => {
    const sql = 'SELECT * FROM pets;'
})