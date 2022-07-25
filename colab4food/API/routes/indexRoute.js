mainIndexRoute = (indexController) => {
 const express = require('express');
 const app = express();

 //cors = Cross-Origin Resource Sharing = de forma a fazeres pedidos de um servidor na rede (sem ser no mesmo pc)
 const cors = require('cors');
 app.use(cors());

 //para mandar dados pelo post e utilizar o body
 const bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json({
  strict: false
 }))



 console.log(indexController);
 const cargoRouter = require('./cargoRouter')(indexController.cargoController);
 app.use('/cargo', cargoRouter);

 const contactoRouter = require('./contactoRouter')(indexController.contactoController);
 app.use('/contacto', contactoRouter);

 const distritoRouter = require('./distritoRouter')(indexController.distritoController);
 app.use('/distrito', distritoRouter);

 const fase_processoRouter = require('./fase_processoRouter')(indexController.fase_processoController);
 app.use('/fase_processo', fase_processoRouter);

 const interacaoRouter = require('./interacaoRouter')(indexController.interacaoController);
 app.use('/interacao', interacaoRouter);

 const loss_reasonRouter = require('./loss_reasonRouter')(indexController.loss_reasonController);
 app.use('/loss_reason', loss_reasonRouter);

 const oportunidadeRouter = require('./oportunidadeRouter')(indexController.oportunidadeController);
 app.use('/oportunidade', oportunidadeRouter);

 const organizacaoRouter = require('./organizacaoRouter')(indexController.organizacaoController);
 app.use('/organizacao', organizacaoRouter);

 const prioridadeRouter = require('./prioridadeRouter')(indexController.prioridadeController);
 app.use('/prioridade', prioridadeRouter);

 const processo_contactoRouter = require('./processo_contactoRouter')(indexController.processo_contactoController);
 app.use('/processo', processo_contactoRouter);

 const sourceRouter = require('./sourceRouter')(indexController.sourceController);
 app.use('/source', sourceRouter);

 const stageRouter = require('./stageRouter')(indexController.stageController);
 app.use('/stage', stageRouter);

 const tipo_organizacaoRouter = require('./tipo_organizacaoRouter')(indexController.tipo_organizacaoController);
 app.use('/tipo_organizacao', tipo_organizacaoRouter);

 const tipo_servicoRouter = require('./tipo_servicoRouter')(indexController.tipo_servicoController);
 app.use('/tipo_servico', tipo_servicoRouter);

 const tipo_userRouter = require('./tipo_userRouter')(indexController.tipo_userController);
 app.use('/tipo_user', tipo_userRouter);

 const userRouter = require('./userRouter')(indexController.userController);
 app.use('/user', userRouter);

 return app;
};
module.exports = mainIndexRoute;
