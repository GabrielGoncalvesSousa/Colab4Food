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

function initModels(sequelize) {
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

  oportunidade.belongsTo(interacao, { as: 'id_interacao_interacao', foreignKey: 'id_interacao' });
  interacao.hasMany(oportunidade, { as: 'oportunidades', foreignKey: 'id_interacao' });
  contacto.belongsTo(cargo, { as: 'id_cargo_cargo', foreignKey: 'id_cargo' });
  cargo.hasMany(contacto, { as: 'contactos', foreignKey: 'id_cargo' });
  interacao.belongsTo(contacto, { as: 'id_contacto_contacto', foreignKey: 'id_contacto' });
  contacto.hasMany(interacao, { as: 'interacaos', foreignKey: 'id_contacto' });
  organizacao.belongsTo(distrito, { as: 'id_distrito_distrito', foreignKey: 'id_distrito' });
  distrito.hasMany(organizacao, { as: 'organizacaos', foreignKey: 'id_distrito' });
  processo_contacto.belongsTo(fase_processo, { as: 'id_faseProcesso_fase_processo', foreignKey: 'id_faseProcesso' });
  fase_processo.hasMany(processo_contacto, { as: 'processo_contactos', foreignKey: 'id_faseProcesso' });
  oportunidade.belongsTo(loss_reason, { as: 'id_lossReason_loss_reason', foreignKey: 'id_lossReason' });
  loss_reason.hasMany(oportunidade, { as: 'oportunidades', foreignKey: 'id_lossReason' });
  contacto.belongsTo(organizacao, { as: 'id_organizacao_organizacao', foreignKey: 'id_organizacao' });
  organizacao.hasMany(contacto, { as: 'contactos', foreignKey: 'id_organizacao' });
  processo_contacto.belongsTo(organizacao, { as: 'id_organizacao_organizacao', foreignKey: 'id_organizacao' });
  organizacao.hasMany(processo_contacto, { as: 'processo_contactos', foreignKey: 'id_organizacao' });
  organizacao.belongsTo(prioridade, { as: 'id_prioridade_prioridade', foreignKey: 'id_prioridade' });
  prioridade.hasMany(organizacao, { as: 'organizacaos', foreignKey: 'id_prioridade' });
  processo_contacto.belongsTo(prioridade, { as: 'id_prioridade_prioridade', foreignKey: 'id_prioridade' });
  prioridade.hasMany(processo_contacto, { as: 'processo_contactos', foreignKey: 'id_prioridade' });

  interacao.belongsTo(processo_contacto, {
    as: 'id_processoContacto_processo_contacto',
    foreignKey: 'id_processoContacto',
  });
  processo_contacto.hasMany(interacao, { as: 'interacaos', foreignKey: 'id_processoContacto' });
  oportunidade.belongsTo(processo_contacto, {
    as: 'id_processoContacto_processo_contacto',
    foreignKey: 'id_processoContacto',
  });
  processo_contacto.hasMany(oportunidade, { as: 'oportunidades', foreignKey: 'id_processoContacto' });
  oportunidade.belongsTo(source, { as: 'id_source_source', foreignKey: 'id_source' });
  source.hasMany(oportunidade, { as: 'oportunidades', foreignKey: 'id_source' });
  oportunidade.belongsTo(stage, { as: 'id_stage_stage', foreignKey: 'id_stage' });
  stage.hasMany(oportunidade, { as: 'oportunidades', foreignKey: 'id_stage' });
  organizacao.belongsTo(tipo_organizacao, {
    as: 'id_tipoOrganizacao_tipo_organizacao',
    foreignKey: 'id_tipoOrganizacao',
  });
  tipo_organizacao.hasMany(organizacao, { as: 'organizacaos', foreignKey: 'id_tipoOrganizacao' });
  oportunidade.belongsTo(tipo_servico, { as: 'id_tipoServico_tipo_servico', foreignKey: 'id_tipoServico' });
  tipo_servico.hasMany(oportunidade, { as: 'oportunidades', foreignKey: 'id_tipoServico' });

  user.belongsTo(tipo_user, { foreignKey: 'id_tipoUser' });
  tipo_user.hasMany(user, { foreignKey: 'id_tipoUser', as: 'Users' });

  interacao.belongsTo(user, { as: 'id_user_user', foreignKey: 'id_user' });
  user.hasMany(interacao, { as: 'interacaos', foreignKey: 'id_user' });
  organizacao.belongsTo(user, { name: 'id_user_user', foreignKey: 'id_user' });
  user.hasMany(organizacao, { as: 'organizacaos', foreignKey: 'id_user' });
  processo_contacto.belongsTo(user, { as: 'id_user_user', foreignKey: 'id_user' });
  user.hasMany(processo_contacto, { as: 'processo_contactos', foreignKey: 'id_user' });

  return {
    cargo,
    contacto,
    distrito,
    fase_processo,
    interacao,
    loss_reason,
    oportunidade,
    organizacao,
    prioridade,
    processo_contacto,
    source,
    stage,
    tipo_organizacao,
    tipo_servico,
    tipo_user,
    user,
  };
}
module.exports = initModels;
