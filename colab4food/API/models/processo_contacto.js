const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'processo_contacto',
    {
      id_processoContacto: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id_user',
        },
      },
      id_organizacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'organizacao',
          key: 'id_organizacao',
        },
      },
      id_faseProcesso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'fase_processo',
          key: 'id_faseProcesso',
        },
      },
      dataInicio: {
        type: DataTypes.DATE(6),
        allowNull: false,
      },
      dataFim: {
        type: DataTypes.DATE(6),
        allowNull: false,
      },
      objetivo: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      observacoes: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'processo_contacto',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id_processoContacto' },
          ],
        },
        {
          name: 'FK_user_processoContacto_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_user' },
          ],
        },
        {
          name: 'FK_organizacao_processoContacto_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_organizacao' },
          ],
        },
        {
          name: 'FK_fase_processoContacto_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_faseProcesso' },
          ],
        },
      ],
    }
  );
};
