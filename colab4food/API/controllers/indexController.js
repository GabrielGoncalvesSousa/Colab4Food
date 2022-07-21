let mainIndexController = (db) => {
  const cargoController = require('../controllers/cargoController').mainFunction(db);
  const contactoController = require('../controllers/contactoController').mainFunction(db);
  const distritoController = require('../controllers/distritoController').mainFunction(db);
  const fase_processoController = require('../controllers/fase_processoController').mainFunction(db);
  const interacaoController = require('../controllers/interacaoController').mainFunction(db);
  const loss_reasonController = require('../controllers/loss_reasonController').mainFunction(db);
  const oportunidadeController = require('../controllers/oportunidadeController').mainFunction(db);
  const organizacaoController = require('../controllers/organizacaoController').mainFunction(db);
  const prioridadeController = require('../controllers/prioridadeController').mainFunction(db);
  const processo_contactoController = require('../controllers/processo_contactoController').mainFunction(db);
  const sourceController = require('../controllers/sourceController').mainFunction(db);
  const stageController = require('../controllers/stageController').mainFunction(db);
  const tipo_organizacaoController = require('../controllers/tipo_organizacaoController').mainFunction(db);
  const tipo_servicoController = require('../controllers/tipo_servicoController').mainFunction(db);
  const tipo_userController = require('../controllers/tipo_userController').mainFunction(db);
  const userController = require('../controllers/userController').mainFunction(db);

  return {
    cargoController,
    contactoController,
    distritoController,
    fase_processoController,
    interacaoController,
    loss_reasonController,
    oportunidadeController,
    organizacaoController,
    prioridadeController,
    processo_contactoController,
    sourceController,
    stageController,
    tipo_organizacaoController,
    tipo_servicoController,
    tipo_userController,
    userController,
  };
};

module.exports = {
  mainIndexController,
};
