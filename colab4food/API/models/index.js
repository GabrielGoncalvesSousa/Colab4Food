'use strict';

//Manipulacao ficheiros
const fs = require('fs');
//Manipulacao caminhos
const path = require('path');
//o sequelize em si
const Sequelize = require('sequelize');

//__filename = caminho, e a funcao faz com que o basename va ter apenas
//o nome deste ficheiro, index.js
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

//variavel que vai criar um objeto Sequelize com a ligacao a bd
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//Isto não da return de nada, é so para correr a funcao, os inits de cada modulo ja poem automaticamente no sequelize.models e depois ao fazer as ligacoes tb ja fica dentro de cada module
let helper = require('./init-models');
let udpatedsequelizer = helper(sequelize);
module.exports = udpatedsequelizer;

/* 
__dirname= caminho da directoria (caminho ate pasta models)
fs = cena para manipular ficheiros
readdirSync( __dirname)= ler os ficheiros todos dentro de models e devolve array com nome dos ficheiros
.filter = pega no array dos nomes devolvidos de readdirSync() e devolve todos os nomes que nao tenham "." no inicio, que sejam .js e que nao se chame este ficheiro (index.js)
.forEach() = pegar no array que .filter devolveu e por cada ficheiro, vai criar uma var c o require do proprio ficheiro ,  onde corremos a funcao do sequelize.define de cada ficheiro, que vai retornar um modelo definido e adicionamos assim um modelo ja defenido no array db
É AQUI QUE A FUNCAO DO INIT.MODELS CORRE


fs
  .readdirSync(__dirname)
  .filter((unfilteredFile) => {
    return (
      unfilteredFile.indexOf('.') !== 0 &&
      // unfilteredFile != 'init-models.js' &&
      unfilteredFile !== basename &&
      unfilteredFile.slice(-3) === '.js'
    );
  })
  .forEach((filteredFile) => {
    console.log('AQUIIIII');
    console.log(filteredFile);

    if (filteredFile != 'init-models.js') {
      const model = require(path.join(__dirname, filteredFile))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }
    //É AQUI QUE A FUNCAO DO INIT.MODELS CORRE
  });

Sabe-se la como isto popula o sequelize.models com os respetivos modelos
sequelize.models = require('./init-models')(sequelize);
let init = require('./init-models');
sequelize.models = init.initModels(sequelize);


Legacy code para se por acaso alguem criar um modelo e usar o old  example code
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });
    */
