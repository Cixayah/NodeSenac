const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bdConexao');
const usuario = new require('./usuario');
class Pet extends Model { }

Pet.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    tamanho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    doenca: {
        type: DataTypes.STRING,
        allowNull: true
    },
    obs: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'pets'
});
usuario.hasMany(Pet) // Usuário tem muitos Pets 1-p-M
Pet.belongsTo(usuario) // Pet pertence a Usuário 1-p-1
sequelize.sync()
module.exports = Pet;
