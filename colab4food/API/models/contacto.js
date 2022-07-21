const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'contacto',
    {
      id_contacto: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_organizacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'organizacao',
          key: 'id_organizacao',
        },
      },
      id_cargo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cargo',
          key: 'id_cargo',
        },
      },
      isContactoPrincipal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      nomeContacto: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'contacto',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id_contacto' },
          ],
        },
        {
          name: 'id_organizacao_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_organizacao' },
          ],
        },
        {
          name: 'id_cargo_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_cargo' },
          ],
        },
      ],
    }
  );
};
