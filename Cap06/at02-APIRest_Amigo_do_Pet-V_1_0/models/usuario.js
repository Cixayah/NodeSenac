const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bdConexao');

class Usuario extends Model { }

Usuario.init({
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(11),
    allowNull: false
  },
  whatsapp: {
    type: DataTypes.STRING(11),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'usuarios'
});

module.exports = Usuario;
