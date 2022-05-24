const express = require('express');
const app = express();

const cargoRouter = require('./cargoRouter');
app.use('/cargo', cargoRouter);

const contactoRouter = require('./contactoRouter');
app.use('/contacto', contactoRouter);

const distritoRouter = require('./distritoRouter');
app.use('/distrito', distritoRouter);

const fase_processoRouter = require('./fase_processoRouter');
app.use('/fase_processo', fase_processoRouter);

const interacaoRouter = require('./interacaoRouter');
app.use('/interacao', interacaoRouter);

const loss_reasonRouter = require('./loss_reasonRouter');
app.use('/loss_reason', loss_reasonRouter);

const oportunidadeRouter = require('./oportunidadeRouter');
app.use('/oportunidade', oportunidadeRouter);

const organizacaoRouter = require('./organizacaoRouter');
app.use('/organizacao', organizacaoRouter);

const prioridadeRouter = require('./prioridadeRouter');
app.use('/prioridade', prioridadeRouter);

const processo_contactoRouter = require('./processo_contactoRouter');
app.use('/processo', processo_contactoRouter);

const sourceRouter = require('./sourceRouter');
app.use('/source', sourceRouter);

const stageRouter = require('./stageRouter');
app.use('/stage', stageRouter);

const tipo_organizacaoRouter = require('./tipo_organizacaoRouter');
app.use('/tipo_organizacao', tipo_organizacaoRouter);

const tipo_servicoRouter = require('./tipo_servicoRouter');
app.use('/tipo_servico', tipo_servicoRouter);

const tipo_userRouter = require('./tipo_userRouter');
app.use('/tipo_user', tipo_userRouter);

const userRouter = require('./userRouter');
app.use('/user', userRouter);

module.exports = app;
