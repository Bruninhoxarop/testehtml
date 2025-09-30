
const Sequelize = require('sequelize');
//dependência do Sequelize.
const sequelize = new Sequelize({ //novo objeto
    dialect: 'sqlite',
    //tipo de linguagem.
    storage: './database.sqlite'
    //caminho do banco, na raiz do projeto, se quiser fzr uma página só pra ele tbm pode.
});

module.exports = sequelize;
//exportar o objeto