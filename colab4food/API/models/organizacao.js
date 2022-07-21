const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'organizacao',
    {
      id_organizacao: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_tipoOrganizacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo_organizacao',
          key: 'id_tipoOrganizacao',
          name: 'FK_tipoOrganizacao_organizacao',
        },
      },
      id_prioridade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'prioridade',
          key: 'id_prioridade',
        },
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id_user',
        },
      },
      id_distrito: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'distrito',
          key: 'id_distrito',
        },
      },
      nomeOrganizacao: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      cidade: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      'codigo-postal': {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      rua: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'organizacao',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id_organizacao' },
          ],
        },
        {
          name: 'id_tipoOrganizacao_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_tipoOrganizacao' },
          ],
        },
        {
          name: 'id_prioridade_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_prioridade' },
          ],
        },
        {
          name: 'id_user_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_user' },
          ],
        },
        {
          name: 'id_distrito_organizacao_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_distrito' },
          ],
        },
      ],
    }
  );
};
