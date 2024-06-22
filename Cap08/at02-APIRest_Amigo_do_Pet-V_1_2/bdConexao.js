const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(
    'amigo_do_pet2', 'nodejs', '1234', {
        host:'localhost',
        dialect:'mysql',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timezone:"-03:00"
    })
try {
    sequelize.authenticate()
    console.log('Conectado ao banco')
} catch (erro) {
    console.log('Não foi possível conectar: ', erro )
}
module.exports = sequelize

