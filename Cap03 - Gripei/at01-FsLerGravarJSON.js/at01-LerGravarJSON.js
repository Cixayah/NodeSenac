//Importação do módulo criado fsJSON
const rwJSON = require('./fsJSON')

//Dados a serem gravados
let arquivo = './alunos.json'
let obj = {
    nome: 'Alice',
    nota1:5,
    nota2:6.5,
    nota3:8,
    nota4:4.5
}

//Leitura e carga de um arquivo JSON
var json = rwJSON.lerJSON(arquivo)
console.log(json)

//Conversão de string JSON em um objeto javaScript
var dados = rwJSON.converterJSON_Obj(json)
console.log(dados)

//Inserção de novo registro
dados.push(obj)
console.log(obj)

//Conversão do obj atualizado para JSON
json = rwJSON.converterObj_JSON(dados)
console.log(json)

//Regravação do arquivo com dados atualizados
rwJSON.salvarJSON(json, arquivo)