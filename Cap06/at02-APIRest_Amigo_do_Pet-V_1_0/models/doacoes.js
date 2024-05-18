const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bdConexao');

class Doacoes extends Model { }

Doacoes.init({
    data_interesse: {
        type: DataTypes.DATE,
        allowNull: false
    },
    data_doacao: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'doacoes'
});

module.exports = Doacoes;
