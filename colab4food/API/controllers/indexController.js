let mainIndexController = (db) => {
  const cargoController = require('../controllers/cargoController').mainFunction(db);
  const contactoController = require('../controllers/contactoController');
  const distritoController = require('../controllers/distritoController');
  const fase_processoController = require('../controllers/fase_processoController');
  const interacaoController = require('../controllers/interacaoController');
  const loss_reasonController = require('../controllers/loss_reasonController');
  const oportunidadeController = require('../controllers/oportunidadeController');
  const organizacaoController = require('../controllers/organizacaoController');
  const prioridadeController = require('../controllers/prioridadeController');
  const processo_contactoController = require('../controllers/processo_contactoController');
  const sourceController = require('../controllers/sourceController');
  const stageController = require('../controllers/stageController');
  const tipo_organizacaoController = require('../controllers/tipo_organizacaoController');
  const tipo_servicoController = require('../controllers/tipo_servicoController');
  const tipoUserController = require('../controllers/tipo_userController');
  const userController = require('../controllers/userController');

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
    tipoUserController,
    userController,
  };
};

module.exports = {
  mainIndexController,
};
