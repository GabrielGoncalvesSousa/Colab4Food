const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'interacao',
    {
      id_interacao: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_contacto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'contacto',
          key: 'id_contacto',
        },
      },
      id_processoContacto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'processo_contacto',
          key: 'id_processoContacto',
        },
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id_user',
          foreignkey: 'LALALALA FKKK',
        },
      },
      dataInteracao: {
        type: DataTypes.DATE(6),
        allowNull: false,
      },
      observacoes: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: '0',
      },
      titulo: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      faseInteracao: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'interacao',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id_interacao' },
          ],
        },
        {
          name: 'FK_contacto_interacao_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_contacto' },
          ],
        },
        {
          name: 'FK_processoContacto_interacao_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_processoContacto' },
          ],
        },
        {
          name: 'FK_user_interacao_idx',
          using: 'BTREE',
          fields: [
            { name: 'id_user' },
          ],
        },
      ],
    }
  );
};
