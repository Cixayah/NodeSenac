const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 3200

const server = http.createServer((req, res) => {
    //Pega a substring após a "/"
    let pagina = q.pathname.substring(1)
    //Aponta url inicial para o index.html
    pagina = pagina == '' ? 'index.html' : pagina
})