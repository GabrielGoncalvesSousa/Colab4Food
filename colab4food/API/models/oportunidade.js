const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'oportunidade',
    {
      id_oportunidade: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_interacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'interacao',
          key: 'id_interacao',
        },
      },
      id_stage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'stage',
          key: 'id_stage',
        },
      },
      id_lossReason: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'loss_reason',
          key: 'id_lossReason',
        },
      },
      id_source: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'source',
          key: 'id_source',
        },
      },
      id_tipoServico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo_servico',
          key: 'id_tipoServico',
        },
      },
      'project/quotation': {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      budget: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalExpenses: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      adjudicacao: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      recebidoAteData: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      probability: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      scheduledFinishDate: {
        type: DataTypes.DATE(6),
        allowNull: true,
      },
      finishDate: {
        type: DataTypes.DATE(6),
        allowNull: true,
      },
      clientSurvey: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      notes: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'oportunidade',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id_oportunidade' },
          ],
        },
        {
          name: 'FK_interacao_oportunidade_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_interacao' },
          ],
        },
        {
          name: 'FK_stage_oportunidade_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_stage' },
          ],
        },
        {
          name: 'FK_lossReason_oportunidade_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_lossReason' },
          ],
        },
        {
          name: 'FK_source_oportunidade_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_source' },
          ],
        },
        {
          name: 'FK_tipoServico_ooportunidade',
          using: 'BTREE',
          fields: [
            { name: 'id_tipoServico' },
          ],
        },
      ],
    }
  );
};
