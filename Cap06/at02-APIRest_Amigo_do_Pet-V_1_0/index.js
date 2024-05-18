const sequelize = require('./bdConexao');
const Usuario = require('./models/usuario');
const Pet = require('./models/pet');
const Doacoes = require('./models/doacoes');

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database: ', err);
    });

module.exports = { Usuario, Pet, Doacoes };
