const Sequelize = require('sequelize');
const database = require('./db');

const Cadastros = database.define('cadastro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.INTEGER
    }
})

module.exports = empresas;