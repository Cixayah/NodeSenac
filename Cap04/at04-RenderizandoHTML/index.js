const app = require('express')()
const path = require('path')
const port = '3200'
//String com o caminho do diretório base + /templates
const baseDir = path.join(__dirname, 'templates')
app.get('/', (req, res) => res.sendFile(`${baseDir}/index.html`))