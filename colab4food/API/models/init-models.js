var DataTypes = require('sequelize').DataTypes;
var _cargo = require('./cargo');
var _contacto = require('./contacto');
var _distrito = require('./distrito');
var _fase_processo = require('./fase_processo');
var _interacao = require('./interacao');
var _loss_reason = require('./loss_reason');
var _oportunidade = require('./oportunidade');
var _organizacao = require('./organizacao');
var _prioridade = require('./prioridade');
var _processo_contacto = require('./processo_contacto');
var _source = require('./source');
var _stage = require('./stage');
var _tipo_organizacao = require('./tipo_organizacao');
var _tipo_servico = require('./tipo_servico');
var _tipo_user = require('./tipo_user');
var _user = require('./user');

function initModels(Sequelize) {
  let sequelize = Sequelize;
  var cargo = _cargo(sequelize, DataTypes);
  var contacto = _contacto(sequelize, DataTypes);
  var distrito = _distrito(sequelize, DataTypes);
  var fase_processo = _fase_processo(sequelize, DataTypes);
  var interacao = _interacao(sequelize, DataTypes);
  var loss_reason = _loss_reason(sequelize, DataTypes);
  var oportunidade = _oportunidade(sequelize, DataTypes);
  var organizacao = _organizacao(sequelize, DataTypes);
  var prioridade = _prioridade(sequelize, DataTypes);
  var processo_contacto = _processo_contacto(sequelize, DataTypes);
  var source = _source(sequelize, DataTypes);
  var stage = _stage(sequelize, DataTypes);
  var tipo_organizacao = _tipo_organizacao(sequelize, DataTypes);
  var tipo_servico = _tipo_servico(sequelize, DataTypes);
  var tipo_user = _tipo_user(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  oportunidade.belongsTo(interacao, { foreignKey: 'id_interacao' });
  interacao.hasMany(oportunidade, { foreignKey: 'id_interacao' });
  contacto.belongsTo(cargo, { foreignKey: 'id_cargo' });
  cargo.hasMany(contacto, { foreignKey: 'id_cargo' });
  interacao.belongsTo(contacto, { foreignKey: 'id_contacto' });
  contacto.hasMany(interacao, { foreignKey: 'id_contacto' });
  organizacao.belongsTo(distrito, { foreignKey: 'id_distrito' });
  distrito.hasMany(organizacao, { foreignKey: 'id_distrito' });
  processo_contacto.belongsTo(fase_processo, { foreignKey: 'id_faseProcesso' });
  fase_processo.hasMany(processo_contacto, { foreignKey: 'id_faseProcesso' });
  oportunidade.belongsTo(loss_reason, {  foreignKey: 'id_lossReason' });
  loss_reason.hasMany(oportunidade, {foreignKey: 'id_lossReason' });
  contacto.belongsTo(organizacao, { foreignKey: 'id_organizacao' });
  organizacao.hasMany(contacto, {foreignKey: 'id_organizacao' });
  processo_contacto.belongsTo(organizacao, { foreignKey: 'id_organizacao' });
  organizacao.hasMany(processo_contacto, { foreignKey: 'id_organizacao' });
  organizacao.belongsTo(prioridade, { foreignKey: 'id_prioridade' });
  prioridade.hasMany(organizacao, { foreignKey: 'id_prioridade' });
  processo_contacto.belongsTo(prioridade, { foreignKey: 'id_prioridade' });
  prioridade.hasMany(processo_contacto, {  foreignKey: 'id_prioridade' });

  interacao.belongsTo(processo_contacto, {
  
    foreignKey: 'id_processoContacto',
  });
  processo_contacto.hasMany(interacao, { foreignKey: 'id_processoContacto' });
  oportunidade.belongsTo(processo_contacto, {
 
    foreignKey: 'id_processoContacto',
  });
  processo_contacto.hasMany(oportunidade, { foreignKey: 'id_processoContacto' });
  oportunidade.belongsTo(source, { foreignKey: 'id_source' });
  source.hasMany(oportunidade, { foreignKey: 'id_source' });
  oportunidade.belongsTo(stage, { foreignKey: 'id_stage' });
  stage.hasMany(oportunidade, {foreignKey: 'id_stage' });
  organizacao.belongsTo(tipo_organizacao, {
   
    foreignKey: 'id_tipoOrganizacao',
  });
  tipo_organizacao.hasMany(organizacao, { foreignKey: 'id_tipoOrganizacao' });
  oportunidade.belongsTo(tipo_servico, { foreignKey: 'id_tipoServico' });
  tipo_servico.hasMany(oportunidade, {  foreignKey: 'id_tipoServico' });

  user.belongsTo(tipo_user, { foreignKey: 'id_tipoUser' });
  tipo_user.hasMany(user, { foreignKey: 'id_tipoUser' });

  interacao.belongsTo(user, { foreignKey: 'id_user' });
  user.hasMany(interacao, {  foreignKey: 'id_user' });
  organizacao.belongsTo(user, { name: 'id_user_user', foreignKey: 'id_user' });
  user.hasMany(organizacao, {foreignKey: 'id_user' });
  processo_contacto.belongsTo(user, { foreignKey: 'id_user' });
  user.hasMany(processo_contacto, { foreignKey: 'id_user' });
  return sequelize;
}
module.exports = initModels;
